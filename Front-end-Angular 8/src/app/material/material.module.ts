import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const material = [
  MatSnackBarModule,
  MatToolbarModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatGridListModule,
  MatDatepickerModule,
  MatSelectModule,
  MatRadioModule,
  MatSortModule,
  MatNativeDateModule,
  MatButtonModule,
  MatIconModule,
  FormsModule,
  MatDialogModule
]

@NgModule({
  declarations: [],
  imports: [material],
  exports: [material]
})

export class MaterialModule { }
