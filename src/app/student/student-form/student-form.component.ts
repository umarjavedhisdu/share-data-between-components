import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: []
})
export class StudentFormComponent implements OnInit {
  @Input() studentList: any[];
  @Output() student = new EventEmitter<any[]>();
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: ['']
  });

  constructor(private fb: FormBuilder, private studentService: StudentService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const studentValue = { ...this.profileForm.value };
    this.studentService.saveStudent(studentValue).subscribe(res => {
      this.studentList.push(res);
      this.student.emit(this.studentList);
    })
  }

}
