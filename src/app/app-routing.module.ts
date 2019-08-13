import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FourOFourComponent } from "./four-o-four/four-o-four.component";

const routes: Routes = [{ path: "", component: HomeComponent }, { path: "**", component: FourOFourComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
