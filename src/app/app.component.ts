import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'emp-mng';

  //  observable$ = new Observable((obs)=>{
  //   obs.next('observable started');
  //   let cnt = 0;
  //     const cntInc = setInterval(()=>{
  //       obs.next(cnt++)
  //     }, 1000);

  //     return ()=> {
  //       clearInterval(cntInc);
  //       console.log("returned");
  //     }
  //  })

  //  constructor(){
  //   const obsr = this.observable$.subscribe((data)=>{
  //     console.log(data);
  //   })

  //   setTimeout(()=>{
  //     obsr.unsubscribe();
  //     console.log("unsubscribed after 5 sec")
  //   }, 5000);
  //  }
}
