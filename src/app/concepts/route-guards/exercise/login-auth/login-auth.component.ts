import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-auth.component.html',
  styleUrl: './login-auth.component.css'
})
export class LoginAuthComponent {
email: string = '';
password: string = '';
authservice = inject(AuthService);
route = inject(Router);

login(){

const isLoggedIn =this.authservice.login(this.email, this.password);
if(isLoggedIn){
  this.route.navigate(['/admin-page']);
  console.log('user loged in successfully');
}
else{
  this.route.navigate(['/login']);
}
}
}
