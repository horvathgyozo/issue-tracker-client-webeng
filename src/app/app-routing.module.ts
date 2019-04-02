import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: MainPageComponent
  // },
  // {
  //   path: 'issues',
  //   component: IssueListComponent
  // },
  // {
  //   path: 'issues/new',
  //   component: IssueFormComponent
  // },
  // {
  //   path: 'issues/:id',
  //   component: IssueDetailComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
