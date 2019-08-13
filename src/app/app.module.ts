import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { NgxPageScrollCoreModule } from "ngx-page-scroll-core";
import { NgxPageScrollModule } from "ngx-page-scroll";

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
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgxPageScrollCoreModule, NgxPageScrollModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
