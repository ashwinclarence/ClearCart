import { useState } from 'react'
import './Register.css'
import { Await, Link, useNavigate } from 'react-router-dom'
import defaultuser from '../../images/user.jpeg'
import regLogo from '../../images/logomain.JPEG'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../Firebase/config'
function Register() {
  const navigate = useNavigate()
  const [name, setname] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [location, setLocation] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const registerUser = async(e) => {
    e.preventDefault()
    if(password===confirmPassword){
    await createUserWithEmailAndPassword(auth, email, password).then((userCredentail) => {
        alert("registeration sucess")
        const user = userCredentail.user;
        console.log((user));
        navigate('/')
      }).catch((err) => {
        console.log(err.code);
        console.log(err.message);
      })
      await updateProfile(auth.currentUser,{
        displayName:name,
        phoneNumber:phoneNumber
      }).then(()=>{
        console.log("user name chnaged"+ auth.currentUser.displayName);
      })
    }
    
  }

  return (
    <div className='container-fluid register-form-container'>
      <div className="row register-form">
        <form action="" onSubmit={registerUser}>
          <img src={regLogo} alt="" id='reg-logo' />
          <div className="register-left-form">

            <label htmlFor="Fullname">FUll Name</label>
            <input
              type="text"
              name='Fullname'
              placeholder='Full name'
              value={name}
              onChange={(e) => setname(e.target.value)}
              required />
            <label htmlFor="MobileNumber">Mobile Number</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              maxLength="10"
              name='MobileNumber'
              placeholder='Phone Number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name='email'
              placeholder='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <label htmlFor="location">Location</label>
            <select
              name="location"
              id="location"
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              type="password"
              name='confirmpassword'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
          </div>
          <div className="register-right-form">

            <label htmlFor="">Profile Picture</label><br />
            {profileImage ? <img src={URL.createObjectURL(profileImage)} className='register-img-prev' /> : <img src={defaultuser} className='register-img-prev' />}
            <input
              type="file"
              className='register-profile-image'
              onChange={(e) => { setProfileImage(e.target.files[0]) }}
              required />


            <button type='submit'>Register</button>

            <Link to='/login' className='back-home'><p>Already have an account?</p></Link>
            <Link to='/' className='back-home'><p>Go Back</p></Link>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register
