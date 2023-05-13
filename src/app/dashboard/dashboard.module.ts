import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../core/core.module';
import { NebularModule } from '../nebular.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    NebularModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
