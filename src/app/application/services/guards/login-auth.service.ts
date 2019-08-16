import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AppService } from "../app.service";

@Injectable({
  providedIn: "root"
})
export class LoginAuthService {
  loggedInUser: any;
  returnUrl: any;
  constructor(private router: Router, private app: AppService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.returnUrl = state.url;
    // this.loggedInUser = this.app.getLoggedInUser();
    console.log(this.loggedInUser);
    if (this.loggedInUser.loggedIn) {
      return true;
    } else {
      console.log(this.returnUrl);

      this.router.navigate([""], { queryParams: { returnUrl: this.returnUrl } });
      return false;
    }
  }
}
