import React from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends React.Component{
  render(){
  return (
    <>
    <Bar 
    type="bar"
      data={{
        labels:['8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm'],
        datasets: [
          {
            label: "Average Wait Time",
            data:[2,5,7,8,13,19,10,15,20,25],
            backgroundColor:[
              '#173668'
            ],
            borderColor: [
              '#173668'
            ]
          }
        ]
      }}
      height={200}
      width={300}
      options={{
        maintainAspectRatio: false
      }}
    />
    </>
  );}
}

export default Chart;
