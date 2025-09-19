import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Observable, of, tap } from "rxjs";
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

  public olympics$: Observable<Olympic[] | null> = of(null);

  private olympicService = inject(OlympicService);

  public countJOS = 0;
  public countCountries = 0;

  ngOnInit(): void {
    this.olympics$ = this.olympicService.getOlympics();

    this.olympics$.pipe(
      tap((olympics) => {
        this.countJOS = new Set(olympics?.map(o => o.participations.map(p => p.year)).flat()).size || 0;
        this.countCountries = new Set(olympics?.map((o) => o.country)).size || 0;
      })
    ).subscribe();
  }

}
