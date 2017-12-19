import { Component, ChangeDetectionStrategy } from '@angular/core';
import { City } from './city';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  cities = [new City('Karachi'), new City('Lahore'), new City('Islamabad')];
  city: string;

  addCity(event: any) {
    if (event.key === 'Enter' && this.city !== undefined) {
      this.cities.push(new City(this.city));
      // this.cities = this.stupidClone(this.cities);
      this.city = '';
    }
  }

  stupidClone (src) {
    return JSON.parse(JSON.stringify(src));
  }
}
