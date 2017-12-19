import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponentComponent implements OnInit {

  @Input() cities;

  constructor() { }

  ngOnInit() {
  }

  getWeather() {
    console.log('%c getWeather()', 'color:red');
    // simulate a delay in getting weather. Just for demostration purpose.
    const start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 10) {
        break;
      }
    }
    return 25;
  }

}
