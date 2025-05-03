import { Component } from '@angular/core';
import {ChildComponent } from "../ng-after-contentinit/child/child.component";

@Component({
  selector: 'app-ng-after-contentinit',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './ng-after-contentinit.component.html',
  styleUrl: './ng-after-contentinit.component.css'
})
export class NgAfterContentinitComponent {
  dataFromParent: string = '';

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() hook was invoked...');
  }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck() hook was invoked...');
  // }

  sendDataToChild(): void {
    let random = Math.floor(Math.random() * 10);
    this.dataFromParent = 'Random number: ' + random;
  }

}
