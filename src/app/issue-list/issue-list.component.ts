import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'PC1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'PC2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'PC3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'PC4', status: 'DOING' },
  ];
  filteredIssues: Issue[] = [];
  status = 'ALL';
  selectedIssue: Issue;

  constructor() {}

  ngOnInit() {
    this.filterIssues(this.status);
  }

  handleStatusChange(status: string) {
    // console.log(this.radioGroupForm.value.status);
    this.filterIssues(status);
  }

  filterIssues(filter) {
    this.filteredIssues = filter === 'ALL'
      ? this.issues
      : this.issues.filter(issue => issue.status === filter);
  }

  selectIssue(issue: Issue) {
    this.selectedIssue = issue;
  }

}
