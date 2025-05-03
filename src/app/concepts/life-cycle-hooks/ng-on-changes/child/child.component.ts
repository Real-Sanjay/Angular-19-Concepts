import { Component, Input, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {
@Input() initialValueOfParent = ''

previousValue = ''
currentValue = ''

ngOnChanges(changes: SimpleChanges): void {
    if(changes['initialValueOfParent'])
    {
      this.previousValue = changes['initialValueOfParent'].previousValue;
      this.currentValue = changes['initialValueOfParent'].currentValue;

    }
    console.log(changes)
}

}
