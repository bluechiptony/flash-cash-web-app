import { Component, OnInit } from "@angular/core";
import { AppService } from "../application/services/app.service";

@Component({
  selector: "app-dashboard-header",
  templateUrl: "./dashboard-header.component.html",
  styleUrls: ["./dashboard-header.component.scss"]
})
export class DashboardHeaderComponent implements OnInit {
  loggedInUser: any = {};
  constructor(private app: AppService) {}

  ngOnInit() {
    this.getLoggedInUser();
  }

  logOut() {
    this.app.logOut();
  }

  getLoggedInUser() {
    this.loggedInUser = this.app.getLoggedInUser();
    console.log(this.loggedInUser);
  }

  openProfileModal() {}
}
