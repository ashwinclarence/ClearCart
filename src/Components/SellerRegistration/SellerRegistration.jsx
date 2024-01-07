import { useState } from 'react'
import './SellerRegistration.css'
import { useNavigate } from 'react-router-dom'
function SellerRegistration() {
    const navigate=useNavigate()
    const [gst,setGst]=useState('')
    const [storeName,setStoreName]=useState('')
    const [location,setLocation]=useState('')
    const [bankAC,setBankAC]=useState('')
    const [IFSC,setIFSC]=useState('')
    const seller=(e)=>{
        e.preventDefault()
        alert("submited")
        navigate('/sell-product')
    }
  return (
    <div className='seller-register-container container-fluid'>
        <div className="row seller-register-row">
        <div className="col-md-6 seller-description">
                <h3>How to become a seller ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia neque cupiditate id culpa illum? Deserunt, optio magnam, sit eum neque magni, eaque non vel voluptatem ipsum iste iusto quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non eius consectetur accusamus rem. Laboriosam eveniet quis a iusto neque, provident, maxime, itaque nam amet hic voluptatibus sed? Est, eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore, in consequatur laboriosam ex quibusdam facere nemo qui unde quis esse architecto obcaecati asperiores! Ea voluptas dolores debitis cum magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia neque cupiditate id culpa illum? Deserunt, optio magnam, sit eum neque magni, eaque non vel voluptatem ipsum iste iusto quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non eius consectetur accusamus rem. Laboriosam eveniet quis a iusto neque, provident, maxime, itaque nam amet hic voluptatibus sed? Est, eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore, in consequatur laboriosam ex quibusdam facere nemo qui unde quis esse architecto obcaecati asperiores! Ea voluptas dolores debitis cum magnam.</p>
            </div>
            <div className="col-md-6">
                <form action="" id='seller-form' onSubmit={seller}>
                <h3>Seller Registeration Form</h3>
                    <input 
                    type="text" 
                    name="GST" 
                    id="GST"
                    title='Goods and Services Tax number'
                    placeholder='GST number'
                    value={gst}
                    onChange={(e)=>setGst(e.target.value)} 
                    required/>
                    <input 
                    type="text" 
                    name="Storename" 
                    id="store-name"
                    placeholder='Store name'
                    value={storeName}
                    onChange={(e)=>setStoreName(e.target.value)} 
                    required/>
                    <input 
                    type="text" 
                    name="Pickuplocation" 
                    id="pickup-location"
                    placeholder='Pickup Location'
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)} 
                    required/>
                    <input 
                    type="number" 
                    name="BankAccountnumber" 
                    id="bank-ccount-number"
                    placeholder='Bank Account number'
                    value={bankAC}
                    onChange={(e)=>setBankAC(e.target.value)}
                    required/>
                    <input 
                    type="text" 
                    name="BankIFSC" 
                    id="BankIFSC"
                    placeholder='Bank IFSC'
                    value={IFSC}
                    onChange={(e)=>setIFSC(e.target.value)}
                    required/>
                    <button type='submit' id='seller-submit'>submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SellerRegistration
