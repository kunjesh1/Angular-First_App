import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ServerComponent } from "./server/server.component";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ServerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
