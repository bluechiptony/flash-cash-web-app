import { Component, OnInit } from "@angular/core";
import * as UiiD from "uuid";
import { AppService } from "../application/services/app.service";
import { HttpHeaders } from "@angular/common/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-balance",
  templateUrl: "./balance.component.html",
  styleUrls: ["./balance.component.scss"]
})
export class BalanceComponent implements OnInit {
  paystackPayment: any = {};
  showRecharge: boolean = false;
  showCheckout: boolean = false;
  currentBalance: number = 0;
  requestUrl: string;
  account: any = {};
  lastLoadAmount: number;
  loggedInUser: any = this.app.getLoggedInUser();
  headers = new HttpHeaders({
    Authorization: this.app.getLoggedInUserToken()
  });

  checkOutForm: FormGroup;

  constructor(private app: AppService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.paystackPayment = {
      email: "tony5egwu@gmail.com",
      pkey: "pk_test_d301f175351adb733e25fa5011d5bad1daf0a13a",
      ref: this.getTransactionRef()
    };
    this.checkOutForm = this.formBuilder.group({
      amount: ["", Validators.required]
    });
    this.checkCurrentBalance();
  }

  showRechargeChange = (): void => {
    this.showRecharge = !this.showRecharge;
    this.showCheckout = false;
  };

  showCheckoutChange = (): void => {
    this.showCheckout = !this.showCheckout;
    this.showRecharge = false;
  };
  submitRechargeAmount = (): void => {};

  handleChange = (event): void => {
    // console.log(event.target.value);
    this.paystackPayment.amount = +event.target.value * 100;
    this.lastLoadAmount = +event.target.value;
  };

  submitCheckout = () => {
    if (this.checkOutForm.valid) {
      let checkout = {
        amount: this.checkOutForm.value.amount,
        emailAddress: this.loggedInUser.emailAddress,
        accountNumber: this.loggedInUser.accountNumber
      };

      this.processCheckout(checkout);
    } else {
      console.log("not valid");
    }
  };
  handleCheckoutChange = (event): void => {
    // this.lastLoadAmount = +event.target.value;
  };
  getTransactionRef = () => {
    return UiiD();
  };

  paymentDone = (event): void => {
    console.log(event);
    if (event.status === "success") {
      let loadAdvice = {
        recipientAccount: this.account.accountNumber,
        amount: this.lastLoadAmount,
        emailAddress: this.loggedInUser.emailAddress
      };
      this.loadWallet(loadAdvice);
    }
  };

  paymentCancel = (): void => {};

  checkCurrentBalance = (): void => {
    this.requestUrl = this.app.BASE_URL + "/wallets/get/user/" + this.loggedInUser.userCode;

    console.log(this.headers);

    this.app.makeGetRequestWithParams(this.requestUrl, this.headers).subscribe(
      dataObject => {
        console.log(dataObject);
        let response: any = dataObject;
        if (response.success) {
          this.account = response.data;
        }
      },
      errorObject => {
        console.log(errorObject);
      }
    );
  };

  loadWallet = (loadAdvise: any) => {
    this.requestUrl = this.app.BASE_URL + "/wallets/credit";
    this.app.makePutRequest(this.requestUrl, loadAdvise, this.headers).subscribe(
      dataObject => {
        // console.log(dataObject);

        let response: any = dataObject;
        if (response.success) {
          this.app.showSuccessMessage(response.message);
          this.checkCurrentBalance();
        }
      },
      errorObject => {
        console.log(errorObject);
        this.app.processError(errorObject);
      }
    );
  };

  processCheckout = (checkout: any): void => {
    let url = `${this.app.BASE_URL}/wallets/debit`;
    this.app.makePutRequest(url, checkout, this.headers).subscribe(
      dataObject => {
        // console.log(dataObject);

        let response: any = dataObject;
        if (response.success) {
          this.app.showSuccessMessage(response.message);
          this.checkCurrentBalance();
        }
      },
      errorObject => {
        console.log(errorObject);
        this.app.processError(errorObject);
      }
    );
  };
}
