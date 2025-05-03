import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-query-param-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './query-param-nav.component.html',
  styleUrl: './query-param-nav.component.css'
})
export class QueryParamNavComponent {

}
