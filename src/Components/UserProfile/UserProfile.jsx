import './UserProfile.css'
import pic1 from '../../images/user.jpeg'
import UserProfileChart from '../UserProfileChart/UserProfileChart'
function UserProfile() {
  
    return (
        <div className="user-profile-container container-fluid">
            <div className="row user-profile-row">
                <div className=" col-md-3 left-user-profile">
                    <img src={pic1} alt="" className='profile-img' />
                        <h5 className='user-profile-name'>Ashwin Clarence</h5>
                    <p><i className="fa-solid fa-hourglass-half profile-icon"></i> user since 2019</p>
                    <p><i className="fa-solid fa-envelope profile-icon"></i> meashwinclarence@gmail.com</p>
                    <p><i className="fa-solid fa-phone profile-icon"></i> 8590120463</p>
                    <p><i className="fa-solid fa-location-dot profile-icon"></i> Kerala</p>
                   <div className="profile-actions">
                    <button >Share Profile</button>
                    <button >Send Verification mail</button>
                    <button >Delete Account</button>
                   </div>
                </div>
              
                <div className="col-md-9 right-user-profile">
                    <div className="right-user-profile-row row">
                        <UserProfileChart/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
