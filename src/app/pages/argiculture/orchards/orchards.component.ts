import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PropertyService } from 'src/app/core/services/property.service';

@Component({
  selector: 'app-orchards',
  templateUrl: './orchards.component.html',
  styleUrls: ['./orchards.component.scss']
})
export class OrchardsComponent implements OnInit {

  properties: any;
  constructor(
    public propertyService: PropertyService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.propertyService.getorchards().subscribe((data: any) => {

      this.properties = data;

    });

    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
