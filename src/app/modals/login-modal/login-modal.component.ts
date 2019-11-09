import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "src/app/application/services/app.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-login-modal",
  templateUrl: "./login-modal.component.html",
  styleUrls: ["./login-modal.component.scss"]
})
export class LoginModalComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private builder: FormBuilder, private app: AppService, private dialogRef: MatDialogRef<LoginModalComponent>) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm = (): void => {
    this.loginForm = this.builder.group({
      emailAddress: ["", Validators.required],
      password: ["", Validators.required]
    });
  };

  submitForm = (): void => {
    if (this.loginForm.valid) {
      let loginObj = this.loginForm.value;
      this.makeLoginRequest(loginObj);
    } else {
      console.log("cant see");
    }
  };

  makeLoginRequest = (body): void => {
    console.log(body);
    body.firstName = "James";
    body.lastName = "Doe";
    body.accountNumber = "128382393";

    this.app.saveLoginUser(body, true);
    this.dialogRef.close();
  };
}
