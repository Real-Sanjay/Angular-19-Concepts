import { Component } from '@angular/core';
import { EventEmitter, Output , Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() items: string[] = [];
  @Output() itemDeleted = new EventEmitter<number>();

  deleteIndex(index: number) {
    this.itemDeleted.emit(index);
  }

  ngOnInit(): void {
    console.log('Child Component is initialized');
  }
  ngOnDestroy(): void {
    console.log('Child Component is destroyed');
  }

}
