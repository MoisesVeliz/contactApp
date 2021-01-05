import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/services/auth.guard';

import { HomeComponent } from './page/home/home.component';
import { ContactListComponent } from './page/contact-list/contact-list.component';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { DashComponent } from './shared/components/dash/dash.component';

const routes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [ AuthGuard ],
    children: [
      {path: '', component: HomeComponent, canActivateChild: [AuthGuard]},
      {path: 'contacts', component: ContactListComponent, canActivateChild: [AuthGuard]},
      {path: '**', pathMatch: 'full', redirectTo: ''}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
