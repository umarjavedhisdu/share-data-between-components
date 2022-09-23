import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { Student } from '../model/student.model';
import { LoadingService } from '../services/loading.service';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: []
})
export class StudentComponent implements OnInit {
  loading: boolean = false;
  students: Student[] = [];
  constructor(private studentService: StudentService, private _loading: LoadingService) { }

  ngOnInit() {
    // get data and save it in student array. will pass this array to child.
    this.studentService.getStudentList().subscribe((students: Student[]) => {
      this.students = students;
    });
    setTimeout(() => {                           // <<<---using ()=> syntax
      this.listenToLoading();
    }, 10000);
    
  }

  // receive data from child in this method.
  getStudentList($event: any) {
    this.students = $event;
  }

  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
