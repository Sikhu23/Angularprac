import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session1',
  templateUrl: './session1.component.html',
  styleUrls: ['./session1.component.css']
})
export class Session1Component implements OnInit {

  constructor() {

   }

   note:String='senil';
   i:number=0;
   time1:Date=new Date(2022,11,11)

   fun=()=>{

     this.i=this.i+1;
     console.log("i value is ",this.i)
   }
   fun1=()=>{

    // this.i=this.i+1;
    this.note="siddharth"
    // console.log("i value is ",this.i)
  }




  ngOnInit(): void {
  }

}
