import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ErrorStateMatcher, MatNativeDateModule, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './page/home/components/card/card.component';
import { ContactListComponent } from './page/contact-list/contact-list.component';
import { ContactComponent } from './page/contact-list/components/contact/contact.component';
import { ModalComponent } from './page/contact-list/components/modal/modal.component';
import { ModalDeleteComponent } from './page/contact-list/components/modal-delete/modal-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { WelcomeComponent } from './page/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardComponent,
    ContactListComponent,
    ContactComponent,
    ModalComponent,
    ModalDeleteComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
