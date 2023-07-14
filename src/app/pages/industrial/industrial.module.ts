import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { IndustrialRoutingModule } from "./industrial-routing.module";
import { FactoryComponent } from "./factory/factory.component";
import { StoreComponent } from "./store/store.component";
import { SwiperModule } from "ngx-swiper-wrapper";
import { NgbNavModule, NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
// Swiper Slider

@NgModule({
  declarations: [FactoryComponent, StoreComponent],
  imports: [
    CommonModule,
    IndustrialRoutingModule,
    SwiperModule,
    NgbNavModule,
    NgbPaginationModule,
  ],
})
export class IndustrialModule {}
