import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [NgStyle],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  imageUrl: string = "https://angular.dev/assets/images/press-kit/angular_wordmark_gradient.png";
  heightValue: number = 300;
  widthValue: number = 500;
  
  inputText: string = "I am input text";
  isDisabled: boolean = true;

  fontSizeValue: string = "20px";
  fontColorValue: string = "blueviolet";

  myStyles: any = {
    'font-size': "26px",
    'color': "crimson",
    'background-color': "gray"
  }

}
