import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})
export class IssueEditComponent implements OnInit {

  issue: Issue = new Issue();
  id: number = null;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      this.issue = this.issueService.getIssue(this.id);
    }
  }

  handleSave(formData) {
    if (this.id) {
      this.issueService.modifyIssue(this.id, formData);
      this.location.back();
    } else {
      this.issueService.addIssue(formData);
      this.router.navigate(['/issues']);
    }
  }
}
