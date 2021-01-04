import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactListComponent } from './page/contact-list/contact-list.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contacts', component: ContactListComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
