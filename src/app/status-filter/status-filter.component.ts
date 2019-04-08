import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.css']
})
export class StatusFilterComponent implements OnInit {

  @Input() status = 'ALL';
  @Output() statusChange: EventEmitter<string> = new EventEmitter<string>();
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      status: this.status
    });
  }

  handleChange() {
    this.statusChange.emit(this.radioGroupForm.value.status);
  }

}
