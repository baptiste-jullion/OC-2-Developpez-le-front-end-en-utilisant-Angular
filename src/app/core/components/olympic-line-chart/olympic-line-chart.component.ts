import { Component, Input, OnInit, ViewChild, OnChanges, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ApexAxisChartSeries, ApexChart, ApexResponsive, ApexStroke, ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { Olympic } from "~/models/Olympic";

interface LineChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  stroke: ApexStroke;
  responsive: ApexResponsive[];
}

@Component({
  selector: "app-olympic-line-chart",
  templateUrl: "./olympic-line-chart.component.html",
  styleUrls: ["./olympic-line-chart.component.scss"],
  imports: [NgApexchartsModule,]
})
export class OlympicLineChartComponent implements OnInit, OnChanges {
  @ViewChild("chart") chart!: ChartComponent;

  @Input() olympic!: Olympic;

  public chartOptions: LineChartOptions;

  private router = inject(Router);

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "line",
        width: 800,
        height: 400,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      labels: [],
      stroke: {
        curve: "smooth"
      },
      responsive: [
        {
          breakpoint: 850,
          options: {
            chart: {
              width: 600,
            },
          }
        },
        {
          breakpoint: 650,
          options: {
            chart: {
              width: 400
            },
          }
        },
        {
          breakpoint: 450,
          options: {
            chart: {
              width: 300
            },
          }
        },
        {
          breakpoint: 350,
          options: {
            chart: {
              width: 250
            },
          }
        }
      ]
    };
  }

  ngOnInit(): void {
    this.updateChartOptions();
  }

  ngOnChanges(): void {
    this.updateChartOptions();
  }

  private updateChartOptions(): void {
    this.chartOptions.series = [
      {
        name: "Medals",
        data: this.olympic.participations.map(participation => participation.medalsCount)
      }
    ];
    this.chartOptions.labels = this.olympic.participations.map(participation => participation.year.toString());
  }
}