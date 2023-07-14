import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  marketplaceModel,
  tradingModel,
  recentModel,
  popularModel,
} from "./marketplace.model";
import { marketplaceData, tradingData, recentData, popularData } from "./data";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { PropertyService } from "src/app/core/services/property.service";
import { DomSanitizer } from "@angular/platform-browser";
import Swal from "sweetalert2";
import { SharedService } from "src/app/core/services/shared.service";
@Component({
  selector: "app-marketplace",
  templateUrl: "./marketplace.component.html",
  styleUrls: ["./marketplace.component.scss"],
})

/**
 * Marketplace Component
 */
export class MarketplaceComponent implements OnInit {
  submitted = false;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  myForm: FormGroup | any;
  marketplaceData!: marketplaceModel[];
  tradingData!: tradingModel[];
  recentData!: recentModel[];
  popularData!: popularModel[];
  nearest: any;
  cheapest: any;
  land: any;
  constructor(
    public modalService: NgbModal,
    private formBuilder: FormBuilder,
    public propertyService: PropertyService,
    private sanitizer: DomSanitizer,
    private dataService: SharedService
  ) {}

  ngOnInit(): void {
    this.dataService.data$.subscribe((data) => {
      this.nearest = data;

    });

    this.propertyService
      .getCheapestBasedOnUserAddress()
      .subscribe((data: any) => {

        this.nearest = data.slice(0, 2);

      });

    this.propertyService.getCheapestBasedOnCheapest().subscribe((data: any) => {

      this.cheapest = data.slice(0, 2);

    });

    this.propertyService.getLandMarket().subscribe((data: any) => {

      this.land = data.slice(0, 2);

    });
    this.breadCrumbItems = [
      { label: "NFT Marketplace" },
      { label: "Marketplace", active: true },
    ];
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    this.myForm = this.formBuilder.group({
      fname: this.formBuilder.control(""),
      lname: this.formBuilder.control(""),
      contactNumber: this.formBuilder.control(""),
      phoneNumber: this.formBuilder.control(""),
      emial: this.formBuilder.control(""),
      DOB: this.formBuilder.control(""),
      city: this.formBuilder.control(""),
      zip_code: this.formBuilder.control(""),
      desc: this.formBuilder.control(""),
      propertyType: this.formBuilder.control(""),
      propertySize: this.formBuilder.control(""),
      price: this.formBuilder.control(""),
      propertyAddressLine1: this.formBuilder.control(""),
      propertyAddressLine2: this.formBuilder.control(""),
      propertyAddressLine3: this.formBuilder.control(""),
      images: this.formBuilder.array([]),
      advertising: this.formBuilder.control(""),
      user: this.formBuilder.control(user.id),
      advertisingImageCover: this.formBuilder.control(""),
    });
    /**
     * fetches data
     */
    this._fetchData();
  }

  addProperty(form: FormGroup) {
    this.propertyService.createProperty(form.value).subscribe((data) => {
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
        title: "Your property has beed added!",
      });
    });
  }
  // We will create multiple form controls inside defined form controls photos.
  createItem(data: any): FormGroup {
    return this.formBuilder.group(data);
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  detectFiles(event: any) {
    let files = event.target.files;

    if (files) {
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push(
            this.createItem({
              file,
              url: e.target.result, //Base64 string for preview image
            })
          );
        };
        reader.readAsDataURL(file);
      }
    }
  }

  get images(): FormArray {
    return this.myForm.get("images") as FormArray;
  }
  //Help to get all photos controls as form array.
  get advertisingImageCover(): FormControl {
    return this.myForm.get("advertisingImageCover") as FormControl;
  }
  uploadCoverImage(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      let image = reader.result as string;

      this.advertisingImageCover.patchValue(image);
    };
    // reader.readAsDataURL(file);
  }
  /**
   * Trending All Categories
   */
  private _fetchData() {
    this.marketplaceData = marketplaceData;
    this.tradingData = tradingData;
    this.recentData = recentData;
    this.popularData = popularData;
  }

  /**
   * Active Toggle navbar
   */
  activeMenu(id: any) {
    document.querySelector(".heart_icon_" + id)?.classList.toggle("active");
  }
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "lg", centered: true });
  }
}
