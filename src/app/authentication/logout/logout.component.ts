import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout().subscribe((response:any)=>{
      localStorage.setItem('accessToken','');
      this.router.navigate(['/']);
      this.toastr.success("Successfully logged out","Sucesso");
    }, error => {
      localStorage.setItem('accessToken','');
      this.router.navigate(['/']);
      this.toastr.success("Successfully logged out","Sucesso");
    });
  }
}
