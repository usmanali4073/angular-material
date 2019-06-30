import { NgModule } from "@angular/core";

import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule, MatProgressSpinnerModule } from '@angular/material';
const MaterialComponents = [MatButtonModule, MatButtonToggleModule, MatBadgeModule, MatProgressSpinnerModule  ];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
