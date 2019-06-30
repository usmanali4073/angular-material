import { NgModule } from "@angular/core";

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
} from "@angular/material";


const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
