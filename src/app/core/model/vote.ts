import { Post } from "./post";

export class Vote {
    voteId?: number;
    voteType?: string;
    post?: Post;
    comment?: Comment;
  }
  
  export enum TypeVote {
    UPVOTE = 'UPVOTE',
    DOWNVOTE = 'DOWNVOTE'
  }