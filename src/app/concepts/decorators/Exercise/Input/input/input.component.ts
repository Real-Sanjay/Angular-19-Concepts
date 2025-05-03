import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ChildComponent, JsonPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  courses: {id:number, name:string}[] =[
    {id: 1, name: 'Angular'},
    {id: 2, name: 'React'},
    {id: 3, name: 'Vue'},
    {id: 4, name: 'Svelte'},
    {id: 5, name: 'Ember'},
    {id: 6, name: 'Backbone'},
  ]

}
