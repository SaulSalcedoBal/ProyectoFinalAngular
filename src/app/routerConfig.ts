// routerConfig.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { ExpedienteComponent } from './components/expediente/expediente.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { ServiceComponent } from './components/service/service.component';


const appRoutes: Routes = [
  { path: 'home', 
    component: HomeComponent 
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'expediente',
    component: ExpedienteComponent
  },
  {
    path: 'hospital',
    component: HospitalComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  }
];
export default appRoutes;