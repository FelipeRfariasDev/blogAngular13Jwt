import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/list-posts');
    }
  }

  login(){
    this.authService.login(this.form.value).subscribe((response:any)=>{
      this.authService.setAccessToken(response.accessToken);
      this.router.navigateByUrl('/list-posts');
    })
  }
}
