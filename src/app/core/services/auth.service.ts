import { Injectable } from "@angular/core";
import { getFirebaseBackend } from "../../authUtils";
import { User } from "../models/auth.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { GlobalComponent } from "../../global-component";
import { environment } from "src/environments/environment";
import { CookieService } from "ngx-cookie-service";

const AUTH_API = GlobalComponent.AUTH_API;

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({ providedIn: "root" })

/**
 * Auth-service Component
 */
export class AuthenticationService {
  user!: User;
  currentUserValue: any;
  // private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    // this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')!));
  }

  /**
   * Performs the register
   * @param email email
   * @param password password
   */
  register(
    name: string,
    email: string,
    city: string,
    password: string,
    passwordConfirm: string
  ) {
    // return getFirebaseBackend()!.registerUser(email, password).then((response: any) => {
    //     const user = response;
    //     return user;
    // });

    // Register Api
    return this.http.post(
      environment.baseUrl + "/auth/register",
      {
        name,
        email,
        city,
        password,
        passwordConfirm,
      },
      httpOptions
    );
  }

  /**
   * Performs the auth
   * @param email email of user
   * @param password password of user
   */
  login(email: string, password: string) {
    // return getFirebaseBackend()!.loginUser(email, password).then((response: any) => {
    //     const user = response;
    //     return user;
    // });

    return this.http.post(
      environment.baseUrl + "/auth/login",
      {
        email,
        password,
      },
      httpOptions
    );
  }

  /**
   * Returns the current user
   */
  public currentUser(): any {
    return getFirebaseBackend()!.getAuthenticatedUser();
  }

  /**
   * Logout the user
   */
  logout() {
    // logout the user
    // return getFirebaseBackend()!.logout();
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
    localStorage.removeItem("loggedin");
    this.cookieService.delete("loggedin");
    this.cookieService.delete("access_token");
    this.cookieService.delete("refresh_token");

    return this.http.post(environment.baseUrl + "/auth/logout", httpOptions);
    // this.currentUserSubject.next(null!);
  }

  /**
   * Reset password
   * @param email email
   */
  resetPassword(email: string) {
    return getFirebaseBackend()!
      .forgetPassword(email)
      .then((response: any) => {
        const message = response.data;
        return message;
      });
  }
}
