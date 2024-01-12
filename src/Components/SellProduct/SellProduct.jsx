import defaultuser from '../../images/noimg.jpg'
import { useState } from 'react'
import './SellProduct.css'
import { Link, useNavigate } from 'react-router-dom'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { auth, itemRef, storage } from '../../Firebase/config'
import { addDoc } from 'firebase/firestore'
import Loader from '../Loader/loader'
function SellProduct() {
    const [loader, setloader] = useState(false)
    const [proName, setProName] = useState('')
    const [proPrice, setProPrice] = useState('')
    const [proCompanyName, setProCompanyName] = useState('')
    const [proCategory, setProCategory] = useState('')
    const [proDescription, setProDescription] = useState('')
    const [proImage, setProImage] = useState('')
    const date = new Date()
    const navigate = useNavigate()

    const clearAll = (e) => {
        e.preventDefault()
        setProName('')
        setProPrice('')
        setProCompanyName('')
        setProCategory('')
        setProDescription('')
        setProImage('')
    }
    const AddSellProduct = async (e) => {
        e.preventDefault()
        setloader(true)
        const imageStorageRef = ref(storage, `ProductImage/${auth.currentUser.uid}/${Date.now()}`)
        await uploadBytes(imageStorageRef, proImage).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                const docData = {
                    sellerName: "authcurrentUserdisplayName",
                    sellerId: "authcurrentUseruid",
                    productName: "proName",
                    productPrice: 25,
                    productCompany: "proCompanyName",
                    productCategory: "proCategory",
                    productDescription: "proDescription",
                    productUploaded: "datetoDateString",
                    productImage: "url",
                    star1: 0,
                    star2: 0,
                    star3: 0,
                    star4: 0,
                    star5: 0,
                    productAvailable:false,
                    PurchaseCount:0
                }
                addDoc(itemRef, {
                    sellerName: auth.currentUser.displayName,
                    sellerId: auth.currentUser.uid,
                    productName: proName,
                    productPrice: Number(proPrice),
                    productCompany: proCompanyName,
                    productCategory: proCategory,
                    productDescription: proDescription,
                    productUploaded: date.toDateString(),
                    productImage: url,
                    star1: 0,
                    star2: 0,
                    star3: 0,
                    star4: 0,
                    star5: 0,
                    productAvailable:true,
                    PurchaseCount:0
                }, docData).then((docRef) => {
                    setloader(false)
                    navigate('/')
                    clearAll()
                    alert("product Add with id " + docRef.id)
                })
            })
        })
    }
    return (
        <div className="sell-product-container container-fluid">
            {loader ? <Loader /> : ""}
            <form action="" onSubmit={AddSellProduct}>
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
                            <option value="Tools">Tools</option>
                            <option value="Sports">Sports</option>
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
