import { Component, OnInit } from '@angular/core';
import { Post } from '../post/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  post!:Post[];
  idPost!:any;



  constructor(private v:ActivatedRoute,private pst:PostService,private router:Router)
  {

  }
  ngOnInit(): void {
    
  this.v.paramMap.subscribe(b => {this.idPost=b.get('id')})
      console.log(this.idPost)
      this.pst.getPost2(this.idPost).subscribe({
        next: (data:any) => {
          this.idPost = data[0]
        } ,
        error: (error) => console.log(error)
      });
  }

}
