import { useEffect, useState } from 'react';
import './UserViewProducts.css'
import { onSnapshot, } from 'firebase/firestore';
import { itemRef } from '../../Firebase/config';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function UserViewProducts({ userID }) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        try {
            onSnapshot(itemRef, (snapshot) => {
                const allProducts = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }).filter((result) => {
                    return result.sellerId === userID
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
        <div className="user-view-product-container container-fluid">
            <div className="user-view-product-row row">
                {
                    products.map((obj, index) => {
                        return (

                            <Link to='/seller-product-view' state={{ id: obj.id }} className="col-md-4 user-view-product-box row" key={index}>
                                <div className="col-md-3 user-view-product-img">
                                    <img src={obj.productImage} alt="" />
                                </div>
                                <div className="col-md-9 user-view-product-des">
                                    <span>{obj.productCompany}</span>
                                    <span>{obj.productName}</span>
                                    <span className='user-view-product-product-price'><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</span>
                                </div>
                                <div className="col-md-12 p-3">
                                    <div className="user-view-product-action">
                                        {obj.productAvailable? <p className='user-view-product-status-available'>Product Available</p>: <button className='user-view-product-status-unavailable'>Product Unavailable</button>}
                                       
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default UserViewProducts
