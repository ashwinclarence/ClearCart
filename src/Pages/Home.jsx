import Animations from '../Animations/Animations'
import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import Posts from '../Components/Posts/Posts'
import PreLoadPage from './PreLoadPage'
import { useEffect, useState } from 'react'
function Home() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  return (
    <Animations>
      {loading ? <PreLoadPage /> : 
      <><UserNavbar />
        <Posts />
        <Footer />    
        </>}

    </Animations>
  )
}

export default Home
