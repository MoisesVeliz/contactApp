import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/page/contact-list/model/contact.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { Control } from './model/controls.modal';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[];
  contactToEdit: Contact;

  constructor(private modalService: NgbModal, private ls: LocalStorageService) {
    this.contacts = [];
    this.contactToEdit = {
      dni: '',
      name: '',
      cellphone: '',
      address: '',
      birthday: '',
      id: ''
    };
  }

  ngOnInit(): void {
    this.getContacts();
  }

  saveContact(contact: Contact): void{
    this.ls.saveContact(contact);
    this.getContacts();
    this.clearForm();
  }

  deleteContact(contact: Control): void{
    this.ls.deleteContact(contact.id);
    this.getContacts();
    this.clearForm();
  }

  editContact(contact: Contact): void {
    this.ls.editContact(contact);
    this.getContacts();
    this.clearForm();
  }
  getContacts(): void{
    const contacts = this.ls.getContacts();
    if (contacts === null) {
      return;
    }
    this.contacts = contacts;
  }

  open(content: any, contact?: Control): void {

    console.log(contact);
    if ( typeof contact === 'object' ){
      const c: any = this.ls.getContact(contact);
      this.contactToEdit = c;
    }

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // Cancel modal
      this.clearForm();
      console.log(result);
    }, (reason) => {
      // dismiss modal
      console.log(reason);
      console.log(contact);
      if (contact?.isDelete){
        this.deleteContact(contact);
        return;
      }
      if (contact?.isEdit){
        this.editContact(reason);
        return;
      }
      if (typeof reason === 'object'){
        this.saveContact(reason);
      }
    });
  }

  clearForm(): void{
    this.contactToEdit = {
      dni: '',
      name: '',
      cellphone: '',
      address: '',
      birthday: '',
      id: ''
    };
  }

}
