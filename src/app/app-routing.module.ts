import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path:'dashboard',loadChildren:()=>import('./componentes/dashboard/dashboard.module').then(x=>x.DashboardModule)}, // carga perezosa, solo me carga los modulos del dashboard, mas no los de toda la applicacion.
  { path: '**', redirectTo: 'login', pathMatch: 'full' } //para ruta desconocida, te manda al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
