import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  standalone: true,
  imports: [],
  templateUrl: './navigation-detail.component.html',
  styleUrl: './navigation-detail.component.css'
})
export class NavigationDetailComponent implements OnInit{

  id!: number;
  name!: string;

  constructor(private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
      console.log("params", params);
    })
  }

  backToEmployee(){
this.router.navigate(['/navigation-route'])
  }
}
