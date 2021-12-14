import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../model/empleado';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  //URL API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  /*=========================================
    Metodos CRUD para consumir el API RESTful
  ===========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch empleados list
  getEmpleados(): Observable<Empleado> {
    return this.http
      .get<Empleado>(this.apiURL + '/empleados')
      .pipe(retry(1), catchError(this.handleError));
  }
  // Manejo de errores
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  // HttpClient API delete() method => Delete empleado
  deleteEmpleado(id:any) {
    return this.http.delete<Empleado>(this.apiURL + '/empleados/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Crear empleado
  createEmpleado(empleado:any): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiURL + '/empleados', JSON.stringify(empleado), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
   // HttpClient API get() method => Consulta un empleado
   getEmpleado(id:any): Observable<Empleado> {
    return this.http.get<Empleado>(this.apiURL + '/empleados/' + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  
  // HttpClient API put() method => Actualiza un empleado
  updateEmpleado(id:any, empleado:any): Observable<Empleado> {
    return this.http.put<Empleado>(this.apiURL + '/empleados/' + id, JSON.stringify(empleado), 
this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }
}
