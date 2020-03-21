import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/common/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students : Student[];

  constructor(private _studentService: StudentService) { }

  ngOnInit(): void {
    this.listStudents()
  }

  listStudents(){
    this._studentService.getStudents().subscribe(
      data =>{
        this.students=data;
      }
    )
  }
}
