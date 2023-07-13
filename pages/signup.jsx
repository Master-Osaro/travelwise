import Head from 'next/head'
import Image from 'next/image'
import { Nunito_Sans, Nunito } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import ValueProp from '@/components/ValueProp'
import Locations from '@/components/Locations'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'
import DemoComponent from '@/components/DemoComponent'

const nunito = Nunito({
  subsets: ['latin'],
  weight : ['200','300','400','500','700', '900'],
  variable: '--font-nunito',
})

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export default function SignUp() {
  return (
    <>
      <Head>
        <title>SignUp for Travel Wise</title>
        <meta name="description" content="TravelWise: SignUp to enjoy travel discounts on your next travel!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${nunito.variable} ${nunito_sans.variable} ${styles.main}`}>
        <h2 className="">Sign Up</h2>
        <DemoComponent />
      </main>
      <Footer nunito={nunito}/>
    </>
  )
}

