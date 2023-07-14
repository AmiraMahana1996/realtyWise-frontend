import { Component, OnInit, ViewChild } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
// Swiper Slider
import { SwiperComponent, SwiperDirective } from "ngx-swiper-wrapper";

import { PropertyService } from "src/app/core/services/property.service";
import { DomSanitizer } from "@angular/platform-browser";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-residential-details",
  templateUrl: "./residential-details.component.html",
  styleUrls: ["./residential-details.component.scss"],
})
export class ResidentialDetailsComponent implements OnInit {
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
  isDisabled!: boolean;
  isHow: boolean = true;
  countOfConnection!: number;
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


    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    this.sub = this.route.params.subscribe((params) => {
      this.id = +params["id"]; // (+) converts string 'id' to a number
      let proId = this.route.snapshot.params;

      this.propertyService.getById(proId["id"]).subscribe((data: any) => {
        this.productDetails = data;

        this.propertyService
          .getConnectByUserId(user.id)
          .subscribe((data: any) => {
            this.propertyService.getAllConnections().subscribe((data: any) => {
              this.countOfConnection = data.connections.length;
       
            });
            let filterdData = data.filter((currentValue: any) => {
              return this.productDetails?._id?.$oid == currentValue.property;
            });


            if (this.productDetails.user.$oid == user.id) {
              this.isHow = false;
            }
            if (this.productDetails._id.$oid == filterdData[0]?.property) {
              this.isDisabled = true;
            }
          });
      });

      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnInit(): void {
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
  connect() {
    if (this.countOfConnection >= 5) {
      Swal.fire({
        title: "Oops...",
        text: "You Should Buy New Connections!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(3, 142, 220)",
        cancelButtonColor: "rgb(243, 78, 78)",
        confirmButtonText: "Buy New One!",
      });
    } else {
      let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

      let connect = {
        user_id: user.id,
        owner: this.productDetails?.user?.$oid,
        property: this.productDetails._id.$oid,
        propertyType: this.productDetails.propertyType,
        propertySize: this.productDetails.propertySize,
        acccepted: false,
        propertyPrice: this.productDetails.price,
      };

      this.propertyService.createConnect(connect).subscribe((data) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Connection sent successfully!",
        });
        this.isDisabled = true;
      });
    }
  }

  /**
   * Swiper card next set
   */
  nextSlideComp() {
    this.componentRef!.directiveRef!.nextSlide();
  }
}
