import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { RootComponent } from './root/root.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ParamComponent } from './shared/components/param/param.component';

import { CheckGuard } from './service/check.guard';
import { AuthService } from './service/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
    
  ],
  providers: [CheckGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
