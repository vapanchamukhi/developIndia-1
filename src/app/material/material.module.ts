import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

const material = [
  MatSidenavModule,
  MatListModule,
  MatTableModule
];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }