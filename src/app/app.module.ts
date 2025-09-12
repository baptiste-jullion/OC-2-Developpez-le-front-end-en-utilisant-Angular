import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NotFoundComponent } from "~/pages/not-found/not-found.component";
import { HomeComponent } from "~/pages/home/home.component";
import { AppComponent } from "~/app.component";
import { AppRoutingModule } from "~/app-routing.module";

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AppComponent, HomeComponent, NotFoundComponent],
  providers: [],
})
export class AppModule {}
