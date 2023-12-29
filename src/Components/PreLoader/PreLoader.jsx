import React from 'react'
import './PreLoader.css'
import bg from '../../images/Clear cart bg 3.png'
import BarLoader from "react-spinners/BarLoader";
function PreLoader() {
    return (
            <div className='pre-loader'>
                <img src={bg} alt="" />
                <BarLoader
                    color="#02353c"
                    height={5}
                    width={330}
                />
            </div>
    )
}

export default PreLoader
