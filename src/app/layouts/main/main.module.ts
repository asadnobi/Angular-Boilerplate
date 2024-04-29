import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // your child module here
]

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class MainModule { }
