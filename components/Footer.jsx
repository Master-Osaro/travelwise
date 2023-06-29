import Image from "next/image"

function Footer({nunito}) {
  return (
    <footer className={`${nunito.className}`}>
        <div className="section__inner">
            <div className="footer-grid">
            <div>
            <h5>Company</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-map"></i>About Us</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Culture</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Careers</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Benefits</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Blog</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>News and Media</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Leadership</a></li>
                <li><a href="#contact"><i className="bi bi-chat-square"></i>Contact</a></li>
            </ul>
        </div>
        <div>
            <h5>Help</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-map"></i>Customer Help</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>System and Status</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Community</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Developers API</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Site Map</a></li>
            </ul>
        </div>
        <div>
            <h5>Security</h5>
            <ul className="footer-links">
                <li><a href="#"><i className="bi bi-arrows-move"></i>Security</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>About Fraud and Scams</a></li>
            </ul>
                
        </div>
        <div>
            <h5>Legal</h5>
            <ul className="footer-links">
            <li><a href="#"><i className="bi bi-map"></i>Terms</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Privacy</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Community</a></li>
                <li><a href="#"><i className="bi bi-arrows-move"></i>Cookies</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Licenses</a></li>
                <li><a href="#"><i className="bi bi-journal-richtext"></i>Contact</a></li>
            </ul>
                
        </div>
        <div>
            <h5>Contact Us</h5>
        </div>
        <div>
            <h5>United States</h5>
        </div>
        </div>
        <div className="logo-wrapper">
            <div className="logo">Travelwise</div>
            <p>2023. All rights reserved</p>
        </div>
        </div>
    </footer>
  )
}

export default Footer