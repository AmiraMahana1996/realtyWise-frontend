import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { CookieService } from "ngx-cookie-service";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { TrendingUp } from "angular-feather/icons";
import Swal from "sweetalert2";
@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})

/**
 * Basic Component
 */
export class BasicComponent implements OnInit {
  // Login Form
  loginForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  error = "";
  returnUrl!: string;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute,

    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    // if(localStorage.getItem('currentUser')) {
    //   this.router.navigate(['/home']);
    // }
    /**
     * Form Validatyion
     */
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/home";
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit() {

    this.submitted = true;
    // Login Api
    this.authenticationService
      .login(this.f["email"].value, this.f["password"].value)
      .subscribe((data: any) => {

        if (data.status == "success") {
          this.cookieService.set("access_token", data.access_token);
          this.cookieService.set("loggedin", data.logged_in);
          this.cookieService.set("refresh_token", data.refresh_token);

   
          localStorage.setItem("toast", "true");
          localStorage.setItem("currentUser", JSON.stringify(data.data));
          let user: any = JSON.parse(
            localStorage.getItem("currentUser") || "{}"
          );
     
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("loggedin", data.logged_in);

          this.router.navigate(["/home"]);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });
          Toast.fire({
            icon: "success",
            title: "Signed in successfully",
          });
        } else {
        }
      });
    // stop here if form is invalid
    if (this.loginForm.invalid) {
 
      return;
    }
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
