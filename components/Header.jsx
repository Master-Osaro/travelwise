import { useState } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'
import Logo from './Logo'
import { List } from "react-bootstrap-icons";


const inter = Inter({ subsets: ['latin'] })
function Header() {
  const [navOpen, setNavOpen] =  useState(false);
  return (
    <header className={`${inter.className} ${styles.header}`}>
    <nav className={`${inter.className} nav`}>
      <Logo />
      <button className="menu" aria-label="menu" aria-expanded={navOpen} onClick={()=>{setNavOpen(!navOpen)}}><List size={24} /></button>
      <div className={`nav__group ${navOpen? "show":""}`}>
        <ul className={`nav-list`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/destinations">Listings</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="btn-group">
          <Link href="/login"><button className="btn btn-primary">Login</button></Link>
          <Link href="/signup"><button className="btn btn-secondary">Sign Up</button></Link>
        </div>
      </div>

      
      
    </nav>
  </header>
  )
}

export default Header