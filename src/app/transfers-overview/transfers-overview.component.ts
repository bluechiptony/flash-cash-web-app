import { Component, OnInit } from "@angular/core";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { AppService } from "../application/services/app.service";

@Component({
  selector: "app-transfers-overview",
  templateUrl: "./transfers-overview.component.html",
  styleUrls: ["./transfers-overview.component.scss"]
})
export class TransfersOverviewComponent implements OnInit {
  loggedInUser: any = this.app.getLoggedInUser();
  headers = new HttpHeaders({
    Authorization: this.app.getLoggedInUserToken()
  });
  pageNumber: any = 1;
  pageSize: any = 5;
  transfers: any[] = [];

  constructor(private app: AppService) {}

  ngOnInit() {
    this.getAccountTransfers();
  }

  getAccountTransfers = () => {
    let params = new HttpParams().set("pagesize", this.pageSize).set("pagenumber", this.pageNumber);

    console.log(`${this.app.BASE_URL}/wallets/get/transfers/${this.loggedInUser.accountNumber}`);

    this.app.makeGetRequestWithParams(`${this.app.BASE_URL}/wallets/get/transfers/${this.loggedInUser.accountNumber}`, this.headers, params).subscribe(
      dataObject => {
        let response: any = dataObject;
        console.log(response);

        if (response.success) {
          this.transfers = response.data;
          this.transfers.forEach(transfer => {
            if (transfer.recipientAccount === this.loggedInUser.accountNumber) {
              transfer.isCredit = true;
            } else {
              transfer.isCredit = false;
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
