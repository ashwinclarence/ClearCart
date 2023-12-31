import { useEffect, useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import PreLoadPage from "./Pages/PreLoadPage";
import Home from "./Pages/Home";
import './App.css'
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])
  return (
    <div className='app'>
      {
        loading ? <PreLoadPage /> :
          <Router>
            <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/register' element={<RegisterPage />} ></Route>
              <Route path='/login' element={<LoginPage />} ></Route>
            </Routes>
          </Router>

      }
    </div>
  )
}

export default App
