import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgbToastModule } from "@ng-bootstrap/ng-bootstrap";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { SigninModule } from "./auth/signin/signin.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbToastModule,
    AccountRoutingModule,
    SigninModule,
  ],
})
export class AccountModule {}
