import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Issue } from '../issue';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit, OnChanges {

  @Input() issue: Issue;
  @Output() save = new EventEmitter<Issue>();

  form = this.fb.group({
    title: ['', [Validators.required]],
    place: ['', [Validators.required, Validators.pattern(/^PC\d+/)]],
    description: [''],
    status: ['NEW', [Validators.required]]
  });

  get title() { return this.form.get('title'); }
  get place() { return this.form.get('place'); }
  get description() { return this.form.get('description'); }
  get status() { return this.form.get('status'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.form.patchValue(this.issue);
  }

  onSubmit() {
    const emittedIssue = Object.assign(this.issue, this.form.value);
    this.save.emit(emittedIssue);
  }

}
