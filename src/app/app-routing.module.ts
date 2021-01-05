import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './page/welcome/welcome.component';
import { DashComponent } from './page/dash/dash.component';
import { HomeComponent } from './page/dash/home/home.component';
import { ContactListComponent } from './page/dash/contact-list/contact-list.component';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeComponent, canActivateChild: [AuthGuard] },
      { path: 'contacts', component: ContactListComponent, canActivateChild: [AuthGuard] },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ],
  },
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
