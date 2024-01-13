import UserCart from "../Components/UserCart/UserCart"
import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import GoEndButton from "../Components/GoEndButton/GoEndButton"
function UserCartPage() {
  return (
    <div>
      <UserNavbar/>
      <UserCart/>
      <Footer/>
      <GoEndButton/>
    </div>
  )
}

export default UserCartPage
