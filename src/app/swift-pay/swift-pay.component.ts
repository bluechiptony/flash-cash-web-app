import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppService } from "../application/services/app.service";
import { HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: "app-swift-pay",
  templateUrl: "./swift-pay.component.html",
  styleUrls: ["./swift-pay.component.scss"]
})
export class SwiftPayComponent implements OnInit {
  beneficiaries: any[] = [
    // { id: 2, fullName: "James Mcadoo", accountNumber: "BFGE3948327" }
    // { id: 1, fullName: "Kike Lomon", accountNumber: "WQEE3948327" },
    // { id: 3, fullName: "Buka Mendo", accountNumber: "BOSE3948327" }
  ];

  showForm: boolean = true;
  showConfirm: boolean = false;
  showError: boolean = false;
  processingPayment: boolean = false;
  beneficiary: any = {};
  payment: any = {};
  beneficiariesLoading: boolean = false;
  loggedInUser: any = this.app.getLoggedInUser();
  headers = new HttpHeaders({
    Authorization: this.app.getLoggedInUserToken()
  });

  paymentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private app: AppService) {}

  ngOnInit() {
    this.prepForm();
  }

  prepForm = (): void => {
    this.paymentForm = this.formBuilder.group({
      beneficiary: ["", Validators.required],
      amount: ["", Validators.required]
    });
  };

  submitForm = (): void => {
    if (this.paymentForm.valid) {
      this.payment = this.paymentForm.value;
      this.showConfirm = true;
      this.showForm = false;
    }
  };

  loadBeneficiaries = (evt: any) => {
    console.log(evt.term);
    this.getSearchedBeneficiaries(evt.term);
    // console.log("Loading");
    // console.log(this.paymentForm.value);
  };

  onChange(event) {
    console.log(event);
  }

  cancelPayment() {
    this.showConfirm = false;
    this.showForm = true;
    this.payment = {};
  }

  getSearchedBeneficiaries = (search: any) => {
    let url = `${this.app.BASE_URL}/wallets/data/full/search`;
    let params = new HttpParams().set("search", search);
    this.app.makeGetRequestWithParams(url, this.headers, params).subscribe(
      data => {
        // console.log(data);
        let response: any = data;
        this.beneficiaries = response.data.map(data => {
          // data.fullName = `${data.firstName} ${data.lastName}`;
          return {
            fullName: `${data.firstName} ${data.lastName}`,
            id: data.valueAccountId,
            accountNumber: data.accountNumber,
            emailAddress: data.emailAddress,
            userCode: data.userCode
          };
        });
        console.log(this.beneficiaries);
      },
      error => {
        console.log(error);
        this.app.processError(error);
      }
    );
  };

  processPayment() {
    this.loggedInUser.fullName = `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;
    let payment = {
      sender: this.loggedInUser,
      beneficiary: this.payment.beneficiary,
      amount: this.payment.amount
    };
    delete payment.sender.token;

    console.log(payment);
    this.processingPayment = true;

    let url = `${this.app.BASE_URL}/wallets/transfer`;
    this.app.makePostRequest(url, payment, this.headers).subscribe(
      data => {
        console.log(data);
        let response: any = data;
        if (response.success) {
          this.app.showSuccessMessage(response.message);
          this.processingPayment = true;
          this.showForm = true;
          this.showConfirm = false;
        }
      },
      error => {
        console.log(error);

        this.app.processError(error);
      }
    );
  }
}
