import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NotFoundComponent } from "~/pages/not-found/not-found.component";
import { HomeComponent } from "~/pages/home/home.component";
import { AppComponent } from "~/app.component";
import { AppRoutingModule } from "~/app-routing.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
