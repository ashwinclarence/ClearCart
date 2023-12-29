import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container container-fluid'>
      <div className="row">
        <div className="col-md-3">
         <h6>ABOUT</h6>
         <p>Contact us</p>
         <p>About us</p>
         <p>Careers</p>
        </div>
        <div className="col-md-3">
         <h6>HELP</h6>
         <p>Payments</p>
         <p>Shipping</p>
         <p>Cancelation & Returns</p>
         <p>FAQ</p>
        </div>
        <div className="col-md-3">
         <h6>CONSUMER POLICY</h6>
         <p>Cancelation & Returns</p>
         <p>Terms of user</p>
         <p>Security</p>
         <p>Privacy</p>
         <p>Sitemap</p>
        </div>
        <div className="col-md-3">
         <h6>Social</h6>
         <i class="fa-brands fa-facebook"></i>
         <i class="fa-brands fa-twitter"></i>
         <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
