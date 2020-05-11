import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private route: Router, private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  get formControls() {
    return this.loginForm.controls;
  }


  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.loginForm.value);
    this.route.navigateByUrl('/admin');

  }

  

}
