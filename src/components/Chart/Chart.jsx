import React from 'react'
import { Bar as BarChart} from 'react-chartjs-2';
import { Chart } from 'chart.js';
import 'chart.js/auto'; // Import the necessary scales

const ChartComponent = () => {
   // Register the "linear" scale
   Chart.register({ id: 'linear', type: 'linear' });
    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, -19, 3, 5, 2, -3],
            backgroundColor: [
              'rgba(79, 181, 201, 1)',   // Màu cho giá trị dương
              'rgba(240, 93, 94, 1)',     // Màu cho giá trị âm
            ],
            borderColor: [
              'rgba(79, 181, 201, 1)',    // Màu cho giá trị dương
              'rgba(240, 93, 94, 1)',     // Màu cho giá trị âm
            ],
            
            borderWidth: 1,
             borderRadius: 10, 
          },
        ],
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
  return (
   <BarChart data={data} options={options}></BarChart>
  )
}
export  default ChartComponent
