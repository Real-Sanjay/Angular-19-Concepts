import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-ng-on-changes',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-on-changes.component.html',
  styleUrl: './ng-on-changes.component.css'
})
export class NgOnChangesComponent {
initialValue: string = 'FirstValue';

updateValue(){
  this.initialValue = 'SecondValue';
}
}
