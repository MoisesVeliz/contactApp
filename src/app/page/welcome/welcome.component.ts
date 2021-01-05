import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isLogin: boolean;

  constructor( private formBuilder: FormBuilder, private auth: AuthService ) {
    this.isLogin = false;
  }

  public formGroup!: FormGroup;

  public ngOnInit(): void {
    this.getSesion();
    this.buildForm();
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  getSesion(): void{
     if ( this.auth.getSesion().status === 'error' ) { return; }

     this.isLogin = true;
  }

  onSubmit(): void{

    if ( !this.formGroup.valid ) { return; }

    const resp = this.auth.registerUser(this.formGroup.value);

    if (resp.status === 'error') { return; }

    this.isLogin = true;

  }

}
