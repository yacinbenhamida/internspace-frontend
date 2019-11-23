import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  checkbox: boolean = false
  loginForm:FormGroup;
  constructor(private authService:AuthenticationService,
    private formBuilder:FormBuilder) { }

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
        console.log("connected user : "+token.user);
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
