import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  isLoggedIn : boolean;
  navigationSubscription: any;

  constructor(private session: SessionService, private authService: AuthService, private router: Router) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit(): void {
    this.isLoggedIn = this.session.isLogged;
  }

  initialiseInvites() {
    this.isLoggedIn = this.session.isLogged; 
  }

  onLogout() {
    this.authService.logout();
    this.session.removeTokenFromStorage();
    alert('User has been logged out succesfully !');
    this.router.navigate(['/user-login']);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {  
       this.navigationSubscription.unsubscribe();
    }
  }
}
