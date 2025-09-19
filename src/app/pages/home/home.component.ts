import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { ApexChart, ApexNonAxisChartSeries, ChartComponent, NgApexchartsModule, ApexLegend, ApexDataLabels, ApexTooltip } from "ng-apexcharts";
import { Observable, of } from "rxjs";
import { Olympic } from "~/models/Olympic";
import { OlympicService } from "~/services/olympic.service";

interface ChartOptions {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  labels: string[];
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [CommonModule, NgApexchartsModule]
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;

  public chartOptions: ChartOptions;

  public olympics$: Observable<Olympic[] | null> = of(null);

  private olympicService = inject(OlympicService);

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        type: "pie",
        width: 400,
        height: 400,
      },
      legend: {
        show: false
      },
      labels: [],
      dataLabels: {
        enabled: false
      },
      tooltip: {
        custom(options) {
          console.log(options);
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
    this.olympics$ = this.olympicService.getOlympics();

    this.olympics$.subscribe((olympics)=> {
      if (!olympics) {
        return;
      }

      const series = olympics.map(olympic => olympic.participations.reduce((sum, p) => sum + p.medalsCount, 0));

      this.chartOptions.series = series;

      const labels = olympics.map(olympic => olympic.country);

      this.chartOptions.labels = labels;
    });

  }
}
