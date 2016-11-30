import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "aw-login",
  templateUrl: "components/Login/login.component.html"
})
export class LoginComponent implements OnInit {

  @ViewChild("initialContainer") initialContainer: ElementRef;
  @ViewChild("mainContainer") mainContainer: ElementRef;
  @ViewChild("formContainer") formContainer: ElementRef;

  constructor(private router: Router) { }

  onSignIn() {

  }

  ngOnInit() {

  }
}
