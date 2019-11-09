import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpHeaders, HttpParams, HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class AppService {
  KEY_CURRENT_USER = "current_user";
  LOGGED_IN_USER_TOKEN = "logged_in_user_token";

  public BASE_URL = "http://localhost:5500";
  public emailRegex: RegExp = RegExp(
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  );
  public phoneRegex: RegExp = RegExp(/^\d{4}\d{3}\d{4}$/);
  public nubanRegex: RegExp = RegExp(/^\d{4}\d{3}\d{3}$/);

  constructor(private router: Router, private http: HttpClient, private toast: ToastrService) {}

  /**
   * Makes get request with ot without headers
   */
  public makeGetRequest(url: string, headers?: HttpHeaders) {
    if (headers == null || headers == undefined) {
      return this.http.get(url);
    } else {
      return this.http.get(url, { headers });
    }
  }

  /**
   * Makes get request with ot without headers
   */
  public makeGetRequestWithParams(url: string, headers?: HttpHeaders, params?: HttpParams) {
    if (headers == null || headers == undefined) {
      return this.http.get(url, { params });
    } else {
      return this.http.get(url, { headers: headers, params: params });
    }
  }

  /**
   * Makes post request with or without headers
   * @param url
   * @param body
   * @param headers
   */
  public makePostRequest(url: string, body: any, headers?: HttpHeaders): any {
    if (headers == null || headers == undefined) {
      return this.http.post(url, body);
    } else {
      return this.http.post(url, body, { headers });
    }
  }

  /**
   * Makes Put request with or without Headers
   * @param url
   * @param body
   * @param headers
   */
  public makePutRequest(url: string, body: any, headers?: HttpHeaders): any {
    if (headers == null || headers == undefined) {
      return this.http.put(url, body);
    } else {
      return this.http.put(url, body, { headers });
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigate([""]);
  }

  saveLoginUser = (user: any, navigateHome: boolean): void => {
    localStorage.setItem(this.KEY_CURRENT_USER, JSON.stringify(user));
    this.saveLoggedInUserToken(user.token);
    if (navigateHome) {
      this.router.navigate(["/home"]);
    }
  };

  getLoggedInUser = () => {
    try {
      return JSON.parse(localStorage.getItem(this.KEY_CURRENT_USER));
    } catch (error) {
      return null;
    }
  };

  public saveLoggedInUserToken = (token: any): void => {
    if (token !== null || token !== undefined) {
      localStorage.setItem(this.LOGGED_IN_USER_TOKEN, token);
    } else {
    }
  };

  public getLoggedInUserToken = (): string => {
    let cookieData = localStorage.getItem(this.LOGGED_IN_USER_TOKEN);

    return "Bearer " + cookieData;
  };

  public getSimpleAuthHeader = (): HttpHeaders => {
    return new HttpHeaders({
      Authorization: this.getLoggedInUserToken()
    });
  };

  /**
   * Preocesses error object
   */
  processError = (errorObject: any): void => {
    this.toast.error(errorObject.error.error, "Error");
    if (errorObject.status == 400) {
    } else if (errorObject.status == 403) {
    }
  };

  showSuccessMessage = (message: string): void => {
    this.toast.success(message);
  };

  showErrorMessage = (message: string): void => {
    this.toast.error(message);
  };

  showWarningMessage = (message: string): void => {
    this.toast.warning(message);
  };
}
