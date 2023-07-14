import { Component, OnInit } from "@angular/core";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-accepted-connection",
  templateUrl: "./accepted-connection.component.html",
  styleUrls: ["./accepted-connection.component.scss"],
})
export class AcceptedConnectionComponent implements OnInit {
  connections: any;
  constructor(public propertyService: PropertyService) {}

  ngOnInit(): void {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    this.propertyService.getAcceptedConnections().subscribe((data: any) => {

      this.connections = data;
    });
  }
}
