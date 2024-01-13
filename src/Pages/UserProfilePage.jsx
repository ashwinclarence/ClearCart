import Footer from "../Components/Footer/Footer"
import GoEndButton from "../Components/GoEndButton/GoEndButton"
import UserNavbar from "../Components/UserNavbar/UserNavbar"
import UserProfile from "../Components/UserProfile/UserProfile"

function UserProfilePage() {
  return (
    <div>
      <UserNavbar/>
      <UserProfile/>
      <Footer/>
      <GoEndButton/>
    </div>
  )
}

export default UserProfilePage
