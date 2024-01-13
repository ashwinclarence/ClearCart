import Footer from "../Components/Footer/Footer"
import GoEndButton from "../Components/GoEndButton/GoEndButton"
import UserNavbar from "../Components/UserNavbar/UserNavbar"
import ViewPosts from "../Components/ViewPosts/ViewPosts"

function ViewPostsPage() {
  return (
    <div>
      <UserNavbar/>
      <ViewPosts/>
      <Footer/>
      <GoEndButton/>
    </div>
  )
}

export default ViewPostsPage
