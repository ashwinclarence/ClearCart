import './UserLocation.css'
import map from '../../images/map.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function UserLocation() {
    const navigate=useNavigate()
    const [location, setLocation] = useState('')
    const userLocationChange=(e)=>{
        e.preventDefault()
        alert("Your Location successfully Updated")
        navigate('/')
    }
    return (
        <div className='user-location-container container-fluid'>
            <div className="user-location-row row">
                <div className="col-md-6 user-location-map">
                    <img src={map} alt="" id='mapimg' />
                </div>
                <div className="col-md-6 user-location-select">
                    <form action="" id='user-location-form' onSubmit={userLocationChange}>
                        <h4>Select your preferred location</h4>
                        <select
                            name="locationchange"
                            id="location-change"
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)} >
                            <option value=''>Choose location</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>
                            <button type='submit' id='location-chnage-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserLocation
