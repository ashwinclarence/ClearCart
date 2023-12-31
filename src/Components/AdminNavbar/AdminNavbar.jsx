import './AdminNavbar.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from '../../App';
function AdminNavbar() {
    const [theme, setTheme] = useContext(Context)
    const changeTheme = () => {
        setTheme(!theme)
    }
    return (
        <span data-theme={theme ? "dark" : "light"}>

            <div className='admin-navbar-container container-fluid'>
                <div className="row">
                    <div className="col-md-4">
                        <Link to='/' className='admin-logo'><h5>CLEAR CART  <span id='admin'><i className="fa-solid fa-user-tie"></i></span></h5></Link>

                    </div>
                    <div className="col-md-8 admin-nav-right">
                        <div className="admin-profile" >
                            <Link to='/admin-add-offer-image' className='admin-nav-links'><p>Add Offer Image</p></Link>
                        </div>
                        <div className="admin-profile" >
                            <Link to='/admin-view-users' className='admin-nav-links'><p>View Users</p></Link>
                        </div>
                        <div className="admin-profile" >
                            <Link to='/admin-view-products' className='admin-nav-links'><p>View Products</p></Link>
                        </div>
                        <div className="admin-profile" >
                            <Link to='/admin-view-reports' className='admin-nav-links'><p>Reports</p></Link>
                        </div>
                        <div className="admin-profile" >
                            <Link to='/admin-view-tracker' className='admin-nav-links'><p>Sale Tracker</p></Link>
                        </div>
                        <div className="admin-profile">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </div>
                        <div className="theme" onClick={changeTheme}>
                            {theme ? <i className="fa-solid fa-toggle-on"></i> : <i className="fa-solid fa-toggle-off"></i>}
                        </div>
                    </div>

                </div>
            </div>
        </span>
    )
}

export default AdminNavbar
