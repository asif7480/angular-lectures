import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, CurrencyPipe, DatePipe, JsonPipe],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  text: string = "Example text"
  price: number = 799999
  today: number = Date.now()
  info: any = {
    username: "Asif",
    designation: "Software developer",
    techStack: "MERN Stack"
  }
}
