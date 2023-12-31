import { useState } from 'react'
import loginLogo from '../../images/c2.png'
import loginimg from '../../images/loginimg2.jpeg'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className='container-fluid login-form-container'>
      <div className="row login-form">
        <div className="left-form">
        <img src={loginimg} alt="" />
        </div>
        <div className="right-form">
        <form action="">
          <img src={loginLogo} alt="" />
          <input
            type="email"
            name='username'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
