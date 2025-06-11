import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  users = [
    {name:"john",status:"Active"},
    {name:"wick",status:"Inactive"},
    {name:"rias",status:"Active"}
  ]
  addUser(name:string,status:string){
    this.users.push({name:name,status:status});
  }
}
