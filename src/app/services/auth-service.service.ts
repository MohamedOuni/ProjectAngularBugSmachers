import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:1212/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private http: HttpClient) { }

  register(nom : string ,prenom :string ,username: string, email: string, password: string , dateNaissance:Date ,roles: string[] =[] ): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        nom
        ,prenom 
        , username 
        , email 
        ,password 
        ,dateNaissance 
        ,roles
      },
      httpOptions
    );
  }
  

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}

