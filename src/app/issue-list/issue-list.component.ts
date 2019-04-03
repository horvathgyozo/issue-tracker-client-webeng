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
    { id: 1, title: 'issue1', description: 'desc1', place: 'place1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'place2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'place3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'place4', status: 'DOING' },
  ];
  filteredIssues: Issue[] = [];

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      status: 'ALL'
    });
    this.filterIssues('ALL');
  }

  handleChange() {
    // console.log(this.radioGroupForm.value.status);
    this.filterIssues(this.radioGroupForm.value.status);
  }

  filterIssues(filter) {
    this.filteredIssues = filter === 'ALL'
      ? this.issues
      : this.issues.filter(issue => issue.status === filter);
  }

}
