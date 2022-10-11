import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { singIn, User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlBase:string = 'https://localhost:44360/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  SignIn(request: singIn): Observable<any> {
    let url: string = `${this.urlBase}api/Account`;
    return this.http.post<any>(url, request, this.httpOptions);
  }
  SignUp(request: User): Observable<any> {
    let url: string = `${this.urlBase}api/User`;
    return this.http.post<any>(url, request, this.httpOptions);
  }
}
