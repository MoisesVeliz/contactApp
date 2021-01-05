import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() openModal = new EventEmitter();

  userName: string;

  constructor( private auth: AuthService, private router: Router) {
    this.userName = 'Nombre del usuario';
  }

  ngOnInit(): void {
    this.userName = this.auth.getSesion().userName ? this.auth.getSesion().userName : this.userName;
  }

  salir(): void{
    this.openModal.emit();
  }

}
