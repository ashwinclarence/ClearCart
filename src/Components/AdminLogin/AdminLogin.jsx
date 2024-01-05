import { useState } from 'react'
import './AdminLogin.css'
import { useNavigate } from 'react-router-dom'
function AdminLogin() {
    const [adminUsername,setAdminUsername]=useState('')
    const [adminPassword,setAdminPassword]=useState('')
    const navigate=useNavigate()
    const LoginAdmin=(e)=>{
        e.preventDefault();
        if(adminUsername==='admin'&& adminPassword==="admin"){
            navigate('/admin')
            setAdminUsername('')
            setAdminPassword('')
        }else{
            setAdminUsername('')
            setAdminPassword('')
            document.getElementById('login-error').style.display="block"
        }
    }
  return (
    <div className='admin-login-container container-fluid'>
      <div className="admin-login-row row">
        <form action="" onSubmit={LoginAdmin}>
            <h3 className='admin-login-header'>Admin Login</h3>
            <input 
            type="text"
            placeholder='Username'
            value={adminUsername}
            onChange={(e)=>setAdminUsername(e.target.value)}
            required />
            <input 
            type="password"
            placeholder='password'
            value={adminPassword}
            onChange={(e)=>setAdminPassword(e.target.value)}
            required />
            <label htmlFor="" id='login-error'>Invalid Username or Password</label>
            <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
