import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import { ParentComponent } from '../parent/parent.component';
import { DirectiveoneDirective } from './directiveone.directive';
import { MyServiceService } from './my-service.service';
import { AdduserComponent } from './adduser/adduser.component';
// import { AdduserComponent } from './adduser/adduser.component';
// import { ChildComponent } from '../child/child.component';
// import { AppComponent } from './app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,ParentComponent,DirectiveoneDirective,AdduserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[MyServiceService]
})
export class AppComponent  {
  msg!:string ;
  users:{name:string,status:string}[]=[];
  constructor(private userService:MyServiceService){}
  ngOnInit(): void {
    this.users = this.userService.users;

  }
  // onToggle=true;
  
  // naam:string="";
  // grade:string="";
  // value:boolean=true;
  // studentlist:string[]=[];
  // submit(){
  //   this.studentlist.push(this.naam+" "+this.grade)
  // }
  // marks1:number=0;
  // marks2:number=0;
  // total:number=0;
  // onTotal(){
  //   this.total = Number(this.marks1)+Number(this.marks2);
  // }
  // num:number=0;
  // increase(){
  //   this.num+=1
  // }
  // decrease(){
  //   this.num-=1
  // }
  // reset(){
  //   this.num=0
  // }

  
}



