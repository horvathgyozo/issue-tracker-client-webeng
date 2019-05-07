import { Component, OnInit } from '@angular/core';
import { Issue } from '../issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit {

  issue: Issue = new Issue();
  id: number = null;

  constructor(
    private issueService: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = +id;
      // this.issue = await this.issueService.getIssue(this.id);
      this.issue = (await this.issueService.getIssueFromGraphQL(this.id)).data.issueById;
    }
  }

  async delete() {
    await this.issueService.deleteIssue(this.id);
    this.router.navigate(['/issues']);
  }

}
