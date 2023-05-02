import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Comment } from '../core/model/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
    private addUrl = 'http://localhost:1212/api/auth/comments/';

  constructor( private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>('http://localhost:1212/api/auth/comments/{{postId}}' + postId);
  }

  postComment(commentPayload: Comment): Observable<any> {
    return this.httpClient.post<any>('http://localhost:1212/api/auth/comments/{{postId}}', commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<Comment[]>('http://localhost:1212/api/auth/comments/{{id}}' + name);
  }
//   addComment(annonce: Comment,id: number): Observable<HttpResponse<any>> {
//     return this.httpClient.post<Comment>(this.addUrl+id, annonce,{observe : 'response'});
//   }
  addComment(comment: Comment,id: number): Observable<Comment> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = { headers: headers };
    return this.httpClient.post<Comment>('http://localhost:1212/api/auth/comments/{{id}}' + '/Add', JSON.stringify(comment), options);
  }


}

