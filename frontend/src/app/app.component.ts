import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { catchError } from 'rxjs/operators'; // Import catchError
import { throwError } from 'rxjs'; // Import throwError

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Corrected styleUrls (not styleUrl)
})
export class AppComponent {
  title = 'frontend';

  constructor(private _http: HttpClient) { // Inject HttpClient
    this.getData(); // Call the getData method in the constructor
  }

  getData() {
    this._http.get('http://localhost:8080/api').pipe(
      catchError(error => {
        console.error('Error occurred while fetching data:', error);
        return throwError(() => error); // Re-throw the error for further handling
      })
    ).subscribe({
      next: (data) => {
        console.log('API Response:', data); // Log the response data to the console
      },
      error: (error) => {
        console.error('Error fetching data:', error.message);
      }
    });
  }
}