import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-routerservice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-routerservice.component.html',
  styleUrl: './navigation-routerservice.component.css'
})
export class NavigationRouterserviceComponent {
  id: string = '';
  name: string = '';
  employees = [
    { id: 1, name: 'UserA' },
    { id: 2, name: 'UserB' },
    { id: 3, name: 'UserC' },
    { id: 4, name: 'UserD' },
    { id: 5, name: 'UserE' },
  ];
  constructor(private router: Router) {}

  navigateToDetail(empId: number, empName: string) {
    this.router.navigate(['/employee-detail'], {
      queryParams: { id: empId, name: empName },
    });
  }



}
