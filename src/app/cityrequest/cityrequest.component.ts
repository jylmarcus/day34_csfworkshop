import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherserviceService } from '../weatherservice.service';
import { Router } from '@angular/router';
import { Weather } from '../weather';

@Component({
  selector: 'app-cityrequest',
  templateUrl: './cityrequest.component.html',
  styleUrls: ['./cityrequest.component.css']
})
export class CityrequestComponent implements OnInit{
  form: FormGroup = new FormGroup({});

  weather!: Weather;

  constructor(private fb: FormBuilder, private weatherService: WeatherserviceService, private router: Router) { }

  ngOnInit(){
    this.form = this.fb.group({
      city: ['', Validators.required],
      apikey: ['', Validators.required]
    });
  }

  processForm(form: any){
    this.weatherService.getWeatherByCity(this.form.value.city, this.form.value.apikey)
      .subscribe((data)=> this.weather = data);
  }
}
