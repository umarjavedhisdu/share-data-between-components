import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: []
})
export class StudentListComponent {
  //recieve input from parent
  @Input() studentList: any[];
}
