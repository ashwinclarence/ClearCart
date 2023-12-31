import { useEffect, useState } from 'react';
import './AdvertisementBanner.css';
import adImage1 from '../../images/add2.png';
import adImage2 from '../../images/add3.png';

function AdvertisementBanner() {
    const[imagecount,setImagecount]=useState(false)
    useEffect(() => {
        setTimeout(() => { 
         setImagecount(!imagecount)  
        }, 9000);
      }, [imagecount])
  return (

      <div className="row">
      {imagecount?<img src={adImage1} alt="" id='img1' />:<img src={adImage2} alt="" id='img1' />} 
      </div>
  );
}

export default AdvertisementBanner;
