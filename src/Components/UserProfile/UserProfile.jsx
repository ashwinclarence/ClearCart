import './UserProfile.css'
import pic1 from '../../images/pim/1.jpg'
import pic2 from '../../images/pim/2.jpg'
import pic3 from '../../images/pim/3.jpg'
import pic4 from '../../images/pim/4.jpg'
import pic5 from '../../images/pim/5.jpg'
import pic6 from '../../images/pim/6.jpeg'
function UserProfile() {
    let products = [
        {
            name: "Iphone 13 256 gb",
            price: 65000,
            companyName: "Apple",
            description: "Super Retina XDR display footnote ProMotion technology Always-On display",
            rating: 50,
            image: pic1
        },
        {
            name: "Dinning Table",
            price: 10000,
            companyName: "forest woods",
            description: "dinning table for 4 person in glass finishing",
            rating: 50,
            image: pic2
        },
        {
            name: "Supra GR-5",
            price: 2547899,
            companyName: "Toyota",
            description: "Race-car-inspired and ready for the streets, GR Supra's 45th Anniversary Edition Mikan Blast exterior color brings this legend to life. Matte-black 19-in. forged-aluminum wheels and a manually adjustable rear spoiler finish off the GT4-inspired look, while sport-tuned handling and a powerful engine help you take on exhilarating drives. From bending around street corners to driving across highways, GR Supra's 45th Anniversary Edition is the return you’ve been waiting on.",
            rating: 50,
            image: pic3
        },
        {
            name: "Brazuca",
            price: 1850,
            companyName: "FIFA",
            description: "2018 worldcup football",
            rating: 50,
            image: pic4
        },
        {
            name: "Hunter",
            price: 249000,
            companyName: "Royal Enfiled",
            description: "hunter 350 with amazing millage performance",
            rating: 50,
            image: pic5
        },
        {
            name: "washing machine",
            price: 100,
            companyName: "ashlin and herself",
            description: "sometimes works other time use your hand",
            rating: 50,
            image: pic6
        },
        {
            name: "Iphone 13 256 gb",
            price: 65000,
            companyName: "Apple",
            description: "Super Retina XDR display footnote ProMotion technology Always-On display",
            rating: 50,
            image: pic1
        },
        {
            name: "Dinning Table",
            price: 10000,
            companyName: "forest woods",
            description: "dinning table for 4 person in glass finishing",
            rating: 50,
            image: pic2
        },
        {
            name: "Supra GR-5",
            price: 2547899,
            companyName: "Toyota",
            description: "Race-car-inspired and ready for the streets, GR Supra's 45th Anniversary Edition Mikan Blast exterior color brings this legend to life. Matte-black 19-in. forged-aluminum wheels and a manually adjustable rear spoiler finish off the GT4-inspired look, while sport-tuned handling and a powerful engine help you take on exhilarating drives. From bending around street corners to driving across highways, GR Supra's 45th Anniversary Edition is the return you’ve been waiting on.",
            rating: 50,
            image: pic3
        },
        {
            name: "Brazuca",
            price: 1850,
            companyName: "FIFA",
            description: "2018 worldcup football",
            rating: 50,
            image: pic4
        },
        {
            name: "Hunter",
            price: 249000,
            companyName: "Royal Enfiled",
            description: "hunter 350 with amazing millage performance",
            rating: 50,
            image: pic5
        },
        {
            name: "washing machine",
            price: 100,
            companyName: "ashlin and herself",
            description: "sometimes works other time use your hand",
            rating: 50,
            image: pic6
        },
    ]
    
    return (
        <div className="user-profile-container container-fluid">
            <div className="row user-profile-row">
                <div className=" col-md-3 left-user-profile">
                    <img src={pic1} alt="" className='profile-img' />
                        <h5>Ashwin Clarence</h5>
                    <p><i className="fa-solid fa-hourglass-half profile-icon"></i> user since 2019</p>
                    <p><i className="fa-solid fa-envelope profile-icon"></i> meashwinclarence@gmail.com</p>
                    <p><i className="fa-solid fa-phone profile-icon"></i> 8590120463</p>
                    <p><i className="fa-solid fa-location-dot profile-icon"></i> Kerala</p>
                   <div className="profile-actions">
                    <button >Share Profile</button>
                    <button >Send Verification mail</button>
                    <button >Delete Account</button>
                   </div>
                </div>
                <div className="col-md-9 right-user-profile">
                    <div className="right-user-profile-row row">
                        {
                            products.map((obj, index) => {
                                return (
                                    <div className="col-md-3 profile-product-container m-2" key={index}>
                                        <div className="profile-product-img-box">
                                            <img src={obj.image} alt="" />
                                        </div>
                                        <div className="profile-product-description-box">
                                            <span className='profile-mobile-view-product'>
                                                {obj.companyName.length >= 30 ? <h5>{obj.companyName.slice(0, 55)}...</h5> : <h5>{obj.companyName}</h5>}
                                                {obj.name.length >= 50 ? <h4 >{obj.name.slice(0, 40)}....</h4> : <h4>{obj.name}</h4>}
                                                <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.price.toLocaleString()}</h6>
                                                {obj.description.length >= 50 ? <h5 >{obj.description.slice(0, 40)}....</h5> : <h5>{obj.description}</h5>}
                                            </span>
                                            <span className='profile-other-view-product'>
                                                {obj.companyName.length >= 30 ? <h5>{obj.companyName.slice(0, 35)}...</h5> : <h5>{obj.companyName}</h5>}
                                                {obj.name.length >= 25 ? <h4 >{obj.name.slice(0, 25)}....</h4> : <h4>{obj.name}</h4>}
                                                <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.price.toLocaleString()}</h6>
                                                {obj.description.length >= 35 ? <h5 >{obj.description.slice(0, 35)}....</h5> : <h5>{obj.description}</h5>}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
