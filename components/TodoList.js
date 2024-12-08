import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/TodoList.module.css'

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      const newTodo = {
        id: uuidv4(),
        text: input,
        completed: false
      }
      setTodos([...todos, newTodo])
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    // Check if the key pressed is Enter
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>School To-Do List</h2>
      <div className={styles.inputContainer}>
        <input 
          className={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task"
        />
        <button 
          className={styles.addButton}
          onClick={addTodo}
        >
          Add Task
        </button>
      </div>
      
      <ul className={styles.todoList}>
        {todos.map((todo) => (
          <li key={todo.id} className={styles.todoItem}>
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}