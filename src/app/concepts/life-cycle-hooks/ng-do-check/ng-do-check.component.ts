import { Component } from '@angular/core';
import { ChildComponent } from "../ng-do-check/child/child.component";

@Component({
  selector: 'app-ng-do-check',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-do-check.component.html',
  styleUrl: './ng-do-check.component.css'
})
export class NgDoCheckComponent {
user = {id:1, name:"userA"};
// user2 = {id:2, name:"user2"};

updateUser(){
  this.user.name = "newUserA";
  // this.user = this.user2; will trigger ngOnchanges
  
}
}
