import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'
import Logo from './Logo'

const inter = Inter({ subsets: ['latin'] })
function Header() {
  return (
    <header className={`${inter.className} ${styles.header}`}>
    <nav className={`${inter.className} nav`}>
      <div className="nav__group">
        <Logo />
        {/* <button class="menu" aria-label="menu" aria-expanded={"false"} onClick={()=>{console.log("Clickkk")}}><i classNameName="bi bi-list"></i></button> */}
        <ul className={`nav-list`}>
          <li><a href="#programs"><i className="bi bi-map"></i>Home</a></li>
          <li><a href="#admissions"><i className="bi bi-arrows-move"></i>Listing</a></li>
          <li><a href="#contact"><i className="bi bi-chat-square"></i>Contact Us</a></li>
        </ul>
      </div>
      
      <div className="btn-group">
        <button className="btn btn-primary">Login</button>
        <button className="btn btn-secondary">Sign Up</button>
      </div>
    </nav>
  </header>
  )
}

export default Header