import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { AppService } from "../application/services/app.service";

@Component({
  selector: "app-cashouts-overview",
  templateUrl: "./cashouts-overview.component.html",
  styleUrls: ["./cashouts-overview.component.scss"]
})
export class CashoutsOverviewComponent implements OnInit {
  loggedInUser: any = this.app.getLoggedInUser();
  headers = new HttpHeaders({
    Authorization: this.app.getLoggedInUserToken()
  });
  pageNumber: any = 1;
  pageSize: any = 5;
  cashouts: any[] = [];

  constructor(private app: AppService) {}

  ngOnInit() {
    this.getAccountcashouts();
  }

  getAccountcashouts = () => {
    let params = new HttpParams().set("pagesize", this.pageSize).set("pagenumber", this.pageNumber);

    console.log(`${this.app.BASE_URL}/wallets/get/cashouts/${this.loggedInUser.accountNumber}`);

    this.app.makeGetRequestWithParams(`${this.app.BASE_URL}/wallets/get/cashouts/${this.loggedInUser.accountNumber}`, this.headers, params).subscribe(
      dataObject => {
        let response: any = dataObject;
        console.log(response);

        if (response.success) {
          this.cashouts = response.data;
          this.cashouts.forEach(cashout => {
            if (cashout.recipientAccount === this.loggedInUser.accountNumber) {
              cashout.isCredit = true;
            } else {
              cashout.isCredit = false;
            }
          });
        }
      },
      errorObject => {
        this.app.processError(errorObject);
      }
    );
  };
}
