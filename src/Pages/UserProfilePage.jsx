import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/UserNavbar/UserNavbar"
import UserProfile from "../Components/UserProfile/UserProfile"
import UserViewProducts from "../Components/UserViewProducts/UserViewProducts"

function UserProfilePage() {
  return (
    <div>
      <UserNavbar/>
      <UserProfile/>
      <UserViewProducts/>
      <Footer/>
    </div>
  )
}

export default UserProfilePage
