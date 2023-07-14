import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandComponent } from "./land/land.component";

const routes: Routes = [{ path: "empty-land", component: LandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandRoutingModule {}
