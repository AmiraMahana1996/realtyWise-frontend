import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-chalets",
  templateUrl: "./chalets.component.html",
  styleUrls: ["./chalets.component.scss"],
})
export class ChaletsComponent implements OnInit {
  properties: any;
  constructor(
    public propertyService: PropertyService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.propertyService.getchalets().subscribe((data: any) => {

      this.properties = data;

    });

    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
