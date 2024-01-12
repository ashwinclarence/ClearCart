
import {deleteDoc, doc, getDoc, updateDoc} from 'firebase/firestore';
import defaultImg from '../../images/noimg.jpg'
import './SellerViewProducts.css'
import { db } from '../../Firebase/config';
import { useEffect, useState } from 'react';
import ProductReviewChart from '../ProductReviewChart/ProductReviewChart';
import { useLocation, useNavigate } from 'react-router-dom';
function SellerViewProducts() {
  let date=new Date()
  let newdate=date;
  let { state } = useLocation()
  const [products, setProducts] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
      try {
        const docRef=doc(db,"Products",state.id)
          getDoc(docRef).then((snapshot)=>{
            setProducts(snapshot.data())
          })
      }catch (error) {
      console.log(error.message);
      }
  }, [])
  // function to make the product unavailable
  const makeUnAvailable = async () => {
        const docref = doc(db, "Products", state.id)
        await updateDoc(docref, {
            productAvailable: false
        }).then(() => {
            alert("The product is now Unavailable")
            location.reload();
        })
    }
   // function to make the product available
    const makeAvailable = async () => {
        const docref = doc(db, "Products", state.id)
        await updateDoc(docref, {
            productAvailable: true
        }).then(() => {
            alert("The product is now Available")
            location.reload();
        })
    }
    // function to delete a particular product from firestore
    const deleteProduct = () => {
        var result = confirm("Are you sure want to delete the product")
        if (result) {
            const docRef = doc(db, 'Products', state.id)
            deleteDoc(docRef).then(() => {
                alert("Product Deleted")
                navigate('/view-account')
            })
        }
      }

  return (
    <div className="seller-view-product-container container-fluid">
    <div className="row seller-view-product-row">
      <div className="col-md-5 seller-view-product-img-box">
        <button className='like-button'><i className="fa-solid fa-heart"></i></button>
        {products.productImage? <img src={products.productImage} alt="" />:<img src={defaultImg} alt="" /> }
      </div>
      <div className="col-md-6 seller-view-product-name-box">
        <h5>{products.productName}</h5>
        <p>Product seller {products.sellerName}</p>
        <p >{products.productAvailable?<p id="product-available"><i className="fa-solid fa-square-check"></i> Product is currently available to Users</p>:<p id="product-unavailable"><i className="fa-solid fa-rectangle-xmark"></i> Product is currently unavailable to Users</p>} </p>
        <h5><i className="fa-solid fa-indian-rupee-sign"></i> {products.productPrice}</h5>
        <p>if you order within {date.toDateString()} the item will delivery on {newdate.toDateString()}</p>
        <p>{products.PurchaseCount} users brought this item</p>
      </div>
    </div>
    <div className="row seller-view-product-row">
      <div className="col-md-5 seller-view-product-other-box">
        <div className="seller-view-products-action-box">
        {products.productAvailable ? <button className="user-view-product-action-btn" onClick={makeUnAvailable}>Make UnAvailable</button> : <button className="user-view-product-action-btn" onClick={makeAvailable}>Make Available</button>}
          <button id='delete-product' onClick={deleteProduct}>Delete</button>
        </div>
        <div className="seller-view-product-other-box-inner">
         <span id='product-review-chart'><ProductReviewChart star1={products.star1} star2={products.star2} star3={products.star3} star4={products.star4} star5={products.star5} /></span> 
        </div>

      </div>
      <div className="col-md-6 seller-view-product-description-box">
        <h4>About this item</h4>
        <p>{products.productDescription}</p>
      </div>
    </div>
  </div>

  )
}

export default SellerViewProducts
