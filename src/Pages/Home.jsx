import Animations from '../Animations/Animations'
import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import Posts from '../Components/Posts/Posts'
import GoEndButton from '../Components/GoEndButton/GoEndButton'
function Home() {

  return (
    <Animations>
      <UserNavbar />
      <Posts />
      <GoEndButton/>
      <Footer />
    </Animations>
  )
}

export default Home
