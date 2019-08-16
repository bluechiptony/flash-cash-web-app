import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FourOFourComponent } from "./four-o-four/four-o-four.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { TicketsComponent } from "./tickets/tickets.component";
import { TicketComponent } from "./ticket/ticket.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "home",
    component: DashboardComponent,
    children: [
      { path: "tickets", component: TicketsComponent },
      { path: "my-ticket-assignments", component: TicketsComponent },
      { path: "open-tickets", component: TicketsComponent },
      { path: "ticket/:ticketnumber", component: TicketComponent },
      {
        path: "transactions/value-acquisition",
        component: TransactionsComponent
      },
      {
        path: "transactions/value-transfer",
        component: TransactionsComponent
      },
      {
        path: "transactions/value-checkout",
        component: TransactionsComponent
      }
    ]
  },
  { path: "**", component: FourOFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
