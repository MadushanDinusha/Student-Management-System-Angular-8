import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  constructor(public studentService: StudentService, 
    private router: Router,
    public dialogRef : MatDialogRef<CreateStudentComponent>,
    private notificationService: NotificationServiceService,) { }

  ngOnInit(): void {
  }

  newStudent() : void{
    this.submitted = false;
  }

  onClear() {
    this.notificationService.success(':: Submitted successfully');
  }

  save(){
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data));
    this.gotolist();
  }

  onSubmit() {
    this.submitted = true;
    this.save();   
    this.notificationService.success(':: Submitted successfully');
    this.onClose();
  }
  
  onClose(){
  
   this.dialogRef.close();
  }

  gotolist(){
    console.log('path')
    this.router.navigate(['/students']);
  }
}
