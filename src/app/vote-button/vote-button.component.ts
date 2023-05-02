import { Component, Input, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';
import { PostService } from '../services/post.service';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TypeVote } from '../core/model/vote';
import { Post } from '../core/model/post';





@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.css']
})
export class VoteButtonComponent implements OnInit{
  @Input() post?: Post;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  typeVote: any;
  upvoteColor?: string;
  downvoteColor?: string;
  

  constructor(private voteService: VoteService,
    private postService: PostService) {

  }

  ngOnInit(): void {
    this.updateVoteDetails();
  }

  upvotePost() {
    this.typeVote = TypeVote.UPVOTE;
    this.vote();
    this.downvoteColor = '';
  }

  downvotePost() {
    this.typeVote = TypeVote.DOWNVOTE;
    this.vote();
    this.upvoteColor = '';
  }

  private vote() {
    // this.voteService.vote(this.votePayload).subscribe(() => {
    //   this.updateVoteDetails();
    // }, error => {
    //   this.toastr.error(error.error.message);
    //   throwError(error);
    // });
  }

  private updateVoteDetails() {
    if (this.post) {
      let upVoted = false;
      let downVoted = false;
      for (const vote of this.post.votes) {
        if (vote.voteType === TypeVote.UPVOTE) {
          upVoted = true;
        }
        if (vote.voteType === TypeVote.DOWNVOTE) {
          downVoted = true;
        }
      }
      this.upvoteColor = upVoted ? 'primary' : '';
      this.downvoteColor = downVoted ? 'warn' : '';
    }
  }
}

