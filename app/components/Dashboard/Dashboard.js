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
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

var polarOptions = {
  'legend': {
    'display': false
  },
  'responsive': true
};

var RadarChart = React.createClass({
  displayName: 'PolarExample',

  render () {
    return (
      <div className='chartContainer'>
        <h3 >Some title</h3>
        <Radar width={300} height={300} data={data} options={polarOptions} />
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
        <Bar width={300} height={300} data={data} options={polarOptions} />
      </div>
    );
  }
});

var datasets = [
  {
    label: 'My First dataset',
    fill: true,
    lineTension: 0.1,
    backgroundColor: 'rgba(75,192,192,0.4)',
    borderColor: 'rgba(75,192,192,1)',
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: 'rgba(75,192,192,1)',
    pointBackgroundColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    pointHoverBorderColor: 'rgba(220,220,220,1)',
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
        <Line width={300} height={300} data={data} datasets={datasets} options={polarOptions} />
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
        <Polar width={300} height={300} data={data} options={polarOptions} />
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
    <Paper className='dashboardItem'>
      <RadarChart />
    </Paper>
    <Paper className='dashboardItem'>
      <BarChart />
    </Paper>
  </div>
);

export default Dashboard;
