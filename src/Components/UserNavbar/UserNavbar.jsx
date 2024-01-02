import { useState } from 'react'
import './UserNavbar.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../../images/Clear cart bg 3.png'
import defaultuser from '../../images/user.jpeg'
import { Link } from 'react-router-dom';
function UserNavbar() {
    const [sidebar, setSidebar] = useState(false)
    // function toggle sidebar
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>
            <div className='navbar-container container-fluid'>
                <div className="row">
                    <div className="col-md-3">
                        <Link to='/'> <img src={logo} alt="" className='logo' /></Link>

                    </div>
                    <div className="col-md-9 nav-right">
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className="language" id='language'>
                            <select name="" id="">
                                <option value="English">English</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div>
                        <div className="cart">
                            <button><TiShoppingCart />cart</button>
                        </div>
                        <div className="profile">
                            <img src={defaultuser} alt="" onClick={showSidebar} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-mobile">
                <Link to='/'>  <img src={logo} alt="" className='logo-mobile' /></Link>

                <div className="search-mobile-box">
                    <input
                        type="text"
                        className='mobile-search-box'
                        placeholder='search' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <i className="fa-solid fa-xmark" onClick={showSidebar}></i>
                    </li>
                    <li className="profile-image">
                        <img src={defaultuser} alt="" />
                    </li>
                    <li className="profile-name">
                        <h3>ashwin clarence</h3>
                    </li>
                    <li className="profile-links">
                        <i className="fa-regular fa-eye"></i>
                        <Link to='/view-account' className='view-profile'>view Account</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-brands fa-opencart"></i>
                        <Link to='/view-orders' className='view-profile'>View Orders</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-people-arrows"></i>
                        <Link to='/register' className='view-profile'>Switch Account</Link>
                    </li>
                    {/* <li className="profile-links">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <Link to='/' className='view-profile'>logout</Link>
                    </li> */}
                    <li className="profile-links part">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <Link to='/login' className='view-profile'>login</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-plus"></i>
                        <Link to='/sell-product' className='view-profile'>Become a seller</Link>
                    </li>
                    <li className="profile-links part">
                        <i className="fa-solid fa-tags"></i>
                        <Link to='/sell-product' className='view-profile'>View My Products</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-toggle-off"></i>
                        <Link to='/' className='view-profile'>Switch theme</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-globe"></i>
                        <Link to='/' className='view-profile'>Change Location</Link>
                    </li>
                    <li className="profile-links part">
                        <i className="fa-solid fa-language"></i>
                        <Link to='/' className='view-profile'>Change Language</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-gear"></i>
                        <Link to='/' className='view-profile'>Settings</Link>
                    </li>
                </ul>
            </div>
            <div className="nav-bottom-bar-mobile container-fluid">
                <div className="col-md-3"><i className="fa-solid fa-house"></i></div>
                <div className="col-md-3"><i className="fa-solid fa-magnifying-glass"></i></div>
                <div className="col-md-3"><i className="fa-solid fa-cart-shopping"></i></div>
                <div className="col-md-3" onClick={showSidebar}><i className="fa-solid fa-bars"></i></div>
            </div>

        </>
    )
}

export default UserNavbar
