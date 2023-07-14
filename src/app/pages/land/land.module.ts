import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandRoutingModule } from './land-routing.module';
import { LandComponent } from './land/land.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LandComponent
  ],
  imports: [
    CommonModule,
    LandRoutingModule,
    SwiperModule,
    NgbNavModule,
    NgbPaginationModule,
  ]
})
export class LandModule { }
