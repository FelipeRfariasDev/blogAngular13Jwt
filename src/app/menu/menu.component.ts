import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../authentication/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

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
