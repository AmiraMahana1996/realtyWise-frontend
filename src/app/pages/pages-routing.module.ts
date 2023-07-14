import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./nft-marketplace/nft-marketplace.module").then(
        (m) => m.NftMarketplaceModule
      ),
  },
  {
    path: "residential",
    loadChildren: () =>
      import("./residential/residential.module").then(
        (m) => m.ResidentialModule
      ),
  },
  {
    path: "industrial",
    loadChildren: () =>
      import("./industrial/industrial.module").then((m) => m.IndustrialModule),
  },
  {
    path: "commercial",
    loadChildren: () =>
      import("./commercial/commercial.module").then((m) => m.CommercialModule),
  },
  {
    path: "argiculture",
    loadChildren: () =>
      import("./argiculture/argiculture.module").then(
        (m) => m.ArgicultureModule
      ),
  },
  {
    path: "land",
    loadChildren: () => import("./land/land.module").then((m) => m.LandModule),
  },
  {
    path: "marletplace",
    loadChildren: () =>
      import("./nft-marketplace/nft-marketplace.module").then(
        (m) => m.NftMarketplaceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
