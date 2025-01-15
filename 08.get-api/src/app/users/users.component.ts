import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userList: any[] = []
  constructor(private http: HttpClient){

  }

  getUsers(){
    this.http
      .get(`https://jsonplaceholder.typicode.com/users`)
      .subscribe( (result: any) => {
        this.userList = result
      })
  }
}
