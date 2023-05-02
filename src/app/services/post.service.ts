// import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Post } from '../core/model/post';
// import { Observable } from 'rxjs';



// @Injectable({
//     providedIn:'root'
// })
// export class PostService {

//   public url= ' http://localhost:1212/api/auth/forumPosts'

//   constructor(private http:HttpClient) {}

//   getAllPosts() {
//     return this.http.get<Post[]>(this.url)
//   }
 
//   addPost(topicId: any , post: any) :Observable<any> {
//     return this.http.post(`${this.url}/add/${topicId}`, post);
//   }
  

  
//   updatePost(id:number, newPost: Post) {
//     return this.http.put(this.url+'/update/'+id,newPost)
//   }

//   getPostById(id:number){
//     return this.http.get<Post>(this.url+'/display/'+id)
//   }
//   deletePost(id:number){
//     return this.http.delete(this.url+'/delete/'+id)
//   }
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../core/model/post';
import { Observable } from 'rxjs';



@Injectable({
    providedIn:'root'
})
export class PostService {
 /* getPost(postId: number | undefined) {
    throw new Error('Method not implemented.');
  }*/

  public url= ' http://localhost:1212/api/auth/forumPosts'

  constructor(private http:HttpClient) {}

  getAllPosts() {
    return this.http.get<Post[]>(this.url)
  }
 
  addPost(topicId: any , post: any) :Observable<any> {
    return this.http.post(`${this.url}/add/${topicId}`, post);
  }
  

  
  updatePost(id:number, newPost: Post) {
    return this.http.put(this.url+'/update/'+id,newPost)
  }

  getPostById(id:number) : Observable<Post>{
    return this.http.get<Post>(this.url+'/display/'+id)
  }
  deletePost(id:number){
    return this.http.delete(this.url+'/delete/'+id)
  }
  


  getPost2(id: number): Observable<Post> {
    return this.http.get<Post>(this.url+'/'+ id);


}}




// }