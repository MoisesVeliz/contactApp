import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  constructor( private modalService: NgbModal, private router: Router, private auth: AuthService ) { }

  ngOnInit(): void {
  }

  open(content: any): void {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Cancel modal
    }, (reason) => {
      // Dissmis modal
      console.log(reason);
      if (reason){
        this.auth.clearStore();
        this.router.navigateByUrl('/home');
      }
    });
  }

}
