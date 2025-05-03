import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild(ChildComponent) childComponent?: ChildComponent;
  @ViewChild('btnIncr') btnRef?: ElementRef<HTMLButtonElement>;

  incrChildCounter() {
    console.log(this.childComponent);
    this.childComponent?.incrCounter();
  }
  ngAfterViewInit(): void {
    if (this.btnRef?.nativeElement) {
      this.btnRef.nativeElement.innerHTML = 'Counter ++';
    }
  }
}
