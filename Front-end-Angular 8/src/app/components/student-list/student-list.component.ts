import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/common/student';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {DataSource} from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CreateStudentComponent } from '../create-student/create-student.component';
import { UpdateStudentComponent } from '../update-student/update-student.component';
import { DialogService } from 'src/app/services/dialog.service';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { NotificationServiceService } from 'src/app/services/notification-service.service';

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
  searchKey : String;
  


  constructor(private studentService: StudentService,
    private router: Router,
    private dialog: MatDialog,
    private dialogService: DialogService,
    private notificationService: NotificationServiceService) {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(ele => {
        return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
      });
    };
  }

  loadData(){
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

  onSearchClear(){
    this.searchKey="";
  }

  applyFilter(){
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig;
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CreateStudentComponent, dialogConfig).afterClosed().subscribe(()=>this.loadData());
  }

  onEdit(id:number){
    this.studentService.setSession('UserId', id);
    const dialogConfig= new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    this.dialog.open(UpdateStudentComponent, dialogConfig).afterClosed().subscribe(
      res=>{
        this.loadData();
        this.notificationService.success('Updated Successfully');
       });
  }

  onDelete(id: number){
    this.dialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res =>{
      if(res){
        this.studentService.deleteStudent(id).subscribe(res=>{
          console.log(res);
          this.loadData();
          this.notificationService.warn('Deleted successfully');
        });
      }
    });
  }
}