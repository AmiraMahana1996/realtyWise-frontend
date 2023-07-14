import { Component, OnInit, ViewChild } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ElementRef } from "@angular/core";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-properties",
  templateUrl: "./properties.component.html",
  styleUrls: ["./properties.component.scss"],
})
export class PropertiesComponent implements OnInit {
  properties: any;
  submitted = false;
  EditForm: FormGroup | any;
  property_id: any;
  @ViewChild("advertisingImageCoverN")
  advertisingImageCoverN!: ElementRef;
  constructor(
    public propertyService: PropertyService,
    private sanitizer: DomSanitizer,
    public modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.propertyService.getAllProperties().subscribe((data: any) => {

      this.properties = data.properties;
    });

    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    /**
     * BreadCrumb
     */

    /**
     * Fetches the data
     */
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  openModal(content: any, id: any) {

    this.submitted = false;
    this.propertyService.getById(id.$oid.toString()).subscribe((data: any) => {
 
      this.property_id = data._id;
      this.EditForm = this.formBuilder.group({
        fname: this.formBuilder.control(data.fname),
        lname: this.formBuilder.control(data.lname),
        contactNumber: this.formBuilder.control(data.contactNumber),
        phoneNumber: this.formBuilder.control(data.phoneNumber),
        emial: this.formBuilder.control(data.emial),
        DOB: this.formBuilder.control(data.DOB),
        city: this.formBuilder.control(data.city),
        zip_code: this.formBuilder.control(data.zip_code),
        desc: this.formBuilder.control(data.desc),
        propertyType: this.formBuilder.control(data.propertyType),
        propertySize: this.formBuilder.control(data.propertySize),
        price: this.formBuilder.control(data.price),
        propertyAddressLine1: this.formBuilder.control(
          data.propertyAddressLine1
        ),
        propertyAddressLine2: this.formBuilder.control(
          data.propertyAddressLine2
        ),
        propertyAddressLine3: this.formBuilder.control(
          data.propertyAddressLine3
        ),
        images: this.formBuilder.array(data.images),
        advertising: this.formBuilder.control(data.advertising),

        advertisingImageCover: this.formBuilder.control(
          data.advertisingImageCover
        ),
      });
      const fileInput = this.advertisingImageCoverN;

      const reader = new FileReader();

      this.modalService.open(content, { size: "lg", centered: true });
    });
  }
  get images(): FormArray {
    return this.EditForm.get("images") as FormArray;
  }
  //Help to get all photos controls as form array.
  get advertisingImageCoverUp(): FormControl {
    return this.EditForm.get("advertisingImageCover") as FormControl;
  }
  uploadCoverImage(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e: any) => {
      let image = reader.result as string;

      this.advertisingImageCoverUp.patchValue(image);
    };
    // reader.readAsDataURL(file);
  }
  // We will create multiple form controls inside defined form controls photos.
  createItem(data: any): FormGroup {
    return this.formBuilder.group(data);
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
  EditProperty(form: FormGroup) {

    this.propertyService.createProperty(form.value).subscribe((data) => {
  
    });
  }

  delete(id: any) {

    this.propertyService.deleteProperty(id.$oid).subscribe((data) => {
  
    });
  }
}
