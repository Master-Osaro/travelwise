import Image from "next/image"
import styles from "./Demo.module.css"
import { redirect } from 'next/navigation'
import Link from "next/link"
function DemoComponent() {
    return (
        <section>
            <div className="section-inner">
                <div className="demo__image"></div>
                <div className={`${styles.demo__content}`}>
                    <p>Hey traveler, thanks for stopping by. This is test page to learn nextjs routing. While we work on this, you can go back to the homepage to see our services</p>
                    <Link href="/"><button className="btn btn-primary">Back to homepage</button></Link>
                </div>
            </div>
        </section>
    )
}

export default DemoComponent