import { Injectable } from '@angular/core';
import { Contact } from '../../page/contact-list/model/contact.model';
import * as moment from 'moment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class BirthdayService {

  today = moment().format('DD-MM');
  birthdayCount: any;

  constructor( private ls: LocalStorageService) {
    this.birthdayCount = [];
  }

  getBirthdayCount(): Contact[]{
    const contacts: Contact[] | null = this.ls.getContacts();


    this.birthdayCount = contacts?.filter((element): any => moment(element.birthday).format('DD-MM') === this.today);

    return this.birthdayCount ? this.birthdayCount : [];

  }

  isBirthday(contact: Contact): boolean{
    if ( moment(contact.birthday).format('DD-MM') === this.today ){
      return true;
    }
    return false;
  }
}
