import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialRoutingModule } from './commercial-routing.module';
import { AdministrativeComponent } from './administrative/administrative.component';
import { ShoppingCenterComponent } from './shopping-center/shopping-center.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AdministrativeComponent,
    ShoppingCenterComponent
  ],
  imports: [
    CommonModule,
    CommercialRoutingModule,
    SwiperModule,
    NgbNavModule,
    NgbPaginationModule,
  ]
})
export class CommercialModule { }
