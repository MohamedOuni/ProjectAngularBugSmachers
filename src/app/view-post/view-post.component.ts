import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../core/model/post';

import { Comment } from '../core/model/comment';
import { CommentService } from '../services/comment.service';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
id!:number;
  postId!: number;
  post?: Post;
  commentForm!: FormGroup;
  commentPayload: any;
  comments!: Comment[];
  public comment: Comment= new Comment();
  
  constructor(private postService: PostService, private activateRoute: ActivatedRoute,
    private commentService: CommentService, private router: Router) {
    this.postId = this.activateRoute.snapshot.params['id'];

    this.commentForm = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.commentPayload = {
      text: '',
      postId: this.postId
    };
  }

  ngOnInit(): void {
    this.getPostById();
    
   
  }
 

  private getPostById() {
    this.postService.getPost2(this.postId).subscribe((data) => {
      this.post = data;
      console.log(this.post)
    }, error => {
      throwError(error);
    });
  }
  onSubmit(){this.id= this.activateRoute.snapshot.params['id'];
  console.log(this.id);
    //update
    
    

    this.commentService.addComment(this.comment,this.id).subscribe(()=>{ 
      
      this.router.navigate(['/detailtender',this.id])
     
    }

   
    )
    
    console.log("ngfn",this.comment);
  

    }
   
  }
  


