import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';



const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'about', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
