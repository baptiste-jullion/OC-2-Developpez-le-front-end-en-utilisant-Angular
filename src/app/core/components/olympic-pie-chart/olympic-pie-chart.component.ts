import { Component, Input, OnInit, ViewChild, OnChanges, inject } from "@angular/core";
import { Router } from "@angular/router";
import { ApexChart, ApexDataLabels, ApexLegend, ApexNonAxisChartSeries, ApexTooltip, ChartComponent, NgApexchartsModule } from "ng-apexcharts";
import { Olympic } from "~/models/Olympic";

interface PieChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  labels: string[];
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
}

@Component({
  selector: "app-olympic-pie-chart",
  templateUrl: "./olympic-pie-chart.component.html",
  styleUrls: ["./olympic-pie-chart.component.scss"],
  imports: [NgApexchartsModule,]
})
export class OlympicPieChartComponent implements OnInit, OnChanges {
  @ViewChild("chart") chart!: ChartComponent;

  @Input() olympics!: Olympic[];

  public chartOptions: PieChartOptions;

  private router = inject(Router);

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "pie",
        width: 400,
        height: 400,
        events: {
          click: (_e, _chart, options) => {
            this.router.navigate(["details", this.olympics[options.dataPointIndex].id]);
          },
        }
      },
      legend: {
        show: false
      },
      labels: [],
      dataLabels: {
        formatter(val, opts) {
          return opts.w.globals.labels[opts.seriesIndex];
        },
      },
      tooltip: {
        custom(options) {
          return `
            <div>
              <p class="country-name">
                ${options.w.globals.labels[options.seriesIndex]}
              </p>
              <p class="medals-count">
                🏅 ${options.series[options.seriesIndex]}
              </p>
            </div>
          `;
        },
      }
    };
  }

  ngOnInit(): void {
    this.updateChartOptions();
  }

  ngOnChanges(): void {
    this.updateChartOptions();
  }

  private updateChartOptions(): void {
    this.chartOptions.series = this.olympics.map(olympic =>
      olympic.participations.reduce((acc, curr) => acc + curr.medalsCount, 0)
    );
    this.chartOptions.labels = this.olympics.map(olympic => olympic.country);
  }
}