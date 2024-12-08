import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>School Todo App</div>
      
      {/* Theme Toggle Button */}
      <button 
        className={styles.themeToggle}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
      
      {/* Hamburger Menu for Mobile */}
      <div 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} 
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ''}`}>
        <a href="#" className={styles.navItem} onClick={toggleMenu}>Home</a>
        <a href="#" className={styles.navItem} onClick={toggleMenu}>Tasks</a>
        <a href="#" className={styles.navItem} onClick={toggleMenu}>Profile</a>
      </nav>
    </header>
  )
}