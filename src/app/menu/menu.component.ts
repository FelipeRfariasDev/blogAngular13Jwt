import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AuthService } from '../authentication/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  modalRef: BsModalRef | undefined;

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private authService: AuthService) {
  }

  ngOnInit(): void {}  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  isLogged(){
    return this.authService.isLoggedIn();
  }

  confirm(): void {
    this.authService.logout().subscribe((response:any)=>{
      this.authService.setAccessToken('');
      this.router.navigateByUrl('/');
    });
    this.modalRef?.hide();
  }
 
  decline(): void {
    this.modalRef?.hide();
  }
}
