import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template:`<p> {{message}}</p>
  <button on-mouseover="func()" (click)="func1()"[disabled]="dis" [ngStyle]=
  "{'margin-left':left,'margin-top':top,'color':color}">   {{str}}</button>

  `,
  //styles: ['button {border-width: 3px;color:blue1;}']


})
export class AppComponent  {
  dis:boolean=false;
  str:string="Click if you can";
  blue1:string="red";
  left:string="200px";
  top:string="200px";
  r_left:number=100;
  r_top:number=100;
  color:string="";
  message:string="Welcome"
  func(){
    this.r_left=Math.floor(Math.random() * 1000);
    this.r_top=Math.floor(Math.random() * 550);
    this.left=this.r_left+"px";
    this.top=this.r_top+"px";
    this.color=Math.floor(Math.random() * 255).toString(16)+Math.floor(Math.random() * 255).toString(16)+Math.floor(Math.random() * 255).toString(16);
    //console.log(this.color);
    this.color="#"+this.color;
    //this.dis=true;
    
  }
  func1(){
    this.message="Okay! I lose, we can start again"
  }   
}

