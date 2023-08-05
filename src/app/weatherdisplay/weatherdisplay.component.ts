import { Component } from '@angular/core';
import { WeatherserviceService } from '../weatherservice.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weatherdisplay',
  templateUrl: './weatherdisplay.component.html',
  styleUrls: ['./weatherdisplay.component.css']
})
export class WeatherdisplayComponent {

  weather?: Weather = this.weatherService.weather;

  constructor(private weatherService: WeatherserviceService){}

}
