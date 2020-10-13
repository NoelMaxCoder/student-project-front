import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    name: new FormControl(),
    firstName: new FormControl(),
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  addUser() {
    if(this.registerForm.valid){
      this.registerService.createUser(this.registerForm.value).subscribe(data => {
        console.log(data)
      })
      alert('Registration Completed successfully !');
    } 
  }

}
