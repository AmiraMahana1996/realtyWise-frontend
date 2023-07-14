import { Component, OnInit, ViewChild } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

// Swiper Slider
import { SwiperComponent, SwiperDirective } from "ngx-swiper-wrapper";

import { PropertyService } from "src/app/core/services/property.service";
import { DomSanitizer } from "@angular/platform-browser";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-received-connections-details",
  templateUrl: "./received-connections-details.component.html",
  styleUrls: ["./received-connections-details.component.scss"],
})
export class ReceivedConnectionsDetailsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  public productDetail!: [];
  myForm: FormGroup | any;
  defaultSelect = 2;
  readonly = false;
  products: any;
  productDetails: any;
  id: any;
  sub: any;
  isDisabled: boolean = false;
  isHow: boolean = true;
  countOfConnection!: number;
  userDetails: any;
  propertyDetails: any;
  connectDetails: any;

  @ViewChild(SwiperDirective) directiveRef?: SwiperDirective;
  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;

  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public propertyService: PropertyService,
    private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder
  ) {
    this.products = this.route.snapshot.params;

  }

  ngOnInit(): void {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      let proId = this.route.snapshot.params;

      this.propertyService
        .getConnectionsById(proId["id"])
        .subscribe((data: any) => {
          this.connectDetails = data;
          if (this.connectDetails.acccepted === "True") {
            this.isDisabled = true;
          }

          this.propertyService
            .getById(this.connectDetails.property)
            .subscribe((data: any) => {
              this.productDetails = data;

            });
        });

      // In a real app: dispatch action to load the details here.
    });
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: "Ecommerce" },
      { label: "Product Details", active: true },
    ];
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  /**
   * Swiper setting
   */
  config = {
    initialSlide: 0,
    slidesPerView: 1,
  };

  /**
   * Swiper card previous set
   */
  previousSlideComp() {
    this.componentRef!.directiveRef!.prevSlide();
  }

  /**
   * Swiper card next set
   */
  nextSlideComp() {
    this.componentRef!.directiveRef!.nextSlide();
  }

  acceptConnection() {
    this.propertyService
      .doAccept(this.connectDetails._id.$oid)
      .subscribe((data: any) => {

      });
  }
}
