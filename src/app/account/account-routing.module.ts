import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Component Pages

const routes: Routes = [
  {
    path: "signin",
    loadChildren: () =>
      import("./auth/signin/signin.module").then((m) => m.SigninModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./auth/signup/signup.module").then((m) => m.SignupModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
