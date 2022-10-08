import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandpageComponent } from './mainPage/landpage.component';
import { AppRoutingModule } from './app-routing.module';
import { ContatsPageComponent } from './contats-page/contats-page.component';
import { ContentMainPageComponent } from './content-main-page/content-main-page.component';
import { DuvidasPageComponent } from './duvidas-page/duvidas-page.component';
import { SaibaMaisComponent } from './saiba-mais/saiba-mais.component';
import { ShowroomComponent } from './showroom/showroom.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    ContatsPageComponent,
    ContentMainPageComponent,
    DuvidasPageComponent,
    SaibaMaisComponent,
    ShowroomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
