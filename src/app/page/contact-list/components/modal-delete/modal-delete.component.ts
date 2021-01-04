import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent implements OnInit {

  @Output() $aceptar = new EventEmitter();
  @Output() $close = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  aceptar(): void {
    this.$aceptar.emit();
  }

  close(): void{
    this.$close.emit();
  }

}
