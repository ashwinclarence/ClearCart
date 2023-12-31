import './UserNavbar.css'
import logo from '../../images/logomain.JPEG'
import defaultuser from '../../images/user.jpeg'
import { useContext, useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { Context } from '../../App';
function UserNavbar() {
    const [sidebar, setSidebar] = useState(false)
    const [theme, setTheme] = useContext(Context)
    // function toggle sidebar
    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    const changeTheme = () => {
        setTheme(!theme)
    }
    return (
        <span data-theme={theme ? "dark" : "light"}>

            <div className='navbar-container container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <Link to='/'> <img src={logo} alt="CLEAR CART" className='logo' /></Link>

                    </div>
                    <div className="col-md-4 search-box">
                        <div className="search">
                            <input type="text" placeholder='Search' />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    <div className="col-md-4 nav-right">
                        {/* <div className="language" id='language'>
                            <select name="" id="">
                                <option value="English">English</option>
                                <option value="Malayalam">Malayalam</option>
                                <option value="Hindi">Hindi</option>
                            </select>
                        </div> */}
                        <div className="cart">
                            <button><Link to='/view-cart' id='cartlogo'><TiShoppingCart /> cart</Link></button>
                        </div>
                        <div className="profile">
                            <img src={defaultuser} alt="" onClick={showSidebar} />
                        </div>
                        <div className="theme">
                            <div onClick={changeTheme}>
                                {theme ? <i className="fa-solid fa-toggle-on"></i> : <i className="fa-solid fa-toggle-off"></i>}
                            </div>

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
                        <Link to='/view-cart' className='view-profile'>View Orders</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-people-arrows"></i>
                        <Link to='/register' className='view-profile'>Switch Account</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <Link to='/' className='view-profile'>logout</Link>
                    </li>
                    <li className="profile-links part">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <Link to='/login' className='view-profile'>login</Link>
                    </li>
                    <li className="profile-links">
                        <i className="fa-solid fa-plus"></i>
                        <Link to='/register-sell-product' className='view-profile'>Become a seller</Link>
                    </li>
                    <li className="profile-links part">
                        <i className="fa-solid fa-tags"></i>
                        <Link to='/view-my-product' className='view-profile'>View My Products</Link>
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
                <div className="col-md-3"><Link to='/'><i className="fa-solid fa-house"></i></Link></div>
                <div className="col-md-3"><Link to='/view-cart'><i className="fa-solid fa-cart-shopping"></i></Link></div>
                <div className="col-md-3" onClick={changeTheme}>{theme ? <i className="fa-solid fa-toggle-on"></i> : <i className="fa-solid fa-toggle-off"></i>}</div>
                <div className="col-md-3" onClick={showSidebar}><i className="fa-solid fa-bars"></i></div>
            </div>

        </span>
    )
}

export default UserNavbar
