import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";

import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from "@angular/platform-browser";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-apartment",
  templateUrl: "./apartment.component.html",
  styleUrls: ["./apartment.component.scss"],
})
export class ApartmentComponent implements OnInit {
  myForm: FormGroup | any;
  properties: any;
  userId: any;
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  BitcoinChart: any;
  MicroChart: any;
  NestaChart: any;
  iTestChart: any;
  MetaChart: any;
  DigitechChart: any;
  SyntyceChart: any;
  ZoeticChart: any;
  submitted = false;

  sellers?: any;

  constructor(
    public modalService: NgbModal,
    public propertyService: PropertyService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  ngOnInit(): void {
    this.propertyService.getApartment().subscribe((data: any) => {

      this.properties = data;

    });

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
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: "Ecommerce" },
      { label: "Sellers", active: true },
    ];

    /**
     * Fetches the data
     */
  }

  addProperty(form: FormGroup) {

    this.propertyService.createProperty(form.value).subscribe((data) => {

    });
  }

  // We will create multiple form controls inside defined form controls photos.
  createItem(data: any): FormGroup {
    return this.formBuilder.group(data);
  }

  //Help to get all photos controls as form array.
  get advertisingImageCover(): FormControl {
    return this.myForm.get("advertisingImageCover") as FormControl;
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
   * Fetches the data
   */

  /**
   * Open modal
   * @param content modal content
   */
  openModal(content: any) {
    this.submitted = false;
    this.modalService.open(content, { size: "lg", centered: true });
  }

  SubmitOwnerDetails() {
  
  }
}
