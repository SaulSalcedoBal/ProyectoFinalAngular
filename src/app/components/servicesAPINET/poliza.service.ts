import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable , throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const END_POINT: string = 'https://serviciorestproyectofinalserviciosq3.azurewebsites.net/api/usuario';
//const END_POINT: string = 'https://localhost:44398/api/poliza/usuario';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PolizaService {

  constructor(private http: HttpClient) {
  }

 datosPoliza (id: any): Observable<any> {
    return this.http
      .get<any>(
        `${END_POINT}/`+ id
      )
      .pipe( catchError(this.errorHandler))
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
