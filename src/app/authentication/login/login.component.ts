import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private authService:AuthService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/list-posts');
    }
  }

  login(){
    this.authService.login(this.form.value).subscribe((response:any)=>{
      this.authService.setAccessToken(response.accessToken);
      this.authService.setExpiration(new Date(response.dataTimeFinal));
      this.router.navigateByUrl('/list-posts');
    }, error => {
      if(error.error.success==false || error.error.status==401){
        this.toastr.error(error.error.message,"Erro");
      }
    });
  }
}
