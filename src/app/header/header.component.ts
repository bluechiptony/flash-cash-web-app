import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { LoginModalComponent } from "../modals/login-modal/login-modal.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  openLoginModal = (): void => {
    let dia = this.dialog.open(LoginModalComponent, {
      width: "400px"
    });
  };
}
