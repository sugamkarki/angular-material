import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
} from '@angular/material';
import { MatBadgeModule } from '@angular/material';
const Material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
];
@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
