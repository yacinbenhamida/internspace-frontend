import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/security/authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Student from '../models/Student';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted : boolean = false
  checkbox: boolean = false
  loginForm:FormGroup;
  constructor(private authService:AuthenticationService,
    private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      email : ['',Validators.email],
      firstName : ['',Validators.required],
      lastName : ['',Validators.required],
      confirmPassword : ['',Validators.required],
      cin : ['',Validators.minLength(8)],
      birthDate : ['',Validators.required]
  });
  }
  submit(){
    if(this.loginForm.valid){
      let student:Student = {
        cin : this.loginForm.get('cin').value,
        password: this.loginForm.get('password').value,
        email : this.loginForm.get('email').value,
        firstName : this.loginForm.get('firstName').value,
        lastName : this.loginForm.get('lastName').value,
        username : this.loginForm.get('username').value,
        hasSubmittedAReport : false,
        birthDate : this.loginForm.get('birthDate').value,
        isAutorised : false,
        isDisabled : false,
        passGenerated : null,
        userType : "student",
        isCreated : true,
        isSaved : false,
        studyClass : null
      }
      this.authService.signUpStudent(
        student
      ).subscribe((response : Response)=>{
        this.submitted = true
      },error=>{
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            alert('invalid credentials')
          }
          if (error.status === 403) {
            alert('error in form')
          }
        }
        })
    }
  }

}
