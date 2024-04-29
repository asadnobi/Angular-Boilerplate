import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }

  // Example GET request to fetch data from the API
  fetchData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/data`).pipe(
      catchError(error => {
        // Handle errors here (e.g., log them, display an error message)
        console.error('Error fetching data:', error);
        throw error; // Rethrow the error to propagate it to the subscriber
      })
    );
  }

  // Example POST request to send data to the API
  sendData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/data`, data).pipe(
      catchError(error => {
        // Handle errors here (e.g., log them, display an error message)
        console.error('Error sending data:', error);
        throw error; // Rethrow the error to propagate it to the subscriber
      })
    );
  }

  // You can add more methods for different types of requests (PUT, DELETE, etc.) as needed
}
