import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: []
})
export class StudentComponent implements OnInit {
  students = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    // get data and save it in student array. will pass this array to child.
    this.studentService.getStudentList().subscribe(res => {
      this.students = res;
    })
  }

  // receive data from child in this method.
  getStudentList($event) {
    this.students = $event;
  }

}
