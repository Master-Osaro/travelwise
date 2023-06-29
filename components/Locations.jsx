import style from "@/components/Locations.module.css"
import Image from "next/image"
import location1 from "@/assets/locations/location1.jpg"
import location2 from "@/assets/locations/location2.jpg"
import location3 from "@/assets/locations/location3.jpg"
import location4 from "@/assets/locations/location4.jpg"
import location5 from "@/assets/locations/location5.jpg"
function Locations() {
  return (
    <section className={`section ${style.section__locations} bg__grey`}>
        <div className={`section__inner ${style.section__inner}`}>
            <h2>Popular Locations</h2>
            <p><span>There are many packages more than you need just to make sure that you get enough options to avail the best one</span></p>
            <div className={`${style.location__list} location__list`}>
                <div className={`${style.location}`}>
                    <Image src={location1} alt="" />
                    <div className={style.location__header}><h3>Mountain Hiking Tour</h3> <div className={style.rating}>4.5</div></div>
                    <p>Himalayas, Hawaii</p>
                    <div className={style.book_btn__group}>
                        <p><span>$1000</span>/person</p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
                <div className={`${style.location}`}>
                    <Image src={location2} alt="" />
                    <div className={style.location__header}><h3>Mountain Hiking Tour</h3> <div className={style.rating}>4.5</div></div>
                    <p>Himalayas, Hawaii</p>
                    <div className={style.book_btn__group}>
                        <p><span>$1000</span>/person</p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
                <div className={`${style.location}`}>
                    <Image src={location3} alt="" />
                    <div className={style.location__header}><h3>Mountain Hiking Tour</h3> <div className={style.rating}>4.5</div></div>
                    <p>Himalayas, Hawaii</p>
                    <div className={style.book_btn__group}>
                        <p><span>$1000</span>/person</p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
                <div className={`${style.location}`}>
                    <Image src={location4} alt="" />
                    <div className={style.location__header}><h3>Mountain Hiking Tour</h3> <div className={style.rating}>4.5</div></div>
                    <p>Himalayas, Hawaii</p>
                    <div className={style.book_btn__group}>
                        <p><span>$1000</span>/person</p>
                        <button className="btn btn-primary">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default Locations