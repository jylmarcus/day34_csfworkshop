import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Weather } from './weather';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  apiURL: string = "https://api.openweathermap.org/data/2.5/weather";

  weather!: Weather;

  constructor(private http: HttpClient) { }

  getWeatherByCity(city: string, apikey: string): Observable<Weather> {
    city = city.trim();
    apikey = apikey.trim();
    const params = new HttpParams().set('q', city).set('appid', apikey);
    return this.http.get<Weather>(this.apiURL, {params}).pipe(catchError(this.handleError<Weather>('getWeatherByCity')))
  }

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
