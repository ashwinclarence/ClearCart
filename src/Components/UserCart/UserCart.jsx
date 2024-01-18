import { useContext, useEffect, useState } from 'react'
import './UserCart.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Firebase/config';
import { AuthContext } from '../../Store/FirebaseContext';
import UserCartQuantity from '../UserCartQuantity/UserCartQuantity';
function UserCart() {
    const { CurrentUserID } = useContext(AuthContext)
    const [pincode, setPincode] = useState('')
    const [shipppingAddress, setShipppingAddress] = useState('')
    const [cartDetails, setCartDetails] = useState([]);
    const [cartProductsList, setCartProductsList] = useState([]);
    const [sum, setSum] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [gst, setgst] = useState(0)
    const [total, setTotal] = useState(0)

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
                setCartProductsList(userDoc.data().Cart)

                const cartProducts = userDoc.data().Cart.map(element => element.ProductID);
                // Fetch details for each product in the cart
                const cartDetailsPromises = cartProducts.map(async productId => {
                    const productRef = doc(db, 'Products', productId);
                    const productDoc = await getDoc(productRef);
                    return {
                        ...productDoc.data(),
                        id: productDoc.id
                    }
                });

                const resolvedCartDetails = await Promise.all(cartDetailsPromises);
                setCartDetails(resolvedCartDetails);

            } catch (error) {
                console.log(error.message);
            }
        };

        getCart();
    }, [CurrentUserID]);
    useEffect(() => {
        let temp = []
        let something = []
        cartDetails.forEach((element) => {
            temp.push(element.productPrice)
        })
        cartDetails.forEach((element) => {
            something.push(element.productMarketPrice)
        })
        setSum(temp.reduce((a, b) => a + b, 0))
        setDiscount((something.reduce((a, b) => a + b, 0)) - sum)
        if(sum===0){
            setgst(0)
        }else{
            if (sum > 500) {
                setgst(sum * 0.05)
            } else {
                setgst((sum + 50) * 0.05)
            }
            setTotal(sum + gst)
        }
        

    }, [cartDetails, sum, gst])


    return (
        <div className="user-cart-container container-fluid">
            <div className="user-cart-row row">
                <div className="col-md-8 left-user-cart">
                    <div className="cart-item-box container-fluid">
                        {
                            cartDetails.map((obj) => {
                                return (
                                    <div className="cart-item-row row" key={obj.id}>
                                        <div className="col-md-3 cart-item-img">
                                            <img src={obj.productImage} alt="" />
                                        </div>
                                        <div className="col-md-6 cart-item-des">
                                            <span>{obj.productName}</span>
                                            <span className='sold-by'><i className="fa-solid fa-handshake"></i> Sold By {obj.sellerName} </span>
                                            <span className='cart-item-product-price'><i className="fa-solid fa-indian-rupee-sign"></i> {obj.productPrice}</span>


                                        </div>
                                        <div className="col-md-3 p-3">
                                            <UserCartQuantity productsID={obj.id} cartProductsList={cartProductsList} />
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
                            <p>Items :</p><p id='item-sum'><i className="fa-solid fa-indian-rupee-sign"></i> {sum.toFixed(2)}</p>
                        </div>
                        <div className="order-summary-row">
                            <p>Shipping and Handling :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> {sum===0?"00:00":"50:00"} </p>
                        </div>
                        {sum > 500 ? <div className="order-summary-row" id='shipping-discount'>
                            <p>Shipping and Handling Discount:</p><p><i className="fa-solid fa-indian-rupee-sign"></i> 50:00</p>
                        </div> : ""}
                        <div className="order-summary-row">
                            <p>Estimated GST :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> {gst.toFixed(2)}</p>
                        </div>
                        <div className="order-summary-row" id='discount-order-summary'>
                            <p>You are Saving :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> {discount}</p>
                        </div>
                        <div className="order-summary-row" id='total-order-summary'>
                            <p>Order Total :</p><p><i className="fa-solid fa-indian-rupee-sign"></i> {total.toFixed(2)}</p>
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
