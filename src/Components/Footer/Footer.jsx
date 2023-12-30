import './Footer.css'
import googleplaybadge from '../../images/google-play-badge.png'
function Footer() {
  return (
    <>
      <div className='footer-container container-fluid'>
        <div className="row footer-row">
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
            <div className="socialmedia">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            <div className="app-download-links">
              <img src={googleplaybadge} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="copright">
        <p>  All rights reserved &copy; 2023-2050 CLEAR CART</p>
      </div>
    </>
  )
}

export default Footer
