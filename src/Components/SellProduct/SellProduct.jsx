import defaultuser from '../../images/user.jpeg'
import { useState } from 'react'
import './SellProduct.css'
import { Link } from 'react-router-dom'
function SellProduct() {
    const [proName, setProName] = useState('')
    const [proPrice, setProPrice] = useState('')
    const [proCompanyName, setProCompanyName] = useState('')
    const [proCategory, setProCategory] = useState('')
    const [proLocation, setProLocation] = useState('')
    const [proDescription, setProDescription] = useState('')
    const [proImage, setProImage] = useState('')
    const clearAll=(e)=>{
        e.preventDefault()
        setProName('')
        setProPrice('')
        setProCompanyName('')
        setProCategory('')
        setProLocation('')
        setProDescription('')
        setProImage('')
    }
    return (
        <div className="sell-product-container container-fluid">
            <form action="">
                <div className="row sell-product-row">
                    <div className="col-md-6 left-sell-product">
                        <label htmlFor="productName">Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            id="productName"
                            placeholder='Enter Product Name'
                            value={proName}
                            onChange={(e => { setProName(e.target.value) })}
                            required />
                        <label htmlFor="productprice">Product Price</label>
                        <input
                            type="number"
                            name="productprice"
                            id="productprice"
                            placeholder='Enter Product Price'
                            value={proPrice}
                            onChange={(e => { setProPrice(e.target.value) })}
                            required />
                        <label htmlFor="productCompanyName">Product Company Name</label>
                        <input
                            type="text"
                            name="productCompanyName"
                            id="productCompanyName"
                            placeholder='Enter Product Company Name'
                            value={proCompanyName}
                            onChange={(e => { setProCompanyName(e.target.value) })}
                            required />
                        <label htmlFor="productLocation">Product Location</label>
                        <select
                            name="productLocation"
                            id="productLocation"
                            required
                            value={proLocation}
                            onChange={(e) => setProLocation(e.target.value)} >
                            <option value=''>Choose location</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                        <label htmlFor="productCategory">Product Category</label>
                        <select
                            name="productCategory"
                            id="productCategory"
                            required
                            value={proCategory}
                            onChange={(e) => setProCategory(e.target.value)} >
                            <option value=''>Choose category</option>
                            <option value="Mobiles">Mobiles</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Food Items">Food Items</option>
                            <option value="Home Appliances">Home Appliances</option>
                            <option value="Beauty Products">Beauty Products</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Books">Books</option>
                            <option value="Toys">Toys</option>
                        </select>
                        <label htmlFor="productDescriptionName">Product Description</label>
                        <textarea
                            name="productDescriptionName"
                            id="productDescriptionName"
                            rows="10"
                            minLength={500}
                            maxLength={5000}
                            value={proDescription}
                            onChange={(e) => setProDescription(e.target.value)}
                            required></textarea>
                    </div>
                    <div className="col-md-6 right-sell-product">
                        <label htmlFor="">Product Picture</label><br />
                        {proImage ? <img src={URL.createObjectURL(proImage)} className='product-image-prev' /> : <img src={defaultuser} className='product-image-prev' />}
                        <input
                            type="file"
                            className='product-image'
                            accept="image/png"
                            onChange={(e) => { setProImage(e.target.files[0]) }}
                            required />

                        <div className="pro-submit-action">
                            <button onClick={clearAll}>Clear</button>
                            <button type='submit'>Submit</button>
                        </div>
                        <Link to='/' className='pro-back-home'><p>Go Back</p></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SellProduct
