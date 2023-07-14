import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { PropertyService } from "src/app/core/services/property.service";
import { FormControl, FormGroup, FormArray, FormBuilder } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-villas",
  templateUrl: "./villas.component.html",
  styleUrls: ["./villas.component.scss"],
})
export class VillasComponent implements OnInit {
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
  constructor(
    public modalService: NgbModal,
    public propertyService: PropertyService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.propertyService.getVilla().subscribe((data: any) => {
      this.properties = data;
    });
    this.breadCrumbItems = [
      { label: "Ecommerce" },
      { label: "Sellers", active: true },
    ];

    /**
     * Fetches the data
     */
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
