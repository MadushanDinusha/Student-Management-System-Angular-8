import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';
import { MatDialogRef} from '@angular/material/dialog';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;
  registerForm: FormGroup;
  graterThanZero : boolean;

  constructor(public studentService: StudentService, 
    private router: Router,
    public dialogRef : MatDialogRef<CreateStudentComponent>,
    private notificationService: NotificationServiceService,
    private formBuilder: FormBuilder) { }
    

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          address: ['', Validators.required],
          phone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
          grade: ['', [Validators.required]],
          gender: ['', [Validators.required, ]],
          createdDate: ['', Validators.required],
      });
  }

  newStudent() : void{
    this.submitted = false;
  }

  onClear() {
    this.notificationService.success('Submitted successfully');
  }

  save(){
    this.studentService.createStudent(this.student)
      .subscribe(data => console.log(data));
    this.gotolist();
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
  }

    this.submitted = true;
    this.save();   
    this.notificationService.success('Submitted successfully');
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
