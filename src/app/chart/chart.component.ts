import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType, Chart} from 'chart.js';
import {Color, Label, MultiDataSet} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

    projectsData: any[] = [{image: '../../assets/project-1.jpg', projectname: 'Homepage Redesign', updatedtime: 'Updated 4hr ago'},
                           {image: '../../assets/project-2.jpg', projectname: 'Travels & Time', updatedtime: 'Updated 4hr ago'},
                           {image: '../../assets/project-3.jpg', projectname: 'Safari Exploration', updatedtime: 'Updated 4hr ago'},
                           {image: '../../assets/project-5.jpg', projectname: 'Personal Site', updatedtime: 'Updated 4hr ago'}];

  ngOnInit() {

    // Bar chart
    const myChart = new Chart('c', {
      type: 'bar',
      data: {
          labels: ['Oct 1', 'Oct 2', 'Oct 3', 'Oct 4' ,'Oct 5', 'Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 11', 'Oct 12'],
          datasets: [{
              barPercentage: 0.7,
              barThickness: 10,
              maxBarThickness: 10,
              data: [2, 10, 20, 13, 20, 5, 8, 25, 13, 16, 20, 4, 30],
              backgroundColor: [
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
                  '#2c7be5',
              ],
              borderColor: [
                  '#2c7be5',
              ],
              borderWidth: 1
          }],
      },
      options: {
        legend: {
            display: false,
            labels: {
                fontColor: "red",
                fontSize: 18
            }
        },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false,
                      fontColor: '#95aac9',
                      fontSize: 13
                  },
                  gridLines : {
                    borderDash: [2, 4],
                }
              }],
              xAxes: [{
                ticks: {
                    beginAtZero: false,
                    fontColor: '#95aac9',
                    fontSize: 12
                },
                gridLines : {
                  display : false
              }
            }],
          },
      }
  });

  // Doughnut chart
    let myDoughnutChart = new Chart('doughnut', {
  type: 'doughnut',
  data: {
    datasets: [{
        data: [15, 8, 4],
        backgroundColor: [
            '#2C7BE5',
            '#A6C5F7',
            '#A6C5F7'
        ]
    }]
},
options : {
    cutoutPercentage: 80,
    aspectRatio: 1.5
    // legend: {

    //     labels: {
    //         boxWidth: 30,
    //         }
    //     }
}

});

// Line chart
    var myLineChart = new Chart('line', {
  type: 'line',
  data: {
    labels: ['Oct 1', 'Oct 3', 'Oct 6', 'Oct 9' ,'Oct 12', 'Oct 5', 'Oct 18', 'Oct 21', 'Oct 24', 'Oct 27', 'Oct 30'],
    datasets: [{
        data: [0, 5, 5, 10, 10, 15, 15, 20, 20, 30, 30, 40, 45],
        backgroundColor: [
            'transparent'
        ],
        borderColor: [
            '#2c7be5'
        ],
        borderWidth: 3
    }],
},
options: {
    legend: {
        display: false
    },
    elements: {
        point: {
            radius: 0
        }
    },
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: false,
                  fontColor: '#95aac9',
                  fontSize: 12
              },
              gridLines : {
                borderDash: [2, 4],
            }
          }],
          xAxes: [{
            ticks: {
                beginAtZero: false,
                fontColor: '#95aac9',
                fontSize: 13
            },
            gridLines : {
              display : false
          }
        }],
      }
  }
});
  }
}
