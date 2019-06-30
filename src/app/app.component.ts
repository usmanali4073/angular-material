import { Component, Output, EventEmitter } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "AngularMaterial";
  progress = 50;
  showSpinner: boolean;

  opended: false;

  log(logs: any) {
    console.log(logs);
  }
}
