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

const nunito = Nunito({
  subsets: ['latin'],
  weight : ['200','300','400','500','700', '900'],
  variable: '--font-nunito',
})

const nunito_sans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
})

export default function Home() {
  return (
    <>
      <Head>
        
        <meta charset="utf-8" />
        <title>Travel Wise</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="title" content="Travel Wise" />
        <meta name="description" content="TravelWise Your travel companion app. UI Design - @oshioke_ui, Code - @osaaroh " />
        <meta name="keywords" content="Travel, Travelwise, Travel wise, Destination, experiences, 100daysofcode, frontendmentor, osaro, osaro iyoha, iyoha, javascript beginner, frontend, next js, Oshioke UI" />
        <meta property="image" content="https://travelwise-eight.vercel.app/travelwise.jpg" />
        <meta property="og:title" content="TravelWise" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content="TravelWise Your travel companion app. UI Design - @oshioke_ui, Code - @osaaroh" />
        <meta property="og:url" content="https://travelwise-eight.vercel.app/" />
        <meta property="og:image" content="https://travelwise-eight.vercel.app/travelwise.jpg" />
        <meta property="twitter:description" content="TravelWise Your travel companion app. UI Design - @oshioke_ui, Code - @osaaroh" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="Travelwise website design preview" />
      </Head>
      <Header />
      <main className={`${nunito.variable} ${nunito_sans.variable} ${styles.main}`}>
        <Intro />
        <Partners />
        <div className="client__list"></div>
        <ValueProp />
        <Locations />
        <Subscribe />
      </main>
      <Footer nunito={nunito}/>
    </>
  )
}
