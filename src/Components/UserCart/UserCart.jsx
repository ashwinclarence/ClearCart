import { useContext, useEffect, useState } from 'react'
import './UserCart.css'
import { doc, getDoc, } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { AuthContext } from '../../Store/FirebaseContext';
function UserCart() {
    const { CurrentUserID } = useContext(AuthContext)
    const [pincode, setPincode] = useState('')
    const [shipppingAddress, setShipppingAddress] = useState('')
    const [cartDetails, setCartDetails] = useState([]);
    const showDeliveryAddress = (e) => {
        e.preventDefault()
        document.getElementById('delivery-address').style.display = 'block'
        document.getElementById('show-delivery-address').style.display = 'none'
    }

    useEffect(() => {
        const getCart = async () => {
            try {
                const userRef = doc(db, 'User', CurrentUserID);
                const userDoc = await getDoc(userRef);
                const cartProducts = userDoc.data().Cart.map(element => element.ProductID);

                // Fetch details for each product in the cart
                const cartDetailsPromises = cartProducts.map(async productId => {
                    const productRef = doc(db, 'Products', productId); // Assuming 'Products' is your collection
                    const productDoc = await getDoc(productRef);
                    return productDoc.data(); // This assumes the product data is an object
                });

                const resolvedCartDetails = await Promise.all(cartDetailsPromises);
                setCartDetails(resolvedCartDetails);

            } catch (error) {
                console.log(error.message);
            }
        };

        getCart();
    }, [CurrentUserID]);



    return (
        <div className="user-cart-container container-fluid">
            <div className="user-cart-row row">
                <div className="col-md-8 left-user-cart">
                    <div className="cart-item-box container-fluid">
                        {
                            cartDetails.map((obj, index) => {
                                return (
                                    <div className="cart-item-row row" key={index}>
                                        <div className="col-md-3 cart-item-img">
                                            <img src={obj.productImage} alt="" />
                                        </div>
                                        <div className="col-md-6 cart-item-des">
                                            <span>{obj.productName}</span>
                                            <span className='sold-by'><i className="fa-solid fa-handshake"></i> Sold By {obj.sellerName} </span>
                                            {obj.productPrice >= 500 ? <span className='eligible'><i className="fa-solid fa-truck"></i> Eligible for FREE Shipping</span> : <span className='eligible'><i className="fa-solid fa-truck"></i> Purchase some more items for FREE Shipping</span>}


                                        </div>
                                        <div className="col-md-3 p-3">
                                            <span className='cart-item-product-price'><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice}</span>
                                            <div className="cart-item-action">
                                                <label htmlFor="Quantity">Quantity</label>
                                                <select name="Quantity" id="Quantity">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                                <button id='delete-item'><i className="fa-solid fa-trash-can"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
                <div className="col-md-4 right-user-cart">
                    <div className="order-summary">
                        <h5>Order Summary</h5>
                        <div className="order-summary-row">
                            <p>Items :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>
                        <div className="order-summary-row">
                            <p>Shipping and Handling :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>
                        <div className="order-summary-row">
                            <p>Total Before Tax :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>
                        <div className="order-summary-row">
                            <p>Estimated GST/HST :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>
                        <div className="order-summary-row" id='discount-order-summary'>
                            <p>Discount :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>
                        <div className="order-summary-row" id='total-order-summary'>
                            <p>Order Total :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 00:00</p>
                        </div>

                        <button id='show-delivery-address' onClick={showDeliveryAddress}>Add Delivery Address</button>
                    </div>
                    <form action="" id='delivery-address'>
                        <label htmlFor="">Delivery Pincode</label>
                        <input
                            type="number"
                            inputMode='numeric'
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            placeholder='Eg: 123456'
                            required />
                        <label htmlFor="shipping-address">Delivery Address</label>
                        <textarea
                            name="shipping-address"
                            id="shipping-address"
                            rows="10"
                            placeholder='Enter excat location to delivery your package'
                            value={shipppingAddress}
                            onChange={(e) => setShipppingAddress(e.target.value)}
                            required></textarea>
                        <div className="delivery-address-action">
                            <button type='submit'>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserCart
