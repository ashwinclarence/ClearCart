import React, { useEffect, useState } from "react";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import PreLoadPage from "./Pages/PreLoadPage";
import Home from "./Pages/Home";
import './App.css'
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import SellProductPage from "./Pages/SellProductPage";
import UserProfilePage from "./Pages/UserProfilePage";
import UserViewProductPage from "./Pages/UserViewProductPage";
import UserCartPage from "./Pages/UserCartPage";
import useLocalStorage from "use-local-storage";
import ViewPostsPage from "./Pages/ViewPostsPage";
import AdminHome from "./Pages/AdminHome";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AdminOfferImagePage from "./Pages/AdminOfferImagePage";
import SellerRegisertationPage from "./Pages/SellerRegisertationPage";
export const Context=React.createContext()
function App() {
  const [loading, setLoading] = useState(false)
  const Preferences=window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [theme, setTheme] = useLocalStorage("theme",Preferences)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, [])

  return (
    <Context.Provider value={[theme,setTheme]}>
    <div className='app' data-theme={theme?"dark":"light"}>
     
      {
        loading ? <PreLoadPage /> :
          <Router>
            <Routes>
              <Route path='/' element={<Home />} ></Route>
              <Route path='/register' element={<RegisterPage />} ></Route>
              <Route path='/login' element={<LoginPage />} ></Route>
              <Route path='/register-sell-product' element={<SellerRegisertationPage />} ></Route>
              <Route path='/sell-product' element={<SellProductPage />} ></Route>
              <Route path='/view-account' element={<UserProfilePage />} ></Route>
              <Route path='/view-my-product' element={<UserViewProductPage/>} ></Route>
              <Route path='/view-cart' element={<UserCartPage/>} ></Route>
              <Route path='/view-post' element={<ViewPostsPage/>} ></Route>
              <Route path='/admin' element={<AdminHome/>} ></Route>
              <Route path='/admin-login' element={<AdminLoginPage/>} ></Route>
              <Route path='/admin-add-offer-image' element={<AdminOfferImagePage/>} ></Route>
              
            </Routes>
          </Router>

      }
    </div>
    </Context.Provider>
  )
}

export default App
