import { Component, OnInit, EventEmitter, Output, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

//Logout
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "../../core/services/auth.service";

import { Router } from "@angular/router";

// Language
import { CookieService } from "ngx-cookie-service";
import { LanguageService } from "../../core/services/language.service";
import { TranslateService } from "@ngx-translate/core";

import { CartModel } from "./topbar.model";
import { cartData } from "./data";
import { PropertyService } from "src/app/core/services/property.service";
import { SharedService } from "src/app/core/services/shared.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  element: any;
  mode: string | undefined;
  @Output() mobileMenuButtonClicked = new EventEmitter();

  flagvalue: any;
  valueset: any;
  user: any;
  countryName: any;
  cookieValue: any;
  userData: any;
  cartData!: CartModel[];
  total = 0;
  cart_length: any = 0;
  TFIDFdATA: any;
  constructor(
    @Inject(DOCUMENT) private document: any,

    public languageService: LanguageService,
    public _cookiesService: CookieService,
    public translate: TranslateService,
    private authService: AuthenticationService,

    private router: Router,

    public propertyServ: PropertyService,
    private dataservice: SharedService
  ) {}

  ngOnInit(): void {
    this.element = document.documentElement;
    this.user = JSON.parse(localStorage.getItem("currentUser") || "{}");

    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get("lang");
    const val = this.listLang.filter((x) => x.lang === this.cookieValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = "assets/images/flags/us.svg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }

    //  Fetch Data
    this.cartData = cartData;
    this.cart_length = this.cartData.length;
    this.cartData.forEach((item) => {
      var item_price = item.quantity * item.price;
      this.total += item_price;
    });
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle("fullscreen-enable");
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  /**
   * Topbar Light-Dark Mode Change
   */
  changeMode(mode: string) {
    this.mode = mode;

    switch (mode) {
      case "light":
        document.body.setAttribute("data-layout-mode", "light");
        document.body.setAttribute("data-sidebar", "light");
        break;
      case "dark":
        document.body.setAttribute("data-layout-mode", "dark");
        document.body.setAttribute("data-sidebar", "dark");
        break;
      default:
        document.body.setAttribute("data-layout-mode", "light");
        break;
    }
  }

  /***
   * Language Listing
   */
  listLang = [
    { text: "English", flag: "assets/images/flags/us.svg", lang: "en" },
    { text: "Arabic", flag: "assets/images/flags/egypt.svg", lang: "ar" },
  ];

  /***
   * Language Value Set
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;

    this.languageService.setLanguage(lang);
  }

  /**
   * Logout the user
   */
  logout() {
    // if (environment.defaultauth === 'firebase') {
    //   this.authService.logout();
    // } else {
    //   this.authFackservice.logout();
    // }
    this.authService.logout();
    this.router.navigate(["/auth/signin/basic"]);
  }

  windowScroll() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      (document.getElementById("back-to-top") as HTMLElement).style.display =
        "block";
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display =
        "none";
    }
  }

  // Delete Item
  deleteItem(event: any, id: any) {
    var price = event.target
      .closest(".dropdown-item")
      .querySelector(".item_price").innerHTML;
    var Total_price = this.total - price;
    this.total = Total_price;
    this.cart_length = this.cart_length - 1;
    this.total > 1
      ? ((document.getElementById("empty-cart") as HTMLElement).style.display =
          "none")
      : ((document.getElementById("empty-cart") as HTMLElement).style.display =
          "block");
    document.getElementById("item_" + id)?.remove();
  }

  // Search Topbar
  Search() {
    var searchOptions = document.getElementById(
      "search-close-options"
    ) as HTMLAreaElement;
    var dropdown = document.getElementById(
      "search-dropdown"
    ) as HTMLAreaElement;
    var input: any,
      filter: any,
      ul: any,
      li: any,
      a: any | undefined,
      i: any,
      txtValue: any;
    input = document.getElementById("search-options") as HTMLAreaElement;
    filter = input.value.toLowerCase();

    var inputLength = filter.length;

    if (inputLength > 0) {
      this.propertyServ.TFIDF(filter).subscribe((data: any) => {
        this.dataservice.emitdata(data);
      });
    } else {
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    }
  }

  /**
   * Search Close Btn
   */
  closeBtn() {
    var searchOptions = document.getElementById(
      "search-close-options"
    ) as HTMLAreaElement;
    var dropdown = document.getElementById(
      "search-dropdown"
    ) as HTMLAreaElement;
    var searchInputReponsive = document.getElementById(
      "search-options"
    ) as HTMLInputElement;
    dropdown.classList.remove("show");
    searchOptions.classList.add("d-none");
    searchInputReponsive.value = "";
  }
}
