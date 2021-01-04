import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardData: Array<any>;

  constructor() {
    this.cardData = [];
  }

  ngOnInit(): void {
    this.cardData = [
      {
        title: '6',
        subTitle: 'Total contactos'
      },
      {
        title: '2',
        subTitle: 'Happy Birthday today'
      }
    ];
  }

}
