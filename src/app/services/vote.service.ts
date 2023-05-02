import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vote } from '../core/model/vote';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VoteService {
  getVoteForPost(postId: number | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}


  vote(): Observable<any> {
    return this.http.post('http://localhost:1212/api/auth/votes',null);
    
  }
}

