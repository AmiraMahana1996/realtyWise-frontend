import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArgicultureRoutingModule } from './argiculture-routing.module';
import { FarmComponent } from './farm/farm.component';
import { OrchardsComponent } from './orchards/orchards.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    FarmComponent,
    OrchardsComponent
  ],
  imports: [
    CommonModule,
    ArgicultureRoutingModule,
    SwiperModule,
    NgbNavModule,
    NgbPaginationModule,
  ]
})
export class ArgicultureModule { }
