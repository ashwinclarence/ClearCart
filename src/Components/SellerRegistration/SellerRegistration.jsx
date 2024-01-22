import { useEffect, useState } from 'react'
import './SellerRegistration.css'
import sell1 from '../../images/sell1.png'
import sell2 from '../../images/sell4.png'
import sell3 from '../../images/sell3.png'
import sell4 from '../../images/sell2.png'
import sell5 from '../../images/sell5.png'
import sell6 from '../../images/sell6.png'
import { useNavigate } from 'react-router-dom'
import { doc, getDocs, updateDoc } from 'firebase/firestore'
import { auth, db, userRef } from '../../Firebase/config'
function SellerRegistration() {
    const navigate = useNavigate()
    const [gst, setGst] = useState('')
    const [storeName, setStoreName] = useState('')
    const [location, setLocation] = useState('')
    const [bankAC, setBankAC] = useState('')
    const [IFSC, setIFSC] = useState('')
    const [users, setusers] = useState('')
    useEffect(() => {
        try {
            getDocs(userRef).then((snapshot) => {
                const allusers = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }).filter((result) => {
                    return result.userId === auth.currentUser.uid
                })
                setusers(allusers)
            })
        } catch (error) {
            console.log(error.message);
        }
    }, [])
    
    // function to update the collection in firestore
    const seller = async (e) => {
        e.preventDefault()
        const docref = doc(db, "User", users[0].id)
        console.log(docref);
        await updateDoc(docref, {
            iSseller: true,
            GstNumber: gst,
            storeName,
            Storelocation: location,
            bankAC,
            IFSC
        }).then(()=>{
            alert("Seller Registeration Sucess")
            navigate('/sell-product')
        })
    }
    const showdescription2 = (e) => {
        e.preventDefault()
        document.getElementById("seller-description2").style.display = "block"
        document.getElementById("seller-description3").style.display = "block"
        document.getElementById("seller-description-read-more").style.display = "none"
    }
    return (
        <div className='seller-register-container container-fluid'>
            <div className="row seller-register-row">
                <div className="col-md-6 seller-description">
                    <h3>How to become a seller ?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis blanditiis maiores distinctio quidem provident vitae beatae voluptates debitis optio. Nam, voluptas vero? Architecto magnam sed repudiandae culpa, sapiente explicabo! <span id='seller-description-read-more' onClick={showdescription2}>Read more</span></p>

                    <p id='seller-description2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia neque cupiditate id culpa illum? Deserunt, optio magnam, sit eum neque magni, eaque non vel voluptatem ipsum iste iusto quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non eius consectetur accusamus rem. Laboriosam eveniet quis a iusto neque, provident, maxime, itaque nam amet hic voluptatibus sed? Est, eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore, in consequatur laboriosam ex quibusdam facere nemo qui unde quis esse architecto obcaecati asperiores! Ea voluptas dolores debitis cum magnam.</p>
                    <p id='seller-description3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum mollitia neque cupiditate id culpa illum? Deserunt, optio magnam, sit eum neque magni, eaque non vel voluptatem ipsum iste iusto quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non eius consectetur accusamus rem. Laboriosam eveniet quis a iusto neque, provident, maxime, itaque nam amet hic voluptatibus sed? Est, eveniet! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae labore, in consequatur laboriosam ex quibusdam facere nemo qui unde quis esse architecto obcaecati asperiores! Ea voluptas dolores debitis cum magnam.</p>
                </div>
                <div className="col-md-6">
                    <form action="" id='seller-form' autoComplete='off' onSubmit={seller}>
                        <h3>Seller Registeration Form</h3>
                        <input
                            type="text"
                            name="GST"
                            id="GST"
                            title='Goods and Services Tax number'
                            placeholder='GST number'
                            value={gst}
                            onChange={(e) => setGst(e.target.value)}
                            required />
                        <input
                            type="text"
                            name="Storename"
                            id="store-name"
                            placeholder='Store name'
                            value={storeName}
                            onChange={(e) => setStoreName(e.target.value)}
                            required />
                        <input
                            type="text"
                            name="Pickuplocation"
                            id="pickup-location"
                            placeholder='Pickup Location'
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required />
                        <input
                            type="number"
                            name="BankAccountnumber"
                            id="bank-ccount-number"
                            placeholder='Bank Account number'
                            value={bankAC}
                            onChange={(e) => setBankAC(e.target.value)}
                            required />
                        <input
                            type="text"
                            name="BankIFSC"
                            id="BankIFSC"
                            placeholder='Bank IFSC'
                            value={IFSC}
                            onChange={(e) => setIFSC(e.target.value)}
                            required />
                        <button type='submit' id='seller-submit'>submit</button>
                    </form>
                </div>
            </div>
            <div className="row seller-register-row">
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell1} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell2} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>lore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell3} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell4} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell5} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>lore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="seller-idea-box">
                        <div className="seller-idea-row">
                            <div className="seller-idea-img">
                                <img src={sell6} alt="" id='seller-idea-img' />
                            </div>
                            <div className="seller-idea-description">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consectetur eum fugiat quas, illum officiis culpa maxime soluta porro quisquam commodi molestiae laborum quasi! Optio doloremque perspiciatis reiciendis laboriosam laudantium! <i className="fa-solid fa-up-right-from-square"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerRegistration
