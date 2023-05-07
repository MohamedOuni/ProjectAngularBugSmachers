import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../services/post.service';
import { Post } from '../core/model/post';
import { VotePostService } from '../services/vote-post.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', animate(1000)),
    ]),
  ]
})
export class PostTileComponent implements OnInit {
  posts!: Post[];
  length: any;
  faComments : any;
  sortDirection = 'desc';
  

  constructor(
    private voteService: VotePostService,
    private router: Router,
    private postService: PostService,
    private commentService: CommentService // Ajout du service de commentaires

  ) {}

  ngOnInit(): void {
    this.refresh();
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
        console.log('Vote successful.');
        this.refresh();
      },
      (error) => {
        console.error('Error while voting:', error);
      }
    );
  }

  delete(id: number) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.postId != id);
        console.log('Post deleted successfully.');
        this.refresh();
      },
      error: (err) => {
        console.error('Error while deleting post:', err);
      }
    });
  }

  redirection(id: any) {
    this.router.navigate([`/update-post/${id}`]);
  }

  refresh(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.posts = data;
        console.log('Posts refreshed successfully.');
        // Appel du service de commentaires pour chaque post
        this.posts.forEach(post => {
          this.commentService.getCommentCount(post.postId).subscribe(
            (count: number) => {
              post.commentCount = count;
            },
            (error: any) => {
              console.error('Error while fetching comment count for post:', post, error);
            }
          );
        });
        this.sortPosts();
      },
      (error) => {
        console.error('Error while refreshing posts:', error);
      },
      () => {
        this.length = this.posts.length;
      }
    );
  }


  sortPosts(): void {
    this.posts.sort((a: Post, b: Post) => {
      if (this.sortDirection === 'desc') {
        return new Date(b.dateCreated).valueOf() - new Date(a.dateCreated).valueOf();
      } else {
        return new Date(a.dateCreated).valueOf() - new Date(b.dateCreated).valueOf();
      }
    });
  }

  toggleSortDirection(): void {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
    this.sortPosts();
  }
}
