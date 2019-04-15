import { Injectable } from '@angular/core';
import { Issue } from './issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  issues: Issue[] = [
    { id: 1, title: 'issue1', description: 'desc1', place: 'PC1', status: 'NEW' },
    { id: 2, title: 'issue2', description: 'desc2', place: 'PC2', status: 'DOING' },
    { id: 3, title: 'issue3', description: 'desc3', place: 'PC3', status: 'DONE' },
    { id: 4, title: 'issue4', description: 'desc4', place: 'PC4', status: 'DOING' },
  ];

  constructor() { }

  getIssues(): Issue[] {
    return this.issues;
  }

  getIssue(id: number): Issue {
    return this.issues.find(i => i.id === id);
  }

  addIssue(formData) {
    const newIssue = Object.assign(new Issue(), formData);
    newIssue.id = this.issues.length + 1;
    this.issues.push(newIssue);
    return newIssue;
  }

  modifyIssue(id: number, formData) {
    const issue = this.issues.find(iss => iss.id === id)
    Object.assign(issue, formData);
    return issue;
  }
}
