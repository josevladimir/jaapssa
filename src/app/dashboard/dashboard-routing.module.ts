import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'ventas', loadChildren: () => import('./ventas/ventas.module').then(m => m.VentasModule) },
      { path: 'clientes', loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule) }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
