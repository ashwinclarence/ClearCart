import { useState } from 'react'
import loginLogo from '../../images/logomain.JPEG'
import loginimg from '../../images/loginimg2.jpeg'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/config'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  // using signInWithEmailAndPassword to login existing user
  const userLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, username, password).then((userCredential) => {
      navigate('/')
      alert("Welcome back " + userCredential.user.displayName);
    }).catch((err) => {
      setUsername("")
      setPassword("")
      alert("Invalid Email or Password")
      console.log(err.code);
      console.log(err.message);
    })
  }
  return (
    <div className='container-fluid login-form-container'>
      <div className="row login-form">
        <div className="left-form">
          <img src={loginimg} alt="" />
        </div>
        <div className="right-form">
          <form action="" onSubmit={userLogin}>
            <img src={loginLogo} alt="" />
            <input
              type="email"
              name='username'
              placeholder='Username'
              value={username}
              onChange={(e) =>{
                setUsername(e.target.value)
                document.getElementById("error-label").style.display="none"
              } }
              required />
            <input
              type="password"
              name='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <button type='submit'>Login</button>
          </form>

          <Link to='/register' className='back-home'><p>Don&#39;t have an account?</p></Link>
          <Link to='/' className='back-home'><p>Go Back</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
