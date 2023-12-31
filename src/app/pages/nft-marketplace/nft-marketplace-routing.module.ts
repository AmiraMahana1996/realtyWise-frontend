import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MarketplaceComponent } from "./marketplace/marketplace.component";

const routes: Routes = [
  {
    path: "",
    component: MarketplaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NftMarketplaceRoutingModule {}
