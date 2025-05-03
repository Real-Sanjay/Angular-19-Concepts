import { Component } from '@angular/core';

@Component({
  selector: 'app-change-main',
  standalone: true,
  imports: [],
  templateUrl: './change-main.component.html',
  styleUrl: './change-main.component.css'
})
export class ChangeMainComponent {
get toShowdata(){
  console.log("log from main app");
  return
}

 val = Math.random(); 
get randomValue(){
  return this.val;
}
}
