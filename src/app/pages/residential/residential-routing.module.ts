import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentComponent } from "./apartment/apartment.component";
import { ResidentialDetailsComponent } from "./residential-details/residential-details.component";
import { VillasComponent } from "./villas/villas.component";
import { PropertiesComponent } from "./properties/properties.component";
import { CastleComponent } from "./castle/castle.component";
import { ChaletsComponent } from "./chalets/chalets.component";
import { ConnectionsComponent } from "./connections/connections.component";
import { ConnectionDetailsComponent } from "./connection-details/connection-details.component";
import { AcceptedConnectionComponent } from "./accepted-connection/accepted-connection.component";
import { ReceivedConnectionsComponent } from "./received-connections/received-connections.component";
import { ReceivedConnectionsDetailsComponent } from "./received-connections-details/received-connections-details.component";

const routes: Routes = [
  { path: "apartment", component: ApartmentComponent },
  { path: "details/:id", component: ResidentialDetailsComponent },
  { path: "villa", component: VillasComponent },
  { path: "castle", component: CastleComponent },
  { path: "chalets", component: ChaletsComponent },
  { path: "profile", component: ChaletsComponent },

  { path: "list-properties", component: PropertiesComponent },
  { path: "connections", component: ConnectionsComponent },
  { path: "accepted-connection", component: AcceptedConnectionComponent },
  { path: "received-connection", component: ReceivedConnectionsComponent },
  {
    path: "received-connection-details/:id",
    component: ReceivedConnectionsDetailsComponent,
  },

  { path: "connection-details/:id", component: ConnectionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidentialRoutingModule {}
