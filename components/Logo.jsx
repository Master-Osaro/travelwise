import { Inter } from 'next/font/google'
import styles from '@/components/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import travelLogo from "@/assets/logo/travelwise_logo.svg"

const inter = Inter({ subsets: ['latin'] })

function Logo() {
  return (
    <Link href="/"><div className={`logo ${styles.logo} ${inter.className}`}><Image src={travelLogo} alt="Travelwise logo icon"/>Travelwise</div></Link>
  )
}

export default Logo