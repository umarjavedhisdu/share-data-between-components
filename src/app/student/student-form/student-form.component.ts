import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: [],
})
export class StudentFormComponent {
  @Input() studentList: Student[] = [];
  @Output() student = new EventEmitter<any[]>();
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    address: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) {}

  onSubmit() {
    const student = this.profileForm.value;
    if (nonNullObject<Student>(student)) {
      this.studentService.saveStudent(student).subscribe((student: Student) => {
        this.studentList.push(student);
        this.student.emit(this.studentList);
      });
    }
  }
}
const nonNullObject = <T extends object>(
  objectToTest: object
): objectToTest is T =>
  Object.values(objectToTest).every((value) => value !== null);
