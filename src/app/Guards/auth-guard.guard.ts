import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../concepts/route-guards/exercise/login-auth/auth.service';
import { inject } from '@angular/core';


export const authGuardGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
 const router = inject(Router);

if(authService.isLoggedInUser() === true){
  return true;
} else{
  router.navigate(['/login-page']);
  return false;
}
// return true
}
