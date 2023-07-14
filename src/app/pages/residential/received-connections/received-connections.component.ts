import { Component, OnInit } from "@angular/core";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-received-connections",
  templateUrl: "./received-connections.component.html",
  styleUrls: ["./received-connections.component.scss"],
})
export class ReceivedConnectionsComponent implements OnInit {
  connections: any;
  constructor(public propertyService: PropertyService) {}

  ngOnInit(): void {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    this.propertyService
      .getReceivedConnection(user.id)
      .subscribe((data: any) => {

        this.connections = data;
      });
  }
}
