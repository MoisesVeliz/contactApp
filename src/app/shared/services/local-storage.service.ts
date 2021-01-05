import { Injectable } from '@angular/core';
import { Contact } from 'src/app/page/dash/contact-list/model/contact.model';
import { Control } from '../../page/dash/contact-list/model/controls.modal';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  contacts: Contact[];
  qContacts: string;
  cs: any;
  idx: any;
  toEdit: Contact | undefined;

  constructor() {
    this.contacts = [];
    this.qContacts = 'contacts';
    this.cs = '';
    this.idx = 0;
  }

  saveContact(contact: Contact): any{

    let contacts: Contact[] | null = this.getContacts();

    if (contacts === null){
      // Generamos un nuevo lote de contactos.
      contacts = [{...contact}];
    }else{
      // Añadimos contacto al lote excistente.
      contacts.push(contact);
    }

    localStorage.setItem(this.qContacts, JSON.stringify(contacts));

  }

  getContacts(): Contact[] | null{
    this.cs = localStorage.getItem(this.qContacts);
    const contacts = JSON.parse(this.cs);
    return contacts ? contacts : [];
  }

  getContact(control: Control | undefined): Contact| undefined{
    const contacts: Contact[] | null = this.getContacts();
    return contacts?.find( element => element.id === control?.id);
  }

  editContact(edited: Contact): void{
    const contacts: Contact[] | null = this.getContacts();
    this.idx = contacts?.findIndex(element => element.id === edited.id);
    if ( this.idx !== -1 ){
      contacts?.splice( this.idx, 1, edited);
      localStorage.setItem(this.qContacts, JSON.stringify(contacts));
      console.log('editado con exito');
    }
  }

  deleteContact(id: string): void{

    const contacts: Contact[] | null = this.getContacts();
    this.idx = contacts?.findIndex(element => element.id === id);

    if ( this.idx !== -1 ){
      contacts?.splice(this.idx, 1);
      localStorage.setItem(this.qContacts, JSON.stringify(contacts));
    }
  }

}
