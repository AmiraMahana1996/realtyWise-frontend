import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentialRoutingModule } from './residential-routing.module';
import { ApartmentComponent } from './apartment/apartment.component';
import { VillasComponent } from './villas/villas.component';
import { CastleComponent } from './castle/castle.component';
import { ChaletsComponent } from './chalets/chalets.component';
import { FormsModule } from '@angular/forms';
import { NgbNavModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { ResidentialDetailsComponent } from './residential-details/residential-details.component';
// Swiper Slider
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { PropertiesComponent } from './properties/properties.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionDetailsComponent } from './connection-details/connection-details.component';
import { AcceptedConnectionComponent } from './accepted-connection/accepted-connection.component';
import { ReceivedConnectionsComponent } from './received-connections/received-connections.component';
import { ReceivedConnectionsDetailsComponent } from './received-connections-details/received-connections-details.component';
const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
@NgModule({
  declarations: [
    ApartmentComponent,
    VillasComponent,
    CastleComponent,
    ChaletsComponent,
    ResidentialDetailsComponent,
    PropertiesComponent,
    ConnectionsComponent,
    ConnectionDetailsComponent,
    AcceptedConnectionComponent,
    ReceivedConnectionsComponent,
    ReceivedConnectionsDetailsComponent
  ],
  imports: [
    CommonModule,
    ResidentialRoutingModule,
    FormsModule,
    NgbPaginationModule,
    NgbNavModule,
    ReactiveFormsModule,
    SwiperModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
  
})

export class ResidentialModule { }
