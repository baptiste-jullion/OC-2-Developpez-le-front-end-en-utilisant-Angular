import { Component, inject, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { Olympic } from "~/models/Olympic";
import { OlympicService } from "~/services/olympic.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: false
})
export class HomeComponent implements OnInit {
  public olympics$: Observable<Olympic[] | null> = of(null);

  private olympicService = inject(OlympicService);

  ngOnInit(): void {

    this.olympics$ = this.olympicService.getOlympics();

  }
}
