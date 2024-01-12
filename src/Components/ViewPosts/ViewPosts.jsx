import './ViewPosts.css'
import UserViewProducts from '../UserViewProducts/UserViewProducts'
import ProductReviewChart from '../ProductReviewChart/ProductReviewChart'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../Firebase/config'
import { useLocation } from 'react-router-dom'
function ViewPosts() {
  // this state holds the id of the current product from posts.jsx
  let { state } = useLocation()

  const [review, setReview] = useState('')
  const [reviewDesc, setReviewDdesc] = useState('')
  const [products, setproducts] = useState('')
  const [savingsAmount,setsavingsAmount]=useState(0)

  // date atpresent
  let date=new Date()
  // covert date after 5 days
 date.setDate(date.getDate() + 5);
 

  //useEffect to reach the top of the page while loading
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // useEffect to get the current product details
  useEffect(() => {
    const getproducts = async () => {
      const docref = doc(db, "Products", state.proid)
      const docsnap = await getDoc(docref)
      setproducts(docsnap.data())
    }
    getproducts()
    
  }, [])


  // function to show the review form which is hidden initially
  const writeReview = (e) => {
    e.preventDefault()
    document.getElementById("review-form").style.display = 'block'
    document.getElementById("write-a-review").style.display = 'none'
    document.getElementById("product-review-chart").style.display = 'none'
  }

  // function to update the review form data to the databse
  const reviewForm = (e) => {
    e.preventDefault()
    alert("Your Response Submited")
    document.getElementById("review-form").style.display = 'none'
    document.getElementById("product-review-chart").style.display = 'block'
    setReviewDdesc('')
  }

  // function to hide the review form and show the review chart
  const noReview = (e) => {
    e.preventDefault()
    document.getElementById("review-form").style.display = 'none'
    document.getElementById("write-a-review").style.display = 'block'
    document.getElementById("product-review-chart").style.display = 'block'
    setReviewDdesc('')
  }
useEffect(()=>{
  let a=products.productMarketPrice
  let b=products.productPrice
  let diff=a-b
  let avg=(a+b)/2
  let ratio=(diff/avg)*100
  setsavingsAmount(ratio)
},[products.productMarketPrice,products.productPrice])
    
  
  
  return (
    <div className="view-post-container container-fluid">
      <div className="row view-post-row">
        <div className="col-md-5 view-post-img-box">
          <img src={products.productImage} alt="" />
        </div>
        <div className="col-md-6 view-post-name-box">
          <h5>{products.productCompany} </h5>
          <h5>{products.productName} </h5>
          <p>product seller {products.sellerName}</p>
          <h5><i className="fa-solid fa-indian-rupee-sign"></i><span >{products.productPrice}</span></h5>
          <p><i className="fa-solid fa-hand-holding-dollar"></i><span>{savingsAmount.toLocaleString()}% Off</span></p>
          {products.productPrice>=500?<p><i className="fa-solid fa-truck"></i>Eligible for FREE Shipping</p>:<p ><i className="fa-solid fa-truck"></i>Products above 500 Rs are eligible for free shipping</p>}
          <p><i className="fa-solid fa-clock"></i>If you order Today the item will delivery on {date.toDateString()}</p>
          {products.PurchaseCount===0?<p><i className="fa-solid fa-handshake"></i>Be the first one who purchase this product</p>: <p><i className="fa-solid fa-box-open"></i>{products.PurchaseCount} users Purchased this products</p>}

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
            <span id='product-review-chart'><ProductReviewChart star1={products.star1} star2={products.star2} star3={products.star3} star4={products.star4} star5={products.star5}/></span> 
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
                  onChange={(e) => setReviewDdesc(e.target.value)}
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
         <p>{products.productDescription}</p>
        </div>
      </div>
      <h5 id='similar-products'>Similar products</h5>
      <UserViewProducts />
    </div>
  )
}

export default ViewPosts
