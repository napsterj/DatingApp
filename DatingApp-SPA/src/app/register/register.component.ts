import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  model: any = {};
  @Output() cancelRegisterMode = new EventEmitter();
  constructor(private service: AuthService, private alertify: AlertifyService) {}

  register(model) {
    console.log(model);
    this.service
        .registerUser(model)
        .subscribe(() => {
          this.alertify.success('Registration successful.');
    }, error => { this.alertify.error(error); });
  }

  cancel() {
    this.cancelRegisterMode.emit(false);
  }
}
