import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotePostService {

  private apiUrl = 'http://localhost:1212/api/auth/votes';

  constructor(private http: HttpClient) { }
  vote(vote: any): Observable<void> {
    return this.http.post<void>(this.apiUrl, vote);
  }
}
