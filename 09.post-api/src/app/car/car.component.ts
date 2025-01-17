import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-car',
  imports: [FormsModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  cars: any[] = []
  carObj: any = {
    brand: "",
    model: "",
    year: "",
    color: ""
  }

  // constructor(private http: HttpClient){

  // }
  http = inject(HttpClient)
  
  constructor(){
    this.http.get(`http://localhost:3001/cars`).subscribe( (response: any) => {
      console.log(response);
      this.cars = response
      this.getCars()
    })
  }
  
  getCars(){
    this.http.get(`http://localhost:3001/cars`).subscribe( (response: any) => {
      console.log(response);
      this.cars = response
    })
  }

  addCar(){
    try{
      this.http.post(`http://localhost:3001/cars`, this.carObj).subscribe( (response: any) => {
        alert("Car successfully added.")
        this.getCars()
      }) 
    }catch(err){
      console.log(`Error: ${err}`);
      
    }
  }
}
