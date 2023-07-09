import style from "@/components/Subscribe.module.css"
import Image from "next/image"
import emailMktImg from "@/assets/email_marketing.png"
function Subscribe() {
  return (
    <section className={`section ${style.section__subscribe}`}>
      <div className={`section__inner ${style.section__inner}`}>
      <div className={`${style.media}`}>
        <Image 
        src={emailMktImg}
        />
      </div>
        <div className="content">
            <h3>Subscribe to our newsletter to get exclusive updates from Us</h3>
            <p>Receive latest news, update, and many other things every week</p>
            <form>
                <input type="text" required/>
                <button className="btn btn-primary">Subscribe</button>
            </form>
        </div>
      </div>
        
    </section>
  )
}

export default Subscribe