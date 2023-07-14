import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Property } from "../models/property.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class PropertyService {
  property!: Property;

  constructor(private http: HttpClient) {}

  getAllProperties() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    return this.http.get(
      environment.baseUrl + `/properties/properties/${user.id}`
    );
  }
  getApartment() {
    const params = { type: "apartment" };
    return this.http.get(environment.baseUrl + `/tfidf/apartment`, {
      params,
    });
  }

  getCatel() {
    const params = { type: "castle" };

    return this.http.get(environment.baseUrl + `/tfidf/castle`, { params });
  }
  getchalets() {
    const params = { type: "chalets" };

    return this.http.get(environment.baseUrl + `/tfidf/chalets`, { params });
  }
  getfactories() {
    const params = { type: "factory" };

    return this.http.get(environment.baseUrl + `/tfidf/factory`, { params });
  }

  getstore() {
    const params = { type: "store" };

    return this.http.get(environment.baseUrl + `/tfidf/store`, { params });
  }
  getadministrative() {
    const params = { type: "administrative" };

    return this.http.get(environment.baseUrl + `/tfidf/administrative`, {
      params,
    });
  }
  getShoopingStore() {
    const params = { type: "shopping" };

    return this.http.get(environment.baseUrl + `/tfidf/shopping`, { params });
  }

  getFarms() {
    const params = { type: "farm" };

    return this.http.get(environment.baseUrl + `/tfidf/farm`, { params });
  }
  getorchards() {
    const params = { type: "orchards" };

    return this.http.get(environment.baseUrl + `/tfidf/orchards`, { params });
  }
  getLand() {
    const params = { type: "land" };

    return this.http.get(environment.baseUrl + `/tfidf/land`, { params });
  }

  getVilla() {
    const params = { type: "villa" };

    return this.http.get(environment.baseUrl + `/tfidf/villa`, { params });
  }

  getCheapestBasedOnUserAddress() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    const params = { type: "villa" };

    return this.http.get(environment.baseUrl + `/tfidf/${user.city}`, {
      params,
    });
  }

  getCheapestBasedOnCheapest() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    const params = { type: "villa" };

    return this.http.get(environment.baseUrl + `/tfidf/cheap ${user.city}`, {
      params,
    });
  }
  getLandMarket() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    const params = { type: "villa" };

    return this.http.get(environment.baseUrl + `/tfidf/land ${user.city}`, {
      params,
    });
  }
  getById(id: any) {
    return this.http.get(environment.baseUrl + `/properties/${id}`);
  }

  createProperty(property: any) {
    return this.http.post(environment.baseUrl + `/properties`, property);
  }
  createConnect(connect: any) {
    return this.http.post(
      environment.baseUrl + `/connection/create-conect`,
      connect
    );
  }

  getConnectByUserId(id: any) {
    return this.http.get(environment.baseUrl + `/connection/${id}`);
  }
  editProperty() {}

  deleteProperty(id: any) {
    return this.http.delete(environment.baseUrl + `/properties/${id}`);
  }

  getAllConnections() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    return this.http.get(
      environment.baseUrl + `/connection/get-connections/${user.id}`
    );
  }

  getConnectionsById(id: any) {
    return this.http.get(environment.baseUrl + `/connection/details/${id}`);
  }
  deleteConnection(id: any) {
    return this.http.delete(environment.baseUrl + `/connection/${id}`);
  }

  getReceivedConnection(id: any) {
    return this.http.get(environment.baseUrl + `/connection/recieved/${id}`);
  }
  doAccept(id: any) {
    return this.http.put(
      environment.baseUrl + `/connection/do-accept/${id}`,
      {}
    );
  }

  getAcceptedConnections() {
    let user: any = JSON.parse(localStorage.getItem("currentUser") || "{}");

    return this.http.get(
      environment.baseUrl + `/connection/accepted/${user.id}`,
      {}
    );
  }
  TFIDF(term: any) {
    return this.http.get(environment.baseUrl + `/tfidf/${term}`);
  }
}
