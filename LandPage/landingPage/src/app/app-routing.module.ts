import { ShowroomComponent } from './showroom/showroom.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';

import { ContentMainPageComponent } from './content-main-page/content-main-page.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContatsPageComponent } from './contats-page/contats-page.component';
import { DuvidasPageComponent } from './duvidas-page/duvidas-page.component';


const routes: Routes = [
  {
    path: "",
    component: ContentMainPageComponent
  },
  {
    path: "contats",
    component: ContatsPageComponent
  },
  {
    path: "duvidas",
    component: DuvidasPageComponent
  },
  {
    path: "saibaMais",
    component: SaibaMaisComponent
  },
  {
    path: "showroom",
    component: ShowroomComponent
  },
  {
    path: "**",
    redirectTo: ""
  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
