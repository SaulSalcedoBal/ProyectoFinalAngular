import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
export class UserService {
  private apiUrl = 'https://serviciorestproyectofinalserviciosq3.azurewebsites.net/api/usuario';

  

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/login', user, httpOptions).pipe()
  }

  create(data: any): Observable<any> {

    return this.http.post(this.apiUrl + '/posts/', JSON.stringify(data))

    .pipe(
      catchError(this.errorHandler)
    )
  } 
  
  
  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
