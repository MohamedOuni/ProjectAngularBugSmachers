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
     return this.httpClient.get<Comment[]>('http://localhost:1212/api/auth/comments/post/' + postId);
     
  }

getCommentCount(postId: number): Observable<number> {
    return this.httpClient.get<number>('http://localhost:1212/api/auth/forumPosts' + postId + '/count');
  }
  

  
  addComment(annonce: Comment,id: number): Observable<HttpResponse<any>> {
    return this.httpClient.post<Comment>(this.addUrl+id, annonce,{observe : 'response'});
  }



  
    getAllCommentsByUser(name: string) {
      return this.httpClient.get<Comment[]>('http://localhost:8080/api/comments/by-user/' + name);
    }

    deleteComment(commentId: number) {


        return this.httpClient.delete('http://localhost:1212/api/auth/comments/'+commentId);
      }
    }
  
  



