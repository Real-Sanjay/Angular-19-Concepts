import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-query-params',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './query-params.component.html',
  styleUrl: './query-params.component.css'
})
export class QueryParamsComponent {

id!: number;
name!: string;

employee: {id: number, name: string}[] = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane'},
  {id: 3, name: 'Doe'}
];

constructor(private route: ActivatedRoute) {
  this.route.queryParams.subscribe(params=>{
    this.id = params['id'];
      this.name = params['name'];
      console.log(this.id, this.name);
  })

  // this.id = this.route.snapshot.queryParams['id'];
  // this.name = this.route.snapshot.queryParams['name'];
  // console.log(this.id, this.name);
}
}