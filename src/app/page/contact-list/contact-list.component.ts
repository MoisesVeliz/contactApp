import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/page/contact-list/model/contact.model';
import { v4 as uuidv4 } from 'uuid';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  closeResult = '';

  constructor(private modalService: NgbModal) {
    this.contacts = [];
  }

  ngOnInit(): void {
    this.contacts = [
      {
        thumb: '',
        contactName: 'Moises Veliz',
        birdthday: new Date(1995, 6, 16),
        cellphone: '4248872324',
        codeArea: '+58',
        id: uuidv4()
      },
      {
        thumb: '',
        contactName: 'Lisa Stapleton',
        birdthday: new Date(1995, 6, 16),
        cellphone: '4248872324',
        codeArea: '+58',
        id: uuidv4()
      },
    ];
  }

  open(content: any, e?: any): void {
    console.log(e);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
