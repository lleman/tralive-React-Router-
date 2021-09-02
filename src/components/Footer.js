import React from "react"
import logofoot from '../images/logofoot.webp'

const Footer = () => {
    return (
        <div className="footer">
            <div><img src={logofoot}  /><p>Land behold it created good saw after she'd Our set <br /> living. Signs midst dominion creepeth morning <br /> laboris nisi ufsit aliquip.</p><div><i class="fab fa-twitter-square"></i><i class="fab fa-facebook-square"></i><i class="fab fa-linkedin"></i><i class="fab fa-pinterest-square"></i></div></div>
            <div><h6>Navigation</h6><ul><li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li></ul></div>
            <div><h6>Services</h6><ul><li>Blackforest</li>
            <li>Bodhubon</li>
            <li>Rongdhonu</li>
            <li>Meghrong</li></ul></div>
            <div><h6>Contact Us</h6><p>76/A, Green Lane, Dhanmondi, NYC <br />
demomail89@gmail.com</p><h5>+10 (78) 738-9083</h5></div>            
        </div>
    );
}

export default Footer 