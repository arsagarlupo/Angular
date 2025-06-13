import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
})
export class AppComponent  {



  studentName: string = '';
  studentGrade: string = '';
  students: { name: string, grade: string }[] = [];

  addStudent(nameInput: HTMLInputElement, gradeInput: HTMLInputElement) {
    if (this.studentName.trim() && this.studentGrade.trim()) {
      this.students.push({
        name: this.studentName.trim(),
        grade: this.studentGrade.trim().toUpperCase()
      });
      this.studentName = '';
      this.studentGrade = '';
      nameInput.value = '';
      gradeInput.value = '';
    }
  }

  getGradeClass(grade: string): string {
    switch (grade) {
      case 'A': return 'grade-a';
      case 'B': return 'grade-b';
      case 'C': return 'grade-c';
      default: return '';
    }
  }


  // msg!:string ;
  // users:{name:string,status:string}[]=[];
  // constructor(private userService:MyServiceService){}
  // ngOnInit(): void {
  //   this.users = this.userService.users;

  // }
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



