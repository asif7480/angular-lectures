import { Component } from '@angular/core';

@Component({
  selector: 'app-third',
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  print(): void{
    alert("Button has been click once...")
  }

  doubleClick(): void{
    alert("button has been clicked twice...")
  }
}
