import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { connectionType, getConnectionType } from "connectivity";
import { View } from "ui/core/view";
import { TextField } from "ui/text-field";

@Component({
  selector: "aw-login",
  templateUrl: "components/Login/login.component.html"
})
export class LoginComponent {

  // @ViewChild("loginContainer") loginContainer: ElementRef;
  // @ViewChild("formControls") formControls: ElementRef;
  // @ViewChild("password") password: ElementRef;

  signin() {
    alert("You just hit Login");
  }
}
