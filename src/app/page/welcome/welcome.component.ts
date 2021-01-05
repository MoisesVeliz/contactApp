import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  isLogin: boolean;
  toggle: boolean;

  constructor( private formBuilder: FormBuilder, private auth: AuthService, private router: Router ) {
    this.isLogin = false;
    this.toggle = false;
  }

  public formGroup!: FormGroup;

  public ngOnInit(): void {
    this.getSesion();
    this.buildForm();
    this.goAnimation();
  }

  private buildForm(): void{
    this.formGroup = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  getSesion(): void{
     if ( this.auth.getSesion().status === 'error' ) { return; }
     this.router.navigateByUrl('/dash');
  }

  onSubmit(): void{

    if ( !this.formGroup.valid ) { return; }

    const resp = this.auth.registerUser(this.formGroup.value);

    if (resp.status === 'error') { return; }

    this.isLogin = true;
    this.router.navigateByUrl('/dash');
  }

  goAnimation(): void{
    setInterval( () => {
      this.toggle = !this.toggle;
    }, 2000);
  }

}
