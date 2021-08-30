import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceComponent } from './components/service/service.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { AgmCoreModule } from '@agm/core';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ServiceComponent,
    HospitalComponent,
    ConsultaComponent,
    ExpedienteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({

      apiKey: 'AIzaSyDgMsGYH6WN_I4LNIBKWKIH5-50AnSinv8',

      libraries: ['places']

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }