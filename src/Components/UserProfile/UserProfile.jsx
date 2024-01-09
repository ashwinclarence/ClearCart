import './UserProfile.css'
import UserProfileChart from '../UserProfileChart/UserProfileChart'
import { getDocs } from 'firebase/firestore'
import { auth, userRef } from '../../Firebase/config'
import { useState } from 'react'
import { onAuthStateChanged, sendEmailVerification } from 'firebase/auth'
import UserViewProducts from '../UserViewProducts/UserViewProducts'
function UserProfile() {
    const [username, SetUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [emailVerify, setEmailVerify] = useState(false)
    const [userid, setUserid] = useState('')
    const [navUserProfile, setNavUserProfile] = useState('')
    const [joinDate, setJoinDate] = useState('')

    onAuthStateChanged(auth, (user) => {
        try {

            SetUsername(user.displayName)
            setEmail(user.email)
            setUserid(user.uid)
            if (user.emailVerified) {
                setEmailVerify(true)

            } else {
                setEmailVerify(false)
            }
        } catch (error) {
            console.log(error);
        }
    })
    // function get current user information from firebase
    getDocs(userRef).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            if (userid === doc.data().userId) {
                console.log(userid);
                setNavUserProfile(doc.data().profileImage)
                setPhone(doc.data().phoneNumber)
                setLocation(doc.data().location)
                setJoinDate(doc.data().joinDate)
            }
        })
    }).catch(err => {
        console.log(err.message);
    })

    // send email verfication
    const SndEmailVerfy = (e) => {
        e.preventDefault()
        sendEmailVerification(auth.currentUser).then(() => {
            alert("verfication mail composed")
        }).catch((err) => {
            console.log(err.message);
        })
    }

    // share profile details
    const shareProfileDetails = (e) => {
        e.preventDefault()
        alert("Unable to share profile at the moment")
    }
    return (
        <>
            <div className="user-profile-container container-fluid">
                <div className="row user-profile-row">
                    <div className=" col-md-3 left-user-profile">
                        <img src={navUserProfile} alt="" className='profile-img' />
                        <h5 className='user-profile-name'>{username}</h5>
                        <p><i className="fa-solid fa-hourglass-half profile-icon"></i> user since {joinDate}</p>
                        <p>{emailVerify ? <i className="fa-solid fa-circle-check  profile-icon" title='Your email is verfied'></i> : <i className="fa-solid fa-circle-xmark  profile-icon" title='Your Email is not verfied'></i>} {email}</p>
                        <p><i className="fa-solid fa-phone profile-icon"></i> {phone}</p>
                        <p><i className="fa-solid fa-location-dot profile-icon"></i> {location}</p>
                        <div className="profile-actions">
                            <button onClick={shareProfileDetails}>Share Profile</button>
                            <button onClick={SndEmailVerfy}>Send Verification mail</button>
                            <button >Delete Account</button>
                        </div>
                    </div>

                    <div className="col-md-9 right-user-profile">
                        <div className="right-user-profile-row row">
                            <UserProfileChart userID={userid}/>
                        </div>
                    </div>
                </div>
            </div>
            <UserViewProducts userID={userid}/>
        </>

    )
}

export default UserProfile
