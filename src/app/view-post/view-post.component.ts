import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../core/model/post';
import { CommentService } from '../services/comment.service';
import { Comment } from '../core/model/comment';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {
  id!: number;
  postId!: number;
  post?: Post;
  commentForm!: FormGroup;
  commentPayload: any;
  comments: Comment[] = [];
  comment: Comment = new Comment();

  constructor(
    private postService: PostService,
    private activateRoute: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) {
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
    this.getCommentsForPost();
    this.refresh();
  }

  private getPostById() {
    this.postService.getPost2(this.postId).subscribe(
      (data) => {
        this.post = data;
        console.log(this.post);
      },
      (error) => {
        throwError(error);
      }
    );
  }

  onSubmit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.commentService.addComment(this.comment, this.id).subscribe(() => {
      this.getCommentsForPost(); // retrieve updated comments after adding comment
      this.comment = new Comment(); // reset comment model
    });
  }

  onDelete(id: number) {
    this.commentService.deleteComment(id).subscribe({
      next: () => {
        // Supprimer le commentaire du tableau de commentaires
        const index = this.comments.findIndex((c) => c.id === id);
        if (index >= 0) {
          this.comments.splice(index, 1);
          console.log('Comment deleted successfully.');
        }
      },
      error: (err: any) => {
        console.error('Error while deleting comment:', err);
      }
    });
  }

  private getCommentsForPost() {
    this.commentService.getAllCommentsForPost(this.postId).subscribe(
      (data) => {
        this.comments = data;
        console.log(this.comments); // afficher les commentaires dans la console pour vérifier
      },
      (error) => {
        throwError(error);
      }
    );
  }
  // updateComment(): void {
  //   this.commentService.updateComment(this.commentId, this.comment).subscribe(updatedComment => this.comment = updatedComment);
  // }

  refresh(): void {
    this.postService.getAllPosts().subscribe(
      (data: Post[]) => {
        this.commentPayload = data;
        console.log('Posts refreshed successfully.');
      },
      (error) => {
        console.error('Error while refreshing posts:', error);
      }
    );
  }
}
