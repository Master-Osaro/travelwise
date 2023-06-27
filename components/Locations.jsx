import style from "@/components/Locations.module.css"
function Locations() {
  return (
    <section className={`section ${style.section__locations} bg__grey`}>
        <div className="section__inner">
            <h2>Population Locations</h2>
            <p>There are many packages more than you need just to make sure that you get enough options to avail the best one</p>
            <div className={`${style.location__list} location__list`}>
                <div className={`${style.location}`}>
                    <img src="" alt="" />
                    <h3>Mountain Hiking Tour</h3> <div>4.5</div>
                    <p>Himalayas, Hawaii</p>
                    <p><span>$1000</span>/person</p>
                    <button className="btn btn-primary">Book now</button>
                </div>
                <div className={`${style.location}`}>
                    <img src="" alt="" />
                    <h3>Mountain Hiking Tour</h3> <div>4.5</div>
                    <p>Himalayas, Hawaii</p>
                    <p><span>$1000</span>/person</p>
                    <button className="btn btn-primary">Book now</button>
                </div>
                <div className={`${style.location}`}>
                    <img src="" alt="" />
                    <h3>Mountain Hiking Tour</h3> <div>4.5</div>
                    <p>Himalayas, Hawaii</p>
                    <p><span>$1000</span>/person</p>
                    <button className="btn btn-primary">Book now</button>
                </div>
                <div className={`${style.location}`}>
                    <img src="" alt="" />
                    <h3>Mountain Hiking Tour</h3> <div>4.5</div>
                    <p>Himalayas, Hawaii</p>
                    <p><span>$1000</span>/person</p>
                    <button className="btn btn-primary">Book now</button>
                </div>
            </div>
        </div>
    </section>
)
}

export default Locations