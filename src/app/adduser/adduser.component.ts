import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MyServiceService} from '../my-service.service'
@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  constructor(private userService : MyServiceService){}
  userName:string ="";
  status:string = "";
  
  // selectedValue: string = 'option1'; 
  addUser(){
    this.userService.addUser(this.userName,this.status)
    console.log(this.userService.users)
  }
}

