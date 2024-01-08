import './Posts.css'
import Add from '../AdvertisementBanner/AdvertisementBanner'
import c1 from '../../images/pim/c1.PNG'
import c2 from '../../images/pim/c2.PNG'
import c3 from '../../images/pim/c3.PNG'
import c4 from '../../images/pim/c4.PNG'
import c5 from '../../images/pim/c5.PNG'
import c6 from '../../images/pim/c6.PNG'
import c7 from '../../images/pim/c7.PNG'
import c8 from '../../images/pim/c8.PNG'
import c9 from '../../images/pim/c9.PNG'
import c10 from '../../images/pim/c10.PNG'
import c11 from '../../images/pim/c11.PNG'
import c12 from '../../images/pim/c12.PNG'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs } from 'firebase/firestore'
import { itemRef } from '../../Firebase/config'
function Posts() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  console.log(category);
  useEffect(() => {
    try {
      getDocs(itemRef).then((snapshot) => {
        const allProducts = snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id
          }
        }).filter((result) => {
          if (category !== 'all') {
            return result.productCategory === category;
          } else {
            return result
          }
        })
        setProducts(allProducts)
      })
    } catch (error) {
      console.log(error.message);
    }
  }, [category])
  return (
    <div className='container-fluid posts-container'>
      <div className="row home-category-box">
        <div className="home-category" onClick={() => setCategory('all')}>
          <img src={c10} alt="" />
          <p>Offer</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Mobiles')}>
          <img src={c1} alt="" />
          <p>Mobiles</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Electronics')}>
          <img src={c2} alt="" />
          <p>Electronics</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Fashion')}>
          <img src={c3} alt="" />
          <p>Fashion</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Food Items')}>
          <img src={c4} alt="" />
          <p>food</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Home Appliances')}>
          <img src={c5} alt="" />
          <p>Home</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Beauty Products')}>
          <img src={c6} alt="" />
          <p>Beauty</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Furniture')}>
          <img src={c7} alt="" />
          <p>Furniture</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Books')}>
          <img src={c8} alt="" />
          <p>Books</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Toys')}>
          <img src={c9} alt="" />
          <p>Toys</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Tools')}>
          <img src={c11} alt="" />
          <p>Tools</p>
        </div>
        <div className="home-category" onClick={() => setCategory('Sports')}>
          <img src={c12} alt="" />
          <p>Sports</p>
        </div>
      </div>
      <Add />
      <div className="row  posts-row">
        {
          products.map((obj, index) => {
            return (

              <div className="col-md-3 product-container" key={index}>
                <Link to='/view-post' className='post-link'>
                  <div className="product-img-box">
                    <img src={obj.productImage} alt="" />
                  </div>
                  <div className="product-description-box">
                    <span className='mobile-view-product'>
                      {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 55)}...</h5> : <h5>{obj.productCompany}</h5>}
                      {obj.productName.length >= 50 ? <h4>{obj.productName.slice(0, 40)}....</h4> : <h4>{obj.productName}</h4>}
                      <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</h6>
                      {obj.productDescription.length >= 50 ? <h5 >{obj.productDescription.slice(0, 40)}....</h5> : <h5>{obj.productDescription}</h5>}
                    </span>
                    <span className='other-view-product'>
                      {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 40)}...</h5> : <h5>{obj.productCompany}</h5>}
                      {obj.productName.length >= 24 ? <h4 >{obj.productName.slice(0, 30)}....</h4> : <h4>{obj.productName}</h4>}
                      <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</h6>
                      {obj.productDescription.length >= 35 ? <h5 >{obj.productDescription.slice(0, 45)}....</h5> : <h5>{obj.productDescription}</h5>}
                    </span>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts
