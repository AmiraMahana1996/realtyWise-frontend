import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Bootstrap
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbProgressbarModule,
  NgbNavModule,
  NgbCollapseModule,
} from "@ng-bootstrap/ng-bootstrap";

// Ngx Sliders
import { NgxSliderModule } from "@angular-slider/ngx-slider";

// Drop Zone
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";

// Simplebar
import { SimplebarAngularModule } from "simplebar-angular";

// Component pages
import { NftMarketplaceRoutingModule } from "./nft-marketplace-routing.module";
import { SharedModule } from "../../shared/shared.module";

import { MarketplaceComponent } from "./marketplace/marketplace.component";

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
  acceptedFiles: "image/*",
};

@NgModule({
  declarations: [MarketplaceComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NftMarketplaceRoutingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbProgressbarModule,
    NgbNavModule,
    NgbCollapseModule,
    SharedModule,
    NgxSliderModule,
    DropzoneModule,
    SimplebarAngularModule,
  ],
})
export class NftMarketplaceModule {}
