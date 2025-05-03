import { Component, ContentChild, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() was invoked...');
    console.log('ngAfterContentInit() - wrapper: ', this.wrapper);
    console.log('ngAfterContentInit() - content: ', this.content);
  }

}
