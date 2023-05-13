import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgChartsModule } from 'ng2-charts';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [Dashboard1Component, Dashboard2Component],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgChartsModule,
    NgApexchartsModule,
    NgScrollbarModule,
    DragDropModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class DashboardModule {}
