import { Component, ViewChild } from "@angular/core";

import { ApexNonAxisChartSeries, ApexChart, ApexResponsive, NgApexchartsModule, ChartComponent, } from "ng-apexcharts";

interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: string[];
}

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  imports: [NgApexchartsModule]
})
export class DetailsComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "pie",
        width: 600,
        height: 400,
        events: {
          selection(chart, options) {
            console.log(chart, options);
          },
        },
      },
      labels: ["Apples", "Bananas", "Cherries", "Oranges", "Grapes"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    };
  }

}