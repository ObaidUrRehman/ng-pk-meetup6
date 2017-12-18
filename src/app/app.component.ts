import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Attendee } from './attendee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  attendees = [
    new Attendee(9, 'Umair'),
    new Attendee(2, 'Anas'),
    new Attendee(3, 'Ahsan'),
    new Attendee(4, 'Mashood'),
    new Attendee(5, 'Kamran')
  ];

  constructor() {
  }

  onRefreshItem() {
    this.attendees = this.getItems();
  }

  getItems() {
    return [
      new Attendee(9, 'Umair'),
      new Attendee(2, 'Anas'),
      new Attendee(3, 'Ahsan'),
      new Attendee(4, 'Mashood'),
      new Attendee(5, 'Kamran'),
      new Attendee(99, 'Obaid')
    ];
  }

  trackByFn(index, item: Attendee) {
    return item.id;
  }

}
