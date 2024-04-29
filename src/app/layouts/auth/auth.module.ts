import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      {
        path: 'sign-in',
        loadChildren: () =>
          import('src/app/pages/login/login.module').then(m => m.LoginModule),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('src/app/pages/register/register.module').then(m => m.RegisterModule),
      },
      // your others modules here
    ]
  }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
