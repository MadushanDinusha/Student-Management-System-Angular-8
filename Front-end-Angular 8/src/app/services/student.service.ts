import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../common/student';
import{map} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8888"
  
  constructor(private httpClient : HttpClient) { }

  getStudentList(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getAll`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/save`, student);
  }
  
  updateStudent(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/updateById/${id}`, value);
  }

  getStudents(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/getById/${id}`);
  }

  deleteStudent(id: number): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/deleteById/${id}`, { responseType: 'text' });
  }
  
  setSession(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    if (typeof window !== 'undefined') {
        let retrievedObject = localStorage.getItem(key) as string;
        return retrievedObject;
    }
  }

  clearSession(): void {
    localStorage.clear();
  }

}
