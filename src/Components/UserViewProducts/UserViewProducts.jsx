import { useEffect, useState } from 'react';
import './UserViewProducts.css'
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db, itemRef } from '../../Firebase/config';
import PropTypes from 'prop-types';
function UserViewProducts({ userID }) {
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
                    return result.sellerId === userID
                })
                setProducts(allProducts)
            })
        }catch (error) {
        console.log(error.message);
        }
    }, [userID])



    UserViewProducts.propTypes = {
        userID: PropTypes.string.isRequired,
    };

    // function to make the product unavailable
    const makeUnAvailable = async () => {
        const docref = doc(db, "Products", products[0].id)
        console.log(docref);
        await updateDoc(docref, {
            productAvailable: false
        }).then(() => {
            alert("The product is now Unavailable")
        })
    }
    // function to make the product available
    // const makeAvailable = async () => {
    //     const docref = doc(db, "Products", products[0].id)
    //     console.log(docref);
    //     await updateDoc(docref, {
    //         productAvailable: true
    //     }).then(() => {
    //         alert("The product is now Available")
    //     })
    // }
    // function to delete a particular product from firestore
    // const deleteProduct = () => {
    //     var result = confirm("Are you sure want to delete the product")
    //     if (result) {
    //         const docRef = doc(db, 'Products', products[0].id)
    //         deleteDoc(docRef).then(() => {
    //             alert("Product Deleted")
    //         })
    //     }

    // }
    return (
        <div className="user-view-product-container container-fluid">
            <div className="user-view-product-row row">
                {
                    products.map((obj, index) => {
                        return (
                            <div className="col-md-4 user-view-product-box row" key={index}>
                                <div className="col-md-3 user-view-product-img">
                                    <img src={obj.productImage} alt="" />
                                </div>
                                <div className="col-md-9 user-view-product-des">
                                    <span>{obj.productCompany}</span>
                                    <span>{obj.productName}</span>
                                    <span className='user-view-product-product-price'><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice.toLocaleString()}</span>
                                </div>
                                {/* <div className="col-md-3 p-3">
                                    <div className="user-view-product-action">
                                        {obj.productAvailable ? <button className="user-view-product-action-btn" onClick={makeUnAvailable}>UnAvailable</button> : <button className="user-view-product-action-btn" onClick={makeAvailable}>Available</button>}
                                        <button className="user-view-product-action-btn" onClick={deleteProduct}>Delete</button>
                                    </div>
                                </div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default UserViewProducts
