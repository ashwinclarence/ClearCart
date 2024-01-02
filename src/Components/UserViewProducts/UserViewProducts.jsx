import './UserViewProducts.css'
import pic1 from '../../images/pim/1.jpg'
import pic2 from '../../images/pim/2.jpg'
import pic3 from '../../images/pim/3.jpg'
import pic4 from '../../images/pim/4.jpg'
import pic5 from '../../images/pim/5.jpg'
import pic6 from '../../images/pim/6.jpeg'
function UserViewProducts() {
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
        <div className='container-fluid user-view-product-container'>
            <div className="row user-view-product-row">
                {
                    products.map((obj, index) => {
                        return (
                            <div className="col-md-2 my-product-container m-2" key={index}>
                                <div className="my-product-img-box">
                                    <img src={obj.image} alt="" />
                                </div>
                                <div className="my-product-description-box">
                                    <span className='my-mobile-view-product'>
                                        {obj.companyName.length >= 30 ? <h5>{obj.companyName.slice(0, 55)}...</h5> : <h5>{obj.companyName}</h5>}
                                        {obj.name.length >= 50 ? <h4 >{obj.name.slice(0, 40)}....</h4> : <h4>{obj.name}</h4>}
                                        <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.price.toLocaleString()}</h6>
                                        {obj.description.length >= 50 ? <h5 >{obj.description.slice(0, 40)}....</h5> : <h5>{obj.description}</h5>}
                                    </span>
                                    <span className='my-other-view-product'>
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
    )
}

export default UserViewProducts
