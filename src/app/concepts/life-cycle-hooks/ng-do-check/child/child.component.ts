import { Component, Input, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements DoCheck {
@Input() user: any;
previouUser : string | undefined;
ngDoCheck(): void {
    if(this.user.name !== this.previouUser){
      this.previouUser = this.user.name;
      console.log('ngDoCheck called - User name changed to: ', this.user.name);    }
}

}
