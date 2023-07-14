import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})

/**
 * Layout Component
 */
export class LayoutComponent implements OnInit {
  layoutType!: string;

  constructor() {}

  ngOnInit(): void {
    this.layoutType = "horizontal";
    document.body.setAttribute("layout", this.layoutType);
  }
}
