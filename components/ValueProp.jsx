import style from "@/components/Value.module.css"
function ValueProp() {
  return (
    <section className="section section__value">
      <div className="section__inner">
        <div className={`${style.value} value-1`}>
          <div className={`${style.value__photo}`}></div>
          <div className={`${style.value__content}`}>
            <h2>Travel and experience seamless experience with us</h2>
            <p>Travel with your friends and family with one single tap and plan your trips together whilst in your comfort zone</p>
            <button className="btn btn-primary">Start booking</button>
          </div>
        </div>
        <div className={`${style.value} value-2`}>
          <div className={`${style.value__content}`}>
            <h2>Our stories have adventures and you can explore them all!</h2>
            <p>We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className={`${style.value__photo}`}></div>
        </div>
      </div>
    </section>
  )
}

export default ValueProp