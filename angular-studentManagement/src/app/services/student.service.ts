import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../common/student';
import{map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8888/getAll"
  
  constructor(private httpClient : HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(this.baseUrl).pipe(
      map(response => response)
    )
  }
}
