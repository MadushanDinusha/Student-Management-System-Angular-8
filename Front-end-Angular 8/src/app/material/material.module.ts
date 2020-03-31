import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatToolbarModule,
  MatInputModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
