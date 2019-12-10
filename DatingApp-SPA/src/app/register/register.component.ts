import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  model: any = {};
  constructor() {}

  register(model) {
    console.log(this.model);
  }
}
