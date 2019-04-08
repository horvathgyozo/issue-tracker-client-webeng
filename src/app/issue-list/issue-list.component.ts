import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  issues: Issue[];
  filteredIssues: Issue[] = [];
  status = 'ALL';
  selectedIssue: Issue;

  constructor(private issueService: IssueService) {}

  ngOnInit() {
    this.issues = this.issueService.getIssues();
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

  handleFormSubmit(formData) {
    Object.assign(this.selectedIssue, formData);
    this.selectedIssue = null;
  }
}
