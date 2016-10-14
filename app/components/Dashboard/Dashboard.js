import React from 'react';
import Paper from 'material-ui/Paper';
import { Polar, Bar, Radar, Line } from 'react-chartjs-2';
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

var BarChart = React.createClass({
  displayName: 'PolarExample',

  render () {
    return (
      <div className='chartContainer'>
        <h3 >Some title</h3>
        <Bar data={data} datasets={datasets} options={options} />
      </div>
    );
  }
});

var PolarChart = React.createClass({
  displayName: 'PolarExample',

  render () {
    return (
      <div className='chartContainer'>
        <h3 >Some title</h3>
        <Polar data={data} datasets={datasets}   />
      </div>
    );
  }
});

export const Dashboard = () => (
  <div>
    <Paper className='dashboardItem'>
      <LineChart />
    </Paper>
    <Paper className='dashboardItem'>
      <PolarChart />
    </Paper>
    <Paper className='polar dashboardItem'>
      <BarChart />
    </Paper>
  </div>
);

export default Dashboard;
