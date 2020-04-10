import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

const material = [
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }