import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/application/services/app.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.scss"]
})
export class HeroComponent implements OnInit {
  signUpForm: FormGroup;
  loading: boolean;
  requestUrl: string = "";
  emailAddress: string;
  accountType: string;

  constructor(private app: AppService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createSignUpForm();
  }

  createSignUpForm = () => {
    this.signUpForm = this.formBuilder.group({
      fullName: ["", Validators.required],
      emailAddress: ["", Validators.required],
      phoneNumber: ["", Validators.required]
    });
  };

  submitForm = () => {
    if (this.signUpForm.valid) {
      this.loading = true;
      (this.accountType = "CUSTOMER"), (this.emailAddress = this.signUpForm.value.emailAddress);
      this.signUpForm.value.accountType = "CUSTOMER";

      let user: any = this.signUpForm.value;
      user.firstName = user.fullName.split(" ")[0];
      user.lastName = user.fullName.split(" ")[1];

      this.createAccount(user);
    }
  };

  createAccount = (accountDetails: any) => {
    this.loading = true;
    this.app.makePostRequest(this.app.BASE_URL + "/users/create/customer", accountDetails).subscribe(
      data => {
        this.loading = false;
        let response: any = data;
        if (response.success) {
          // this.app.showSuccessMessage("User account successfully Created");
          if (response.data.userCode !== undefined) {
            this.createActivation(response.data.userCode);
          } else {
            this.app.showWarningMessage("Could not complete user creation");
          }
        }
      },
      error => {
        this.loading = false;
        this.app.processError(error);
      }
    );
  };

  createActivation = (userCode: any): void => {
    this.loading = true;
    this.requestUrl = `${this.app.BASE_URL}/auth/create/authentication`;
    let auth = {
      emailAddress: this.emailAddress,
      userCode: userCode,
      accountType: this.accountType
    };

    console.log(auth);

    this.app.makePostRequest(this.requestUrl, auth).subscribe(
      data => {
        this.loading = false;
        let response: any = data;
        if (response.success) {
          this.app.showSuccessMessage(response.message);
        } else {
        }
      },
      error => {
        this.loading = false;
        console.log(error);
        this.app.processError(error);
      }
    );
  };
}
