import Image from "next/image"
import logo_airbnb from "@/assets/partner_logos/logo_airbnb.svg"
import logo_booking from "@/assets/partner_logos/logo_booking.svg"
import logo_expedia from "@/assets/partner_logos/logo_expedia.svg"
import logo_spotify from "@/assets/partner_logos/logo_spotify.svg"
import logo_skyscanner from "@/assets/partner_logos/logo_skyscanner.svg"

import styles from "@/components/Partners.module.css"
function Partners() {
  return (
    <section className={`section ${styles.section__partners}`}>
        <div className={`section__inner ${styles.section__inner}`}>
        <div className={`${styles.partner__list}`}>
            <div className={`${styles.partner}`}><Image src={logo_airbnb} /></div>
            <div className={`${styles.partner}`}><Image src={logo_booking} /></div>
            <div className={`${styles.partner}`}><Image src={logo_expedia} /></div>
            <div className={`${styles.partner}`}><Image src={logo_spotify} /></div>
            <div className={`${styles.partner}`}><Image src={logo_skyscanner} /></div>
        </div>
            
        </div>
    </section>
  )
}

export default Partners