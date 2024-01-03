import { useState } from 'react'
import pic1 from '../../images/pim/1.jpg'
import pic2 from '../../images/pim/2.jpg'
import pic3 from '../../images/pim/3.jpg'
import pic4 from '../../images/pim/4.jpg'
import pic5 from '../../images/pim/5.jpg'
import pic6 from '../../images/pim/6.jpeg'
import './UserCart.css'
function UserCart() {
    const [pincode, setPincode] = useState('')
    const [shipppingAddress, setShipppingAddress] = useState('')
    const showDeliveryAddress = (e) => {
        e.preventDefault()
        document.getElementById('delivery-address').style.display = 'block'
        document.getElementById('show-delivery-address').style.display = 'none'
    }
    let products = [
        {
            name: "Apple iPhone 13 (512GB) - (Product) RED",
            price: 65000,
            companyName: "Apple",
            description: "Super Retina XDR display footnote ProMotion technology Always-On display",
            rating: 50,
            image: pic1
        },
        {
            name: "KENDALWOOD™ Furniture Sheesham Wood CNC Cuting Dining Table with 4 Chairs with 1 Bench|6 Seater Dining Set- Dining Room Furniture (Finish Color:-Honey Teak with Cream Cushion)",
            price: 10000,
            companyName: "forest woods",
            description: "dinning table for 4 person in glass finishing",
            rating: 50,
            image: pic2
        },
        {
            name: "FUNABLO 1/22 Scale Big Toyota Supra GR LBWK Model Diecast Metal Pullback Toy car with Openable Doors & Light, Music Boys car for Kids Best Toys Gifts Toys for Kids -White",
            price: 2547899,
            companyName: "Toyota",
            description: "Race-car-inspired and ready for the streets, GR Supra's 45th Anniversary Edition Mikan Blast exterior color brings this legend to life. Matte-black 19-in. forged-aluminum wheels and a manually adjustable rear spoiler finish off the GT4-inspired look, while sport-tuned handling and a powerful engine help you take on exhilarating drives. From bending around street corners to driving across highways, GR Supra's 45th Anniversary Edition is the return you’ve been waiting on.",
            rating: 50,
            image: pic3
        },
        {
            name: "SBJT Brazuka Football for All Ages Suited for The Grass Fields | PU | Suitable for Grass |Practice Ball | Soccer Ball | for Men/Women | Football Size - 5 ",
            price: 1850,
            companyName: "FIFA",
            description: "2018 worldcup football",
            rating: 50,
            image: pic4
        },
        {
            name: "M TECHNICS Hunter 350 Luggage Carrier Plate | Back Carrier for Hunter 350 | Rear Rack for Hunter 350 | Mtechnics Hunter 350 Expediton Carrier",
            price: 249000,
            companyName: "Royal Enfiled",
            description: "hunter 350 with amazing millage performance",
            rating: 50,
            image: pic5
        },
        {
            name: "Whirlpool 6 Kg 5 Star Royal Fully-Automatic Top Loading Washing Machine (WHITEMAGIC ROYAL 6 GENX, Grey, ZPF Technology)",
            price: 100,
            companyName: "ashlin and herself",
            description: "sometimes works other time use your hand",
            rating: 50,
            image: pic6
        },
    ]
    return (
        <div className="user-cart-container container-fluid">
            <div className="user-cart-row row">
                <div className="col-md-8 left-user-cart">
                    <div className="cart-item-box container-fluid">
                        {
                            products.map((obj, index) => {
                                return (
                                    <div className="cart-item-row row" key={index}>
                                        <div className="col-md-3 cart-item-img">
                                            <img src={obj.image} alt="" />
                                        </div>
                                        <div className="col-md-6 cart-item-des">
                                            <span>{obj.name}</span>
                                            <span className='sold-by'><i className="fa-solid fa-handshake"></i> Sold By ashwinclarence</span>
                                           {obj.price>=500?<span className='eligible'><i className="fa-solid fa-truck"></i> Eligible for FREE Shipping</span>:<span  className='eligible'><i className="fa-solid fa-truck"></i> Purchase some more items for FREE Shipping</span>}


                                        </div>
                                        <div className="col-md-3 p-3">
                                            <span className='cart-item-product-price'><i className="fa-solid fa-indian-rupee-sign"></i> {obj.price.toLocaleString()}</span>
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
                            required/>
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
