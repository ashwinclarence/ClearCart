import './ViewPosts.css'
import defaultImg from '../../images/noimg.jpg'
import UserViewProducts from '../UserViewProducts/UserViewProducts'
import ProductReviewChart from '../ProductReviewChart/ProductReviewChart'
import { useEffect, useState } from 'react'
function ViewPosts() {
  const [review, setReview] = useState('')
  const [reviewDesc, setReviewDdesc] = useState('')
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const writeReview = (e) => {
    e.preventDefault()
    document.getElementById("review-form").style.display = 'block'
    document.getElementById("write-a-review").style.display = 'none'
    document.getElementById("product-review-chart").style.display = 'none'
  }
  const reviewForm=(e)=>{
    e.preventDefault()
    alert("Your Response Submited")
    document.getElementById("review-form").style.display = 'none'
    document.getElementById("product-review-chart").style.display = 'block'
    setReviewDdesc('')
  }
  const noReview=(e)=>{
    e.preventDefault()
    document.getElementById("review-form").style.display = 'none'
    document.getElementById("write-a-review").style.display = 'block'
    document.getElementById("product-review-chart").style.display = 'block'
    setReviewDdesc('')
  }
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
           <span id='product-review-chart'><ProductReviewChart /></span> 
            <i id='write-a-review' onClick={writeReview}>Write a product review</i>
            <form action="" id='review-form' onSubmit={reviewForm}>
              <div className="star-checkbox">
                <h5>How much rating would you give for this product ?</h5>
              </div>
              <div className="star-checkbox">
                <input
                  type="radio"
                  className='star-input-checkbox'
                  name='review'
                  required
                  placeholder='1 star'
                  value={review}
                  onClick={() => setReview(1)} />
                <label htmlFor="" id='star-count'>&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;</label>
              </div>

              <div className="star-checkbox">
                <input
                  type="radio"
                  className='star-input-checkbox'
                  name='review'
                  required
                  placeholder='1 star'
                  value={review}
                  onClick={() => setReview(2)} />
                <label htmlFor="" id='star-count'>&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;</label>
              </div>

              <div className="star-checkbox">
                <input
                  type="radio"
                  className='star-input-checkbox'
                  name='review'
                  required
                  placeholder='1 star'
                  value={review}
                  onClick={() => setReview(3)} />
                <label htmlFor="" id='star-count'>&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;</label>
              </div>

              <div className="star-checkbox">
                <input
                  type="radio"
                  className='star-input-checkbox'
                  name='review'
                  required
                  placeholder='1 star'
                  value={review}
                  onClick={() => setReview(4)} />
                <label htmlFor="" id='star-count'>&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9734;</label>
              </div>

              <div className="star-checkbox">
                <input
                  type="radio"
                  className='star-input-checkbox'
                  name='review'
                  required
                  placeholder='1 star'
                  value={review}
                  onClick={() => setReview(5)} />
                <label htmlFor="" id='star-count'>&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#9733;</label>
              </div>
              <div className="star-checkbox">
                <textarea 
                name="star-input-textarea" 
                id="star-input-textarea" 
                rows="10"
                placeholder='Describe your review'
                value={reviewDesc}
                onChange={(e)=>setReviewDdesc(e.target.value)}
                required></textarea>
              </div>
              <div className="star-checkbox">
              <button type='submit' id='review-submit-btn'>Submit Response</button>
              </div>
              <div className="star-checkbox">
              <p onClick={noReview}>back</p>
              </div>

            </form>
          </div>

        </div>
        <div className="col-md-6 view-post-description-box">
          <h4>About this item</h4>
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
