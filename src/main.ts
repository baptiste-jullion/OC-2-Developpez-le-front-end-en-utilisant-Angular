import { enableProdMode, importProvidersFrom } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "~/app.component";
import { AppRoutingModule } from "~/app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "~/environments/environment";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(AppRoutingModule, HttpClientModule)],
})
  .catch(err => console.error(err));
