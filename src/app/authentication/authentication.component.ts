import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/security/authentication.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  checkbox: boolean = false
  loginForm:FormGroup;
  constructor(private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
  });
  }
  submit(){
    if(this.loginForm.valid){
      this.authService.verifyUserCredentials(
        this.loginForm.get('username').value,
        this.loginForm.get('password').value
      ).subscribe((response : Response)=>{
        let token = JSON.parse(JSON.stringify(response))
        localStorage.setItem("token",token.hash);
        localStorage.setItem("user",JSON.stringify(token.user))
        this.authService.currentUserValue = JSON.parse(JSON.stringify(token.user));
        this.authService.currentUserValue.token = token.hash;
        this.router.navigateByUrl("/");
      },error=>{
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            alert('invalid credentials')
          }
        }
        console.log(error)})
    }
  }
}
