import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { take } from "rxjs";
import { OlympicService } from "~/services/olympic.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [RouterModule]
})
export class AppComponent implements OnInit {
  private olympicService = inject(OlympicService);

  ngOnInit(): void {
    this.olympicService.loadInitialData().pipe(take(1)).subscribe();
  }
}
