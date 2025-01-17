import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: any[] = []

  userObj: any = {
    username: "",
    email: ""
  }

  http = inject(HttpClient)

  constructor(){
    this.http.get(`http://localhost:3001/users`).subscribe( (response: any) => {
      console.log(response);
      this.users = response
    })
  }

  getUsers(){
    try{
      this.http.get(`http://localhost:3001/users`).subscribe( (response: any) => {
        console.log(response);
        this.users = response
      })
    }catch(err){
      console.log(`Error: ${err}`);
      
    }
  }

  addUser(){
    try{
      this.http.post(`http://localhost:3001/users`, this.userObj).subscribe( (response: any) => {
        alert("New Record Added.")
        this.users = response
        this.getUsers()
      })
    }catch(err){
      console.log(`Error: ${err}`); 
    }
  }

  editUser(data: any){
    // this.userObj = data
    this.userObj = { ... data }
  }

  updateUser(){
    this.http.put(`http://localhost:3001/users/${this.userObj.id}`, this.userObj).subscribe( (response: any) => {
      console.log(this.userObj.id);
      alert("User updated.")
      this.users = response
      this.getUsers()
    })
  }

  deleteUser(id: any){
    let confirm = window.confirm("Are you sure you want to delete?")
    if(confirm){
        this.http.delete(`http://localhost:3001/users/${id}`).subscribe( (response) => {
        alert("User deleted successfully.")
        this.getUsers()
      })
    }

  }


}
