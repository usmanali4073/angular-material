import { NgModule } from "@angular/core";

import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatBadgeModule } from '@angular/material';
const MaterialComponents = [MatButtonModule, MatButtonToggleModule, MatBadgeModule  ];
@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
