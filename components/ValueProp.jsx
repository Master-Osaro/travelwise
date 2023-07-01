import style from "@/components/Value.module.css"
import Image from "next/image"
import image_cameraman from "@/assets/cameraman.png"
import image_locationIcon from "@/assets/location_svg.svg"
import image_hotspotIcon from "@/assets/hotspot_icon.svg"
import world from "@/assets/world_map.png"
function ValueProp() {
  return (<>
    <section className="section section__value bg__grey">
      <div className="section__inner">
        <div className={`${style.value} ${style.value__1}  value-1`}>
          <div className={`${style.value__photo}`}>
            <Image
            src={image_cameraman}
            alt="Boy on yellow jacket with a canon camera around his neck, smiling to the camera with hands in his pocket"
            />
            <div className={`${style.destinations__card}`}>
              <div className={`${style.image__wrapper}`}>
              <Image
                src={image_locationIcon}
                alt="Location Icon on pink linear gradient background"
              />
              </div>
              
              <h4>600%</h4>
              <p>Destinations</p>
            </div>
            <div className={`${style.customer__card}`}>
            <div className={`${style.image__wrapper}`}>
              <Image
                src={image_hotspotIcon}
                alt="hotspot icon"
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
        
      </div>
    </section>
    <section className="section section__value">
      <div className="section__inner">
      <div className={`${style.value} ${style.value__2}`}>
          <div className={`${style.value__content}`}>
            <h2>Our stories have adventures and you can explore them all!</h2>
            <p>We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className={`${style.value__photo}`}>
            <Image
              src={world}
              alt="Light pink map of the world, Flat earthers will be proud of this map lol"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ValueProp