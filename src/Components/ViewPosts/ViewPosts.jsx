import './ViewPosts.css'
import defaultImg from '../../images/noimg.jpg'
import UserViewProducts from '../UserViewProducts/UserViewProducts'
import ProductReviewChart from '../ProductReviewChart/ProductReviewChart'
function ViewPosts() {
  return (
    <div className="view-post-container container-fluid">
      <div className="row view-post-row">
        <div className="col-md-5 view-post-img-box">
          <img src={defaultImg} alt="" />
        </div>
        <div className="col-md-6 view-post-name-box">
          <h5>KEBILSHOP 3.5mm Stereo to Dual 6.3mm Mono Jack Audio Y Splitter Cable for Phone, Multimedia Speakers,Guitar, Sound Mixers, Other Professional Audio Equipment (4ft/1.2m, 1/PCS BLACK)</h5>
          <p>product seller name</p>
          <p>rating</p>
          <p>number of users brought this item</p>
          <h5><i className="fa-solid fa-indian-rupee-sign"></i> 25000</h5>
          <p>if you order within 22hours the item will delivery on 20/10/2024</p>
        </div>
      </div>
      <div className="row view-post-row">
        <div className="col-md-5 view-post-other-box">
          <div className="view-posts-action-box">
            <button id='add-to-cart'>Add to Cart</button>
            <button id='buy-now'>Buy now</button>
            <button id='share'>Share <i className="fa-solid fa-share"></i></button>
          </div>
          <div className="view-post-other-box-inner">
            <ProductReviewChart/>
          </div>

        </div>
        <div className="col-md-6 view-post-description-box">
          <p>About this item
            Professional Series Stereo Plugs, connect instruments such as DJ System,synths, keyboards, guitars and other professional audio equipment.
            Durable PVC jacket that protects the connectors from damage when bent slightly.
            Cable is terminated using 3% silver solder,90% shield to remove any noise or humming.
            Pure copper for optimum sound quality.Connectors: 3.5mm 1/8 Male x1; 6.35mm 1/4 Mono Jack Male x2;.Connecting your laptop or PC with a jack speaker output to a device with 2 x 6.35mm jack inputs - e.g. mixing desk.
            1PCS Packing RED/BLUE Depend one Availability.</p>
          <p>About this item
            Professional Series Stereo Plugs, connect instruments such as DJ System,synths, keyboards, guitars and other professional audio equipment.
            Durable PVC jacket that protects the connectors from damage when bent slightly.
            Cable is terminated using 3% silver solder,90% shield to remove any noise or humming.
            Pure copper for optimum sound quality.Connectors: 3.5mm 1/8 Male x1; 6.35mm 1/4 Mono Jack Male x2;.Connecting your laptop or PC with a jack speaker output to a device with 2 x 6.35mm jack inputs - e.g. mixing desk.
            1PCS Packing RED/BLUE Depend one Availability.</p>
        </div>
      </div>
      <h5 id='similar-products'>Similar products</h5>
          <UserViewProducts />
    </div>
  )
}

export default ViewPosts
