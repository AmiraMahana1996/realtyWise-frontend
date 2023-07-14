import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FarmComponent } from "./farm/farm.component";
import { OrchardsComponent } from "./orchards/orchards.component";

const routes: Routes = [
  { path: "farm", component: FarmComponent },
  { path: "orchads", component: OrchardsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArgicultureRoutingModule {}
