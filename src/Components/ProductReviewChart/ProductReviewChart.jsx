import { useState, useEffect } from 'react';
import './ProductReviewChart.css';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
function ProductReviewChart({ star1, star2, star3, star4, star5 }) {

  const [state, setState] = useState({
    series: [star5, star4, star3, star2, star1],
    options: {
      plotOptions: {
        radialBar: {
          dataLabels: {
            value: {
              fontSize: '20px',
            },
            total: {
              show: true,
              label: 'Product',
              fontSize:"25px",
              formatter: function () {
                return "Review"
              },
            },
          },
        },
      },
      labels: [`\u2B50\u2B50\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50\u2B50`, `\u2B50\u2B50\u2B50`, `\u2B50\u2B50`, `\u2B50`],
    },
  });

  useEffect(() => {
    // Update the series when props change
    setState((prevState) => ({
      ...prevState,
      series: [star5, star4, star3, star2, star1],
      
    }));
  }, [star1, star2, star3, star4, star5]);

  return (
    <div className="product-review-chart-container container-fluid">
      <div className="row product-review-chart-row">
        <div className="product-review-chart-other">
          <Chart
            options={state.options}
            series={state.series}
            type="radialBar"
            width={560}
            height={350}
          />
        </div>
        <div className="product-review-chart-mobile">
          <Chart
            options={state.options}
            series={state.series}
            type="radialBar"
            width={350}
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
ProductReviewChart.propTypes = {
  star1: PropTypes.number.isRequired,
  star2: PropTypes.number.isRequired,
  star3: PropTypes.number.isRequired,
  star4: PropTypes.number.isRequired,
  star5: PropTypes.number.isRequired,
};
export default ProductReviewChart;
