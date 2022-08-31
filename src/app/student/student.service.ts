import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "https://localhost:7094";
  constructor(private http: HttpClient) { }

  saveStudent(student: any) {
    return this.http.post<any>(`${this.baseUrl}/api/Students`, student);
  }

  getStudentList() {
    return this.http.get<any>(`${this.baseUrl}/api/Students`);
  }

}
