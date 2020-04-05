import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/common/student';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})



export class StudentListComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  students: Observable<Student[]>;
  displayedColumns: string[] = ['name','grade','gender','phone','actions'];
  public dataSource = new MatTableDataSource<Student>()

  
  


  constructor(private studentService: StudentService,
    private router: Router) {}

  ngOnInit() {
    this.getAllStudents();
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllStudents = () => {
    this.studentService.getStudentList()
    .subscribe(res => {
      this.dataSource.data = res as Student[];
    })
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
  }

  studentDetails(id: number){
    this.router.navigate(['details', id]);
  }
}