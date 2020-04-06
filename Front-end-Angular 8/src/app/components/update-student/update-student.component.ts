import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id: number;
  student: Student;
  submitted = false;

  

  constructor(private route: ActivatedRoute,private router: Router,
    private studentService: StudentService,
    public dialogRef : MatDialogRef<UpdateStudentComponent>) { }

  ngOnInit() {
    this.student = new Student();
    this.id= this.studentService.getSession('UserId');
    this.studentService.getStudents(this.id)
      .subscribe(data => {
        console.log(data)
        this.student = data;
      }, error => console.log(error));
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student)
      .subscribe(data => console.log(data), error => console.log(error));
    this.student = new Student();
    this.gotoList();
  }

  onSubmit() {
    this.updateStudent();    
    this.submitted = true;
    this.onClose();
  }

  onClose(){
    this.dialogRef.close();
   }

  gotoList() {
    this.router.navigate(['/students']);
  }
}
