import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PamHistoryComponent } from './pam-history/pam-history.component'
import { PamNewReviewComponent } from './pam-new-review/pam-new-review.component'
import { PamTicketDivesComponent } from './pam-ticket-dives/pam-ticket-dives.component'

const routes: Routes = [
  { path: '', component: PamHistoryComponent },
  { path: 'new_review', component: PamNewReviewComponent },
  { path: 'ticket_dives', component: PamTicketDivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
