import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../core/model/post';
import { VotePostService } from '../services/vote-post.service';



@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css']
})
export class PostTileComponent implements OnInit {

  posts!: Post[];
  length: any;

  constructor(private voteService: VotePostService, private router: Router, private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
        console.log(this.posts);
      },
      () => {
        console.log('error');
      },
      () => {
        this.posts = this.posts;
        this.length = this.posts.length;
      }
    );
  }

  goToPost(id: number): void {
    this.router.navigateByUrl('/view-post/' + id);
  }

  onVote(voteType: string, postId: number): void {
    const vote = {
      voteType: voteType,
      post: {
        postId: postId
      }
    };

    this.voteService.vote(vote).subscribe(
      () => {
        console.log('c bon ');
      },
      (error) => {
        console.error(' lerreur   ', error);
      }
    );
  }
}
