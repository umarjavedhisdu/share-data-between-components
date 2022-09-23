import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: []
})
export class StudentListComponent implements OnChanges {
  private _studentList: Student[] = [];
  public get studentList() {
    return this._studentList;
  }
  @Input() public set studentList(value: Student[]) {
    // console.log('initialize array');
    this._studentList = value;
  }
  //recieve input from parent
  // @Input() studentList: any[];
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      console.log({
        previousValue: changes[propName].previousValue,
        currentValue: changes[propName].currentValue,
        firstChange: changes[propName].firstChange
      })
    }
  }
  trackByStudentId(index: number, student: Student): number {
    return student.id!;
  }
}
