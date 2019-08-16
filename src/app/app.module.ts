import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";

import { ToastrModule } from "ngx-toastr";
import { CookieService } from "ngx-cookie-service";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe, CurrencyPipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
//import material components
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FourOFourComponent } from "./four-o-four/four-o-four.component";
import { NotAllowedComponent } from "./not-allowed/not-allowed.component";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { SetPasswordComponent } from "./set-password/set-password.component";
import { MessageComponent } from "./message/message.component";
import { HeroComponent } from "./home/hero/hero.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { HomeExplainerComponent } from "./home/home-explainer/home-explainer.component";
import { HomeValuePropComponent } from "./home/home-value-prop/home-value-prop.component";
import { HomeHowToComponent } from "./home/home-how-to/home-how-to.component";
import { FaqComponent } from "./home/faq/faq.component";
import { FooterComponent } from "./footer/footer.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardHeaderComponent } from "./dashboard-header/dashboard-header.component";
import { OverviewComponent } from "./overview/overview.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { AppService } from "./application/services/app.service";
import { DataService } from "./application/services/data.service";
import { ValueAcquisitionTableComponent } from "./tables/value-acquisition-table/value-acquisition-table.component";
import { ValueCheckoutTableComponent } from "./tables/value-checkout-table/value-checkout-table.component";
import { ValueTransferTableComponent } from "./tables/value-transfer-table/value-transfer-table.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { TicketComponent } from "./ticket/ticket.component";

@NgModule({
  declarations: [
    AppComponent,
    FourOFourComponent,
    NotAllowedComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    MessageComponent,
    HeroComponent,
    HeaderComponent,
    HomeComponent,
    HomeExplainerComponent,
    HomeValuePropComponent,
    HomeHowToComponent,
    FaqComponent,
    FooterComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    OverviewComponent,
    TransactionsComponent,
    ValueAcquisitionTableComponent,
    ValueCheckoutTableComponent,
    ValueTransferTableComponent,
    TicketsComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    // MatCheckboxModule,
    MatTabsModule
  ],
  providers: [AppService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
