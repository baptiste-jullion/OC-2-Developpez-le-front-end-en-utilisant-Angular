import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Olympic } from "~/models/Olympic";

@Injectable({
  providedIn: "root",
})
export class OlympicService {
  private olympicUrl = "./assets/mock/olympic.json";
  private olympics$ = new BehaviorSubject<Olympic[] | null>(null);

  private http = inject(HttpClient);

  loadInitialData() {
    return this.http.get<Olympic[]>(this.olympicUrl).pipe(
      tap((value) => this.olympics$.next(value)),
      catchError((error, caught) => {
        // TODO: improve error handling
        console.error(error);
        this.olympics$.next(null);
        return caught;
      })
    );
  }

  getOlympics() {
    return this.olympics$.asObservable();
  }

  getOlympicById(id: Olympic["id"]) {
    return this.olympics$.asObservable().pipe(
      map((olympics) => olympics?.find((olympic) => olympic.id === id) || null)
    );
  }
}
