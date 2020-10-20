import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fg: FormGroup;

  constructor(
    private authService: AuthService,
    private session: SessionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fg = new FormGroup({
      'username': new FormControl(null, Validators.compose([
        Validators.required
      ])),
      'password': new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    })
  }

  login() {
    if(this.fg.invalid) return;
    this.authService.login(this.fg.value)
      .subscribe(
        data => {
          this.session.addTokenInStorage(data);
          alert('User has been logged in successfully !');
          this.router.navigateByUrl('**');
        },
        error => {
          console.log(error);
          alert('Wrong email or password, please try again.');
        }
      );
  }
}
