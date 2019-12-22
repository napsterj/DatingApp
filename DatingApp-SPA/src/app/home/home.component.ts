import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  registerMode = false;
  constructor(private http: HttpClient) {}

  registerToggle() {
    this.registerMode = true;
  }

  onCancelRegisterMode(registerModeValue: boolean) {
    this.registerMode = registerModeValue;
  }
}
