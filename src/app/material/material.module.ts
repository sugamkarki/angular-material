import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
} from '@angular/material';
import { MatBadgeModule } from '@angular/material';
const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];
@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
