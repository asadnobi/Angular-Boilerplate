import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('src/app/layouts/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('src/app/layouts/main/main.module').then(m => m.MainModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('src/app/layouts/error/error.module').then(m => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
