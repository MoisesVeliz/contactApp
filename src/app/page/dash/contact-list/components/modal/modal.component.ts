import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../../model/contact.model';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() contact: Contact;

  @Output() saveData = new EventEmitter<Contact>();
  @Output() closeModal = new EventEmitter();

  public formGroup!: FormGroup;
  public isEdit: boolean;

  constructor( private formBuilder: FormBuilder ) {
    this.contact = {
      dni: '',
      name: '',
      cellphone: '',
      address: '',
      birthday: '',
      id: '',
    };
    this.isEdit = false;
  }

  ngOnInit(): void {
    console.log(this.contact);
    this.buildForm();
    this.isEdit = this.contact.id.length > 0;
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      dni: [ this.contact.dni, Validators.required ],
      name: [ this.contact.name, Validators.required ],
      cellphone: [ this.contact.cellphone, Validators.required ],
      address: [ this.contact.address, Validators.required ],
      birthday: [ this.contact.birthday, Validators.required ],
      id: [ this.contact.id ]
    });
  }

  save(): void{
    if ( this.formGroup.invalid){
      Object.values( this.formGroup.controls ).forEach( control => {
        control.markAsTouched();
      });
    }else{
      if ( !this.isEdit ) {
        this.formGroup.get('id')?.setValue(uuidv4());
      }
      this.saveData.emit(this.formGroup.value);
    }
  }

  close(): void{
    this.closeModal.emit();
  }

}
