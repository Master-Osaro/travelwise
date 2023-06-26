import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
// const inter = Inter()

// define 2 weights of a non-variable font
const Roboto400 = Roboto({ weight: '400' })
const Roboto700 = Roboto({ weight: '700' })
// define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export {Roboto400, Roboto700}