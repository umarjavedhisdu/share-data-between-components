import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl = "https://localhost:7094";
  constructor(private http: HttpClient) { }

  saveStudent(student: Student) {
    return this.http.post<Student>(`${this.baseUrl}/api/Students`, student);
  }

  getStudentList() {
    return this.http.get<Student[]>(`${this.baseUrl}/api/Students`);
  }

}
