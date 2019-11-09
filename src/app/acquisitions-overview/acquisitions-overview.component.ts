import { Component, OnInit } from "@angular/core";
import { AppService } from "../application/services/app.service";
import { HttpHeaders, HttpParams } from "@angular/common/http";
import { log } from "util";

@Component({
  selector: "app-acquisitions-overview",
  templateUrl: "./acquisitions-overview.component.html",
  styleUrls: ["./acquisitions-overview.component.scss"]
})
export class AcquisitionsOverviewComponent implements OnInit {
  loggedInUser: any = this.app.getLoggedInUser();
  headers = new HttpHeaders({
    Authorization: this.app.getLoggedInUserToken()
  });
  pageNumber: any = 1;
  pageSize: any = 5;
  acquisitions: any[] = [];

  constructor(private app: AppService) {}

  ngOnInit() {
    this.getAccountAcquisitions();
  }

  getAccountAcquisitions = () => {
    let params = new HttpParams().set("pagesize", this.pageSize).set("pagenumber", this.pageNumber);

    console.log(`${this.app.BASE_URL}/wallets/get/acquisitions/${this.loggedInUser.accountNumber}`);

    this.app.makeGetRequestWithParams(`${this.app.BASE_URL}/wallets/get/acquisitions/${this.loggedInUser.accountNumber}`, this.headers, params).subscribe(
      dataObject => {
        let response: any = dataObject;
        console.log(response);

        if (response.success) {
          this.acquisitions = response.data;
        }
      },
      errorObject => {
        this.app.processError(errorObject);
      }
    );
  };
}
