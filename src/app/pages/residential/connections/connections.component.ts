import { Component, OnInit } from "@angular/core";
import { PropertyService } from "src/app/core/services/property.service";

@Component({
  selector: "app-connections",
  templateUrl: "./connections.component.html",
  styleUrls: ["./connections.component.scss"],
})
export class ConnectionsComponent implements OnInit {
  connections: any;
  constructor(public propertyService: PropertyService) {}

  ngOnInit(): void {
    this.propertyService.getAllConnections().subscribe((data: any) => {

      let filterdData = data.connections.filter((ele: any) => {
        return ele.acccepted == "True";
      });
      this.connections = filterdData;
    });
  }
}
