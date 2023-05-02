
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../core/model/post';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  createPostForm!: FormGroup;
  postPayload: any;

  errorMessage = '' ;

  constructor(private router: Router,
    private postService: PostService) {}

  ngOnInit() {
    this.createPostForm = new FormGroup({
      title: new FormControl('', Validators.required),
      body: new FormControl('', Validators.required), 
     
    });
    
  }
    createPost() {
      
      this.postService.addPost(1,this.createPostForm.value).subscribe({ next:(data) => {
        console.log(data);
      }});
    }
    
    discardPost() {
      this.router.navigateByUrl('/');
    }
   }
 
