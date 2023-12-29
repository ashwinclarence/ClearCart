import React from 'react'
import Animations from '../Animations/Animations'
import UserNavbar from '../Components/UserNavbar/UserNavbar'
import Footer from '../Components/Footer/Footer'
import AdvertisementBanner from '../Components/AdvertisementBanner/AdvertisementBanner'
function Home() {
  return (
    <Animations>
      <UserNavbar/>
      <AdvertisementBanner/>
      <Footer/>
    </Animations>
  )
}

export default Home
