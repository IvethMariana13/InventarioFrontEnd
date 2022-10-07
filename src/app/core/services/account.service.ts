import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlBase:string='';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  SignIn(request: any) {
    let url: string = `${this.urlBase}api/user`;
    this.http.post<any>(url, request, this.httpOptions);
  }
}
