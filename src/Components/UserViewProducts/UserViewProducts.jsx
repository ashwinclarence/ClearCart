import { useEffect, useState } from 'react';
import './UserViewProducts.css'
import { Link } from 'react-router-dom'
import { getDocs } from 'firebase/firestore';
import { itemRef } from '../../Firebase/config';
import PropTypes from 'prop-types';
function UserViewProducts({userID}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            getDocs(itemRef).then((snapshot) => {
                const allProducts = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }).filter((result) => {
                    return result.sellerId ===userID
                })
                setProducts(allProducts)
            })
        } catch (error) {
            console.log(error.message);
        }
    }, [userID])
    UserViewProducts.propTypes = {
        userID: PropTypes.string.isRequired,
      };
    return (
        <div className='container-fluid user-view-product-container'>
            <div className="row user-view-product-row">
                {
                    products.map((obj, index) => {
                        return (
                            <div className="col-md-3 my-product-container" key={index}>
                                <Link to='/view-post' className='post-link'>
                                    <div className="my-product-img-box">
                                        <img src={obj.productImage} alt="" />
                                    </div>
                                    <div className="my-product-description-box">
                                        <span className='my-mobile-view-product'>
                                            {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 55)}...</h5> : <h5>{obj.productCompany}</h5>}
                                            {obj.productName.length >= 50 ? <h4 >{obj.productName.slice(0, 40)}....</h4> : <h4>{obj.productName}</h4>}
                                            <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</h6>
                                            {obj.productDescription.length >= 50 ? <h5 >{obj.productDescription.slice(0, 40)}....</h5> : <h5>{obj.productDescription}</h5>}
                                        </span>
                                        <span className='my-other-view-product'>
                                            {obj.productCompany.length >= 30 ? <h5>{obj.productCompany.slice(0, 35)}...</h5> : <h5>{obj.productCompany}</h5>}
                                            {obj.productName.length >= 25 ? <h4 >{obj.productName.slice(0, 30)}....</h4> : <h4>{obj.name}</h4>}
                                            <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</h6>
                                            {obj.productDescription.length >= 35 ? <h5 >{obj.productDescription.slice(0, 40)}....</h5> : <h5>{obj.description}</h5>}
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

export default UserViewProducts
