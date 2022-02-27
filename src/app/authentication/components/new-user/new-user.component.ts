import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent implements OnInit {

  form = new FormGroup({
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  });

  constructor(private authService: AuthService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.authService.newUser(this.form.value).subscribe((response:any)=>{
      if(response.success){
        this.router.navigateByUrl('/');
        this.toastr.success(response.message,"Sucesso");
        return;
      }
      this.toastr.error(response.message,"Erro");
    });
  }
}
