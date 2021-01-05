import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  @Output() $aceptar = new EventEmitter();
  @Output() $close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(): void{
    this.$close.emit();
  }

  aceptar(): void{
    this.$aceptar.emit(true);
  }

}
