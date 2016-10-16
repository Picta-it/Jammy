import React from 'react';
import Paper from 'material-ui/Paper';
import { Line } from 'react-chartjs-2';
import './Dashboard.scss';

const data = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      'rgba(0,192,192,0.4)'
    ],
    label: 'My dataset'
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

var options = {
  'legend': {
    'display': true
  },
  'title': {
    'display': false
  },
  'responsive': false
};

var datasets = [
  {
    label: 'My First dataset',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(0,192,192,0.4)',
    borderColor: 'rgba(0,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,0,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(0,192,192,1)',
    pointHoverBorderColor: 'rgba(220,0,0,1)',
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10
  }
];

var LineChart = React.createClass({
  displayName: 'PolarExample',

  render () {
    return (
      <div className='chartContainer'>
        <h3 >Some title</h3>
        <Line data={data} datasets={datasets} options={options} />
      </div>
    );
  }
});

export const Dashboard = () => (
  <div className='dashboard-container'>
    <div className='left-column'>
      <Paper className='dashboard-item-1'>
        <LineChart />
      </Paper>
      <Paper className='dashboard-item-2'>
        test
      </Paper>
    </div>
    <div className='right-column'>
      <Paper className='dashboard-item-3'>
        test
      </Paper>
      <Paper className='dashboard-item-4'>
        test
      </Paper>
    </div>
  </div>
);

export default Dashboard;
