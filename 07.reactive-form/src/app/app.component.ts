import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveComponent} from "./reactive/reactive.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07.reactive-form';
}
