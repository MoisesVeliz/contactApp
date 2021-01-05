import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { BirthdayService } from '../../../shared/services/birthday.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardData: Array<any>;
  contacts: number | undefined;
  birthdayCount: number | undefined;

  constructor(private ls: LocalStorageService, private birthday: BirthdayService) {
    this.cardData = [];
    this.contacts = 0;
  }

  ngOnInit(): void {
    this.getContacts();
    this.getBirthday();
    this.cardData = [
      {
        title: this.contacts,
        subTitle: 'Total contactos'
      },
      {
        title: this.birthdayCount,
        subTitle: 'Happy Birthday today'
      }
    ];
  }

  getContacts(): void{
    this.contacts = this.ls.getContacts()?.length;
  }

  getBirthday(): void{
    const c: any = this.birthday.getBirthdayCount();
    this.birthdayCount =  c.length;
    console.log(this.birthdayCount);
  }

}
