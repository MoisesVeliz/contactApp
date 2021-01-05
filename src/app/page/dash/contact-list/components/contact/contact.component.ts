import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/page/dash/contact-list/model/contact.model';
import { Control } from '../../../contact-list/model/controls.modal';
import { LocalStorageService } from '../../../../../shared/services/local-storage.service';
import { BirthdayService } from '../../../../../shared/services/birthday.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contact: Contact;

  @Output() editContact = new EventEmitter<Control>();
  @Output() deleteContact = new EventEmitter<Control>();

  constructor( private ls: LocalStorageService, private birthday: BirthdayService) {
    this.contact = {
      dni: '',
      name: '',
      cellphone: '',
      address: '',
      birthday: '',
      id: ''
    };
  }

  ngOnInit(): void {
  }

  edit(): void{
    this.editContact.emit({id: this.contact.id, isEdit: true, isDelete: false});
  }

  delete(): void{
    this.deleteContact.emit({id: this.contact.id, isDelete: true, isEdit: false});
  }

  get isBirthday(): boolean {
    return this.birthday.isBirthday(this.contact);
  }

}
