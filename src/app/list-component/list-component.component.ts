import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponentComponent implements OnInit {

  @Input() attendees;

  constructor() { }

  ngOnInit() {
  }

}
