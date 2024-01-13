import { useEffect, useState } from 'react';
import './SimilarProducts.css'
import { onSnapshot } from 'firebase/firestore';
import { itemRef } from '../../Firebase/config';
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
function SimilarProducts({proCategory,currentProId}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      try {
        onSnapshot(itemRef,(snapshot)=>{
          const allProducts = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id
            }
          }).filter((result) => {
            console.log(result);
              return result.productCategory===proCategory && result.id!==currentProId
          })
          setProducts(allProducts)
        })
      } catch (error) {
        console.log(error.message);
      }
    }, [proCategory])
    return (
      <div className='container-fluid similar-products-container'>
        <div className="row  similar-products-row">
          {
            products.map((obj, index) => {
                console.log(obj);
              return (
  
                <div className="col-md-3  similar-products-box" key={index}>
                  <Link to='/view-post' className='similar-post-link' state={{ proid: obj.id }}>
                    <div className=" similar-products-img-box">
                      <img src={obj.productImage} alt="" />
                    </div>
                    <div className="similar-products-description-box">
                      <span className='mobile-view-similar-products'>
                        {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 55)}...</h5> : <h5>{obj.productCompany}</h5>}
                        {obj.productName.length >= 50 ? <h4>{obj.productName.slice(0, 40)}....</h4> : <h4>{obj.productName}</h4>}
                        <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</h6>
                      </span>
                      <span className='other-view-similar-product'>
                        {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 40)}...</h5> : <h5>{obj.productCompany}</h5>}
                        {obj.productName.length >= 35 ? <h4 >{obj.productName.slice(0, 35)}....</h4> : <h4>{obj.productName}</h4>}
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
export default SimilarProducts
