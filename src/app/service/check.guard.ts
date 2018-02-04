import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { CanActivateChild, CanDeactivate  } from '@angular/router/src/interfaces';
import { RootComponent } from '../root/root.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Injectable()
export class CheckGuard implements CanActivate , CanActivateChild , CanDeactivate<RootComponent> {
  
  constructor(private authService: AuthService) {}
  // canActivate():boolean {
  //   console.warn('You have been watching by Authorized guards');
  //   return confirm('Are you want to view the comments..');
  // }

  canActivate(): boolean {
    console.warn('Auth Service need to set COOKIE VALUE: uuid');
    return this.authService.isLoggedIn();
  }
 
  canActivateChild(): boolean {
    console.warn('Auth Service child route');
    return confirm('Are you want to view the LIKE or COMMNETS');
  }
  canDeactivate(template: DashboardComponent): boolean{
    console.warn('canDeactive route');
    return confirm('Are you sure you want navigate to Root page?');;
  }
 
 

}
