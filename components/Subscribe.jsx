import style from "@/components/Subscribe.module.css"
function Subscribe() {
  return (
    <section className={`section ${style.section__subscribe}`}>
      <div className={`section__inner ${style.section__inner}`}>
      <div className={`${style.media}`}></div>
        <div className="content">
            <h3>Subscribe to our newsletter to get exclusive updates from Us</h3>
            <p>Receive latest news, update, and many other things every week</p>
            <div>
                <input type="text" />
                <button>Subscribe</button>
            </div>
        </div>
      </div>
        
    </section>
  )
}

export default Subscribe