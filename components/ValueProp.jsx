import style from "@/components/Value.module.css"
import Image from "next/image"
import image_cameraman from "@/assets/cameraman.png"
import image_locationIcon from "@/assets/location_svg.svg"
import image_hotspotIcon from "@/assets/hotspot_icon.svg"
import world from "@/assets/world_map.png"
function ValueProp() {
  return (
    <section className="section section__value">
      <div className="section__inner">
        <div className={`${style.value} value-1`}>
          <div className={`${style.value__photo}`}>
            <Image
            src={image_cameraman}
            />
            <div className={`${style.destinations__card}`}>
              <div className={`${style.image__wrapper}`}>
              <Image
                src={image_locationIcon}
              />
              </div>
              
              <h4>600%</h4>
              <p>Destinations</p>
            </div>
            <div className={`${style.customer__card}`}>
            <div className={`${style.image__wrapper}`}>
              <Image
                src={image_hotspotIcon}
              />
              </div>
              <div className={`${style.stats}`}>
                <h4>5000+</h4>
                <p>Customers</p>
              </div>
              
            </div>
          </div>
          <div className={`${style.value__content}`}>
            <h2>Travel and experience seamless experience with us</h2>
            <p>Travel with your friends and family with one single tap and plan your trips together whilst in your comfort zone</p>
            <button className="btn btn-primary">Start booking</button>
          </div>
        </div>
        <div className={`${style.value} ${style.value__2}`}>
          <div className={`${style.value__content}`}>
            <h2>Our stories have adventures and you can explore them all!</h2>
            <p>We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className={`${style.value__photo}`}>
            <Image
              src={world}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProp