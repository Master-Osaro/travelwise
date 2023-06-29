import Head from 'next/head'
import Image from 'next/image'
import { Roboto, Montserrat, Mulish } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import ValueProp from '@/components/ValueProp'
import Locations from '@/components/Locations'
import Subscribe from '@/components/Subscribe'
import Footer from '@/components/Footer'
import Partners from '@/components/Partners'

const roboto = Roboto({
  subsets: ['latin'],
  weight : ['100','300','400','500','700', '900'],
  variable: '--font-roboto',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Travel Wise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={`${roboto.variable} ${mulish.variable} ${styles.main}`}>
        <Intro />
        <Partners />
        <div className="client__list"></div>
        <ValueProp />
        <Locations />
        <Subscribe />
      </main>
      <Footer roboto={roboto}/>
    </>
  )
}
