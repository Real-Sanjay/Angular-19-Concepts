import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {
jsonData$: Observable<any> | undefined;

constructor(){
  this.jsonData$ = new Observable<any>((observer)=>{
    fetch('https://dummyjson.com/products/category-list').then((response)=>{
          response.json()
    }).then((data)=>{
      observer.next(data);
      observer.complete();
    })
    .catch((error)=>{
       observer.error(error)   
       })
  })
}
}
