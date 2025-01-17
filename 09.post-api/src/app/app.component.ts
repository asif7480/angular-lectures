import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarComponent } from "./car/car.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '09.post-api';
}
