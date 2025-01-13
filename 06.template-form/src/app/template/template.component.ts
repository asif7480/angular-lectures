import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  person: any = {
    username: "",
    email: "",
    city: "",
    address: "",
    password: ""
  }

  formObj: any

  handleForm(){
    this.formObj = this.person
    console.log(this.formObj);
    
  }
}
