import {  useState } from 'react';
import './UserProfileChart.css'
import Chart from "react-apexcharts";
function UserProfileChart() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "Profile-review"
      },
      xaxis: {
        categories: [`\u2B50`, `\u2B50\u2B50`, `\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50\u2B50\u2B50`]
      }
    },
    series: [
      {
        name: "Review others gave to you",
        data: [85, 40, 45, 50, 49],
      },
      {
        name: "Review you gave to others",
        data: [3, 80, 34, 75, 85],
      }
    ]
  })
  
  return (
    <div className='user-profile-chart-container container-fluid'>
      <div className="row user-profile-chart-row">
        <h4>Reviews</h4>
        <div className="user-profile-chart-other">
          <Chart
            options={state.options}
            series={state.series}
            type='bar'
            width={950}
            height={450}
          />
        </div>
        <div className="user-profile-chart-mobile">
          <Chart
            options={state.options}
            series={state.series}
            type='bar'
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  )
}

export default UserProfileChart
