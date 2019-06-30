import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';
import { timeout } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularMaterial';
  progress = 50;
  showSpinner:boolean;


  LoadData(){
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }
}
