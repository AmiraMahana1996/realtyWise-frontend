import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Component } from "@fullcalendar/angular";
import { AdministrativeComponent } from "./administrative/administrative.component";
import { ShoppingCenterComponent } from "./shopping-center/shopping-center.component";

const routes: Routes = [
  { path: "administrative", component: AdministrativeComponent },
  { path: "shopping-center", component: ShoppingCenterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommercialRoutingModule {}
