import './Posts.css'
import Add from '../AdvertisementBanner/AdvertisementBanner'
import pic1 from '../../images/pim/1.jpg'
import pic2 from '../../images/pim/2.jpg'
import pic3 from '../../images/pim/3.jpg'
import pic4 from '../../images/pim/4.jpg'
import pic5 from '../../images/pim/5.jpg'
import pic6 from '../../images/pim/6.jpeg'
import c1 from '../../images/pim/c1.PNG'
import c2 from '../../images/pim/c2.PNG'
import c3 from '../../images/pim/c3.PNG'
import c4 from '../../images/pim/c4.PNG'
import c5 from '../../images/pim/c5.PNG'
import c6 from '../../images/pim/c6.PNG'
import c7 from '../../images/pim/c7.PNG'
import c8 from '../../images/pim/c8.PNG'
import c9 from '../../images/pim/c9.PNG'
function Posts() {
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
    <div className='container-fluid posts-container'>
      <div className="row home-category-box">
        <div className="home-category">
          <img src={c1} alt="" />
          <p>Mobiles</p>
        </div>
        <div className="home-category">
          <img src={c2} alt="" />
          <p>Electronics</p>
        </div>
        <div className="home-category">
          <img src={c3} alt="" />
          <p>Fashion</p>
        </div>
        <div className="home-category">
          <img src={c4} alt="" />
          <p>food</p>
        </div>
        <div className="home-category">
          <img src={c5} alt="" />
          <p>Home</p>
        </div>
        <div className="home-category">
          <img src={c6} alt="" />
          <p>Beauty</p>
        </div>
        <div className="home-category">
          <img src={c7} alt="" />
          <p>Furniture</p>
        </div>
        <div className="home-category">
          <img src={c8} alt="" />
          <p>Books</p>
        </div>
        <div className="home-category">
          <img src={c9} alt="" />
          <p>Toys</p>
        </div>
      </div>
      <Add/>
      <div className="row  posts-row">
        {
          products.map((obj, index) => {
            return (
              <div className="col-md-2 product-container m-2" key={index}>
                <div className="product-img-box">
                  <img src={obj.image} alt="" />
                </div>
                <div className="product-description-box">
                  <span className='mobile-view-product'>
                    {obj.companyName.length >= 30 ? <h5>{obj.companyName.slice(0, 55)}...</h5> : <h5>{obj.companyName}</h5>}
                    {obj.name.length >= 50 ? <h4 >{obj.name.slice(0, 40)}....</h4> : <h4>{obj.name}</h4>}
                    <h6><i className="fa-solid fa-indian-rupee-sign"></i> {obj.price.toLocaleString()}</h6>
                    {obj.description.length >= 50 ? <h5 >{obj.description.slice(0, 40)}....</h5> : <h5>{obj.description}</h5>}
                  </span>
                  <span className='other-view-product'>
                    {obj.companyName.length >= 30 ? <h5>{obj.companyName.slice(0, 30)}...</h5> : <h5>{obj.companyName}</h5>}
                    {obj.name.length >= 24 ? <h4 >{obj.name.slice(0, 20)}....</h4> : <h4>{obj.name}</h4>}
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

export default Posts
