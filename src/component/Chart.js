import React, { useEffect, useState } from 'react'
import { csv } from 'd3';
import datacsv from './data/data.csv'
import { Pie, Doughnut } from 'react-chartjs-2';

const Chart = () => {

  // Get CSV FILE
  const [data, setdata] = useState([])
  useEffect(() => {
    csv(datacsv).then(data => {
      setdata(data);
    })
  }, [])
  //console.log(data);

  

  let nevada = data.filter((str) => (
    str.Rate > 432.2
  ));


  let nevadaYear = nevada.map((y) => (
    y.Year
  ))
  let nevadaRate = nevada.map((r) => (
    r.Rate
  ))

  //NEVADA CHART DISPLAY

  const stateNevada = {
    labels: nevadaYear,
    datasets: [
      {
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#3434eb',
          '#00A6B4',
          '#6800B4',
          '#34cdeb',
          '#34eb34',
          '#eb3489',
          '#80eb34',
          '#9c34eb',
          '#ebe134',
        ],
        hoverBackgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#3434eb',
          '#00A6B4',
          '#6800B4',
          '#34cdeb',
          '#34eb34',
          '#eb3489',
          '#80eb34',
          '#9c34eb',
          '#ebe134',
        ],
        data: nevadaRate,
      }
    ]
  }

  // US CHART DISPLAY

  let US = data.filter((str) => (
    str.Rate < 432.2
  ));
 

  let USYear = US.map((y) => (
    y.Year
  ))

  let USRate = US.map((r) => (
    r.Rate
  ))


  const stateUS = {
    labels: USYear,
    datasets: [
      {
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#3434eb',
          '#00A6B4',
          '#6800B4',
          '#34cdeb',
          '#34eb34',
          '#eb3489',
          '#80eb34',
          '#9c34eb',
          '#ebe134',
        ],
        hoverBackgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#3434eb',
          '#00A6B4',
          '#6800B4',
          '#34cdeb',
          '#34eb34',
          '#eb3489',
          '#80eb34',
          '#9c34eb',
          '#ebe134',
        ],
        data: USRate,
      }
    ]
  }
  return (
    <>
    <div>
      <h2>Nevada</h2>
      <Pie
        data={stateNevada}
        options={{
          title: {
            display: true,
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
        </div>

        <div>
        <h2>United States</h2>
      <Doughnut
        data={stateUS}
        options={{
          title: {
            display: true,
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
    </>
  );

}
export default Chart;

