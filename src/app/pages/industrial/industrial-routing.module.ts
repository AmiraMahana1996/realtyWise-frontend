import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryComponent } from './factory/factory.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: "factory", component: FactoryComponent },
  { path: "store", component: StoreComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustrialRoutingModule { }
