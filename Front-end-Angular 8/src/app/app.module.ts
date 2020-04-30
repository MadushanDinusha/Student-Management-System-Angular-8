import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentService } from './services/student.service';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatConfirmDialogComponent } from './components/mat-confirm-dialog/mat-confirm-dialog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    MatConfirmDialogComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent],
  entryComponents:[CreateStudentComponent,
    UpdateStudentComponent,
  MatConfirmDialogComponent]
})
export class AppModule { }
