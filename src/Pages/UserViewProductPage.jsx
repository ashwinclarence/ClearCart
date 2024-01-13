import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import UserViewProducts from '../Components/UserViewProducts/UserViewProducts'
import GoEndButton from '../Components/GoEndButton/GoEndButton'
function UserViewProductPage() {
  return (
    <div>
      <UserNavbar/>
      <UserViewProducts/>
      <Footer/>
      <GoEndButton/>
    </div>
  )
}

export default UserViewProductPage
