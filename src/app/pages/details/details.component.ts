import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { OlympicLineChartComponent } from "~/components/olympic-line-chart/olympic-line-chart.component";
import { Olympic } from "~/models/Olympic";
import { OlympicService } from "~/services/olympic.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  imports: [OlympicLineChartComponent, RouterLink]
})
export class DetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  countryId: number;
  olympic: Olympic | null = null;
  entries = 0;
  totalMedals = 0;
  totalAthletes = 0;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private olympicService = inject(OlympicService);

  constructor() {
    this.countryId = Number(this.route.snapshot.paramMap.get("countryId") || -1);
  }

  ngOnInit(): void {
    this.olympicService.getOlympicById(this.countryId).pipe(
      takeUntil(this.destroy$)
    ).subscribe((olympic) => {
      if (!olympic) {
        this.router.navigate(["/not-found"]);
        return;
      }
      this.olympic = olympic;
      this.entries = olympic.participations.length;
      this.totalMedals = olympic.participations.reduce((acc, participation) => acc + participation.medalsCount, 0);
      this.totalAthletes = olympic.participations.reduce((acc, participation) => acc + participation.athleteCount, 0);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}