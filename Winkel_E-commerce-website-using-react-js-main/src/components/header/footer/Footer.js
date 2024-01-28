import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer_credits'>
        <footer>
        <div className='col'>
            {/* <img className='logo' src={"./winkel2_logo.png"} alt=""/> */}
            <h4>Contact</h4>
            <p><strong>Address :</strong> SVNIT,Surat-395007, Gujarat, INDIA</p>
            <p><strong>Phone :</strong> +91 9999999999</p>
            <p><strong>Hours :</strong> 8:30 - 17:50 Mon - Fri</p>
            <div class="follow">
                <h4> Follow us</h4>
                <div class="icon">
                    <FacebookIcon/>
                    <InstagramIcon/>
                    <LinkedInIcon/>
                    <TwitterIcon/>
                    <YouTubeIcon/>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>My Account</h4>
            <a href="#">Order</a>
            <a href="#">View Cart</a>
            <a href="#"> My Payment</a>
            <a href="#">Help</a>
        </div>
        <div class="col install">
            <h4>Install Our App</h4>
            <div class="row">
                <img class="store"src={"./store.png"} alt=""/> 
            </div>
            <p>Secured Payment</p>
            <div class="payment">
            <img class="visa" src={"./visa.png" }alt=""/>
            <img class="rupay" src={"./RuPay_PNG.webp"} alt=""/>
            <img class="mc"src={"./mastercard.png"} alt=""/>
            <img class="ax"src={"./ax.jfif"} alt=""/>
        </div>
        </div>
    </footer>
    <div class="credits">© Aurorize by BitBuster - 2024</div>
    </div>
  )
}

export default Footer