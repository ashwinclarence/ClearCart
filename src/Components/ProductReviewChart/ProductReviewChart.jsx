import { useState } from 'react';
import './ProductReviewChart.css'
import Chart from "react-apexcharts";
function ProductReviewChart() {
    const [state, setState] = useState({
        series: [67,44, 55, 90, 83],
        options: {
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: '20px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function () {
                    return 249
                  }
                }
              }
            }
          },
          labels: [`\u2B50\u2B50\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50`, `\u2B50\u2B50`, `\u2B50`],
        },
      })
      
      return (
        <div className='product-review-chart-container container-fluid'>
          <div className="row product-review-chart-row">
            <h4>Product Reviews</h4>
            <div className="product-review-chart-other">
              <Chart
                options={state.options}
                series={state.series}
                type='radialBar'
                width={560}
                height={350}
              />
            </div>
            <div className="product-review-chart-mobile">
              <Chart
                options={state.options}
                series={state.series}
                type='radialBar'
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      )
    }
    

export default ProductReviewChart
