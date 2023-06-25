import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'

const inter = Inter({ subsets: ['latin'] })
function Header() {
  return (
    <header className={`${inter.className} ${styles.header}`}>
    <nav className={`${inter.className} nav`}>
      <div className="logo">Travel wise</div>
      {/* <button class="menu" aria-label="menu" aria-expanded={"false"} onClick={()=>{console.log("Clickkk")}}><i classNameName="bi bi-list"></i></button> */}
      <ul className={`nav-list`  }>
        <li><a href="#programs"><i className="bi bi-map"></i>Home</a></li>
        <li><a href="#admissions"><i className="bi bi-arrows-move"></i>Listing</a></li>
        <li><a href="#resources"><i className="bi bi-journal-richtext"></i>Pages</a></li>
        <li><a href="#contact"><i className="bi bi-chat-square"></i>Contact Us</a></li>
      </ul>
      <div className="btn-group">
        <button className="btn btn-primary"><i className="bi bi-arrow-right-circle"></i>Login</button>
        <button className="btn btn-secondary"><i className="bi bi-calendar2-event"></i>Sign Up</button>
      </div>
    </nav>
  </header>
  )
}

export default Header