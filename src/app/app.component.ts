import { Component, Output, EventEmitter } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide = true;
  selectedValue: string;
  items: string[] = ['C Sharp', 'Java', 'Ruby'];
  LogData(data: any) {
    console.log(data);
  }
}
