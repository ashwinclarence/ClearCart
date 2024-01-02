import './UserProfileChart.css'
import sample from '../../images/sample.jpg'
function UserProfileChart() {
  return (
    <div className='user-profile-chart-container container-fluid'>
      <div className="row user-profile-chart-row">
            <img src={sample} alt="" />
      </div>
    </div>
  )
}

export default UserProfileChart
