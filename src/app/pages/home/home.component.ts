import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { OlympicPieChartComponent } from "~/components/olympic-pie-chart/olympic-pie-chart.component";
import { Olympic } from "~/models/Olympic";
import { OlympicService } from "~/services/olympic.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [CommonModule, OlympicPieChartComponent]
})
export class HomeComponent implements OnInit {

  public olympics$!: Observable<Olympic[] | null>;
  private olympicService = inject(OlympicService);

  public countJOS = 0;
  public countCountries = 0;

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics().pipe(
      tap(olympics => {
        if (olympics) {
          this.countJOS = new Set(olympics.flatMap(o => o.participations.map(p => p.year))).size;
          this.countCountries = olympics.length;
        }
      })
    );
  }
}