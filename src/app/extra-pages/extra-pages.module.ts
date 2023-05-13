import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraPagesRoutingModule } from './extra-pages-routing.module';
import { BlankComponent } from './blank/blank.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    ExtraPagesRoutingModule,
    ComponentsModule,
    SharedModule,
  ],
})
export class ExtraPagesModule {}
