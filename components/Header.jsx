import { useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'
import Logo from './Logo'
import { ThreeDotsVertical } from "react-bootstrap-icons";


const inter = Inter({ subsets: ['latin'] })
function Header() {
  const [navOpen, setNavOpen] =  useState(false);
  return (
    <header className={`${inter.className} ${styles.header}`}>
    <nav className={`${inter.className} nav`}>
      <Logo />
      <button className="menu" aria-label="menu" aria-expanded={navOpen} onClick={()=>{setNavOpen(!navOpen)}}><ThreeDotsVertical /></button>
      <div className={`nav__group ${navOpen? "show":""}`}>
        <ul className={`nav-list`}>
          <li><a href="#programs"><i className="bi bi-map"></i>Home</a></li>
          <li><a href="#admissions"><i className="bi bi-arrows-move"></i>Listing</a></li>
          <li><a href="#contact"><i className="bi bi-chat-square"></i>Contact Us</a></li>
        </ul>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={()=>{setNavOpen(!navOpen)}}>Login</button>
          <button className="btn btn-secondary">Sign Up</button>
        </div>
      </div>

      
      
    </nav>
  </header>
  )
}

export default Header