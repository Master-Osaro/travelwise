import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'
import Image from 'next/image'
import travelLogo from "@/assets/logo/travelwise_logo.svg"

const inter = Inter({ subsets: ['latin'] })

function Logo() {
  return (
    <div className={`logo ${styles.logo} ${inter.className}`}><Image src={travelLogo} alt="Travelwise logo icon"/>Travelwise</div>
  )
}

export default Logo