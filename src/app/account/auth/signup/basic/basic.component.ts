import { Component, OnInit } from "@angular/core";
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-basic",
  templateUrl: "./basic.component.html",
  styleUrls: ["./basic.component.scss"],
})

/**
 * Signup Basic Component
 */
export class BasicComponent implements OnInit {
  // Login Form
  SignupForm!: UntypedFormGroup;
  submitted = false;
  successmsg = false;
  error = "";
  // set the current year
  year: number = new Date().getFullYear();
  fieldTextType!: boolean;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /**
     * Form Validatyion
     */
    this.SignupForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required]],
      city: ["", [Validators.required]],

      password: ["", Validators.required],
      passwordConfirm: ["", Validators.required],
    });

    // Password Validation set
    var myInput = document.getElementById("password-input") as HTMLInputElement;
    var letter = document.getElementById("pass-lower");
    var capital = document.getElementById("pass-upper");
    var number = document.getElementById("pass-number");
    var length = document.getElementById("pass-length");

    // When the user clicks on the password field, show the message box
    myInput.onfocus = function () {
      let input = document.getElementById("password-contain") as HTMLElement;
      input.style.display = "block";
    };

    // When the user clicks outside of the password field, hide the password-contain box
    myInput.onblur = function () {
      let input = document.getElementById("password-contain") as HTMLElement;
      input.style.display = "none";
    };

    // When the user starts to type something inside the password field
    myInput.onkeyup = function () {
      // Validate lowercase letters
      var lowerCaseLetters = /[a-z]/g;
      if (myInput.value.match(lowerCaseLetters)) {
        letter?.classList.remove("invalid");
        letter?.classList.add("valid");
      } else {
        letter?.classList.remove("valid");
        letter?.classList.add("invalid");
      }

      // Validate capital letters
      var upperCaseLetters = /[A-Z]/g;
      if (myInput.value.match(upperCaseLetters)) {
        capital?.classList.remove("invalid");
        capital?.classList.add("valid");
      } else {
        capital?.classList.remove("valid");
        capital?.classList.add("invalid");
      }

      // Validate numbers
      var numbers = /[0-9]/g;
      if (myInput.value.match(numbers)) {
        number?.classList.remove("invalid");
        number?.classList.add("valid");
      } else {
        number?.classList.remove("valid");
        number?.classList.add("invalid");
      }

      // Validate length
      if (myInput.value.length >= 8) {
        length?.classList.remove("invalid");
        length?.classList.add("valid");
      } else {
        length?.classList.remove("valid");
        length?.classList.add("invalid");
      }
    };
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.SignupForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    this.authenticationService
      .register(
        this.f["name"].value,
        this.f["email"].value,
        this.f["city"].value,
        this.f["password"].value,
        this.f["passwordConfirm"].value
      )
      .pipe(first())
      .subscribe(
        (data: any) => {
          this.successmsg = true;
          if (this.successmsg) {
            this.router.navigate(["/auth/signin/basic"]);
          }
        },
        (error: any) => {
          this.error = error ? error : "";
        }
      );
    // stop here if form is invalid
    if (this.SignupForm.invalid) {
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
