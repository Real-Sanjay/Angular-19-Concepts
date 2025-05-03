import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dynamic-routes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dynamic-routes.component.html',
  styleUrl: './dynamic-routes.component.css'
})
export class DynamicRoutesComponent {

  employees = [
    { empId: '101', empName: 'EmpA', empDept: 'General Mgmt Dept' },
    { empId: '102', empName: 'EmpB', empDept: 'Marketing Dept' },
    { empId: '103', empName: 'EmpC', empDept: 'HR Dept' },
    { empId: '104', empName: 'EmpD', empDept: 'Sales Dept' },
  ];

}
