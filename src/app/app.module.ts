import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { StepsModule } from 'primeng/steps';
import { MessageService } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
  declarations: [
    AppComponent,
    Com1Component,
    Com2Component,
    Com3Component,
    Com4Component,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepsModule,
    RouterModule,
    ToastModule,
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
