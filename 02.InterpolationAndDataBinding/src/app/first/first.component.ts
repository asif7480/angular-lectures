import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  studentId: string = "Student14412345";
  studentName: string = "Abc";
  course: string = "ADSE";
  isMarried: boolean = true;
  contact: number = 2323232;
}
