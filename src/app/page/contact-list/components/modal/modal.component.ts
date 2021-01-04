import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() saveData = new EventEmitter();
  @Output() closeModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(): void{
    this.saveData.emit();
  }

  close(): void{
    this.closeModal.emit();
  }

}
