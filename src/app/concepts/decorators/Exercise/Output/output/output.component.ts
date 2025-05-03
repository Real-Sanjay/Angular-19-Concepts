import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  itemsArr: string[] = ['Item 1', 'Item 2', 'Item 3'];

  addItem() {
    const newItem = `Item ${this.itemsArr.length + 1}`;
    this.itemsArr.push(newItem);
  }
  deleteItem(index: number) {
    if (index >= 0 && index < this.itemsArr.length) {
      this.itemsArr.splice(index, 1);
    }
  }
  ngOnInit(): void {
    console.log('App Component is initialized');
  }
}
