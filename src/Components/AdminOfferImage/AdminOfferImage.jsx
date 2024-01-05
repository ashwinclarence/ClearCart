import { useState } from "react"
import defaultimg from '../../images/noimg.JPG'
import './AdminOfferImage.css'
function AdminOfferImage() {
    const[img1,setImg1]=useState('')
    const[img2,setImg2]=useState('')
  return (
    <div className="admin-offer-image-container container-fluid">
      <div className="admin-offer-image-row row">
        <form action="">
            <div className="admin-offer-box">
                {img1 ? <img src={URL.createObjectURL(img1)} className='offer-image-prev' /> : <img src={defaultimg} className='offer-image-prev' />}
            <input 
            type="file" onChange={(e)=>setImg1(e.target.files[0])} required  />
            </div>
            <div className="admin-offer-box">
                {img2 ? <img src={URL.createObjectURL(img2)} className='offer-image-prev' /> : <img src={defaultimg} className='offer-image-prev' />}
            <input 
            type="file" onChange={(e)=>setImg2(e.target.files[0])} required  />
            </div>
           
        </form>
      </div>
    </div>
  )
}

export default AdminOfferImage
