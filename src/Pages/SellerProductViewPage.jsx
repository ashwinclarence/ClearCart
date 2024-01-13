import Footer from "../Components/Footer/Footer"
import GoEndButton from "../Components/GoEndButton/GoEndButton"
import SellerViewProducts from "../Components/SellerViewProducts/SellerViewProducts"
import UserNavbar from "../Components/UserNavbar/UserNavbar"

function SellerProductViewPage() {
  return (
    <div>
      <UserNavbar/>
      <SellerViewProducts/>
      <Footer/>
      <GoEndButton/>
    </div>
  )
}

export default SellerProductViewPage
