import Animations from '../Animations/Animations'
import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import Posts from '../Components/Posts/Posts'
function Home() {
  return (
    <Animations>
      <UserNavbar/>
      <Posts/>
      <Footer/>
    </Animations>
  )
}

export default Home
