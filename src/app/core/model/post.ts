import { Topic } from "./topic";
import { Vote } from "./vote";

export class Post {
    postId!: number;
    title!: string;
    body!: string;
    dateCreated!: Date;
    comments!: Comment[];
    topic!: Topic;
    deleted!: boolean;
    deletedTime!: Date;
    votes!: Vote[];
    voteCount!: number;
    username?:string;
    createdDate: any;


    commentCount: number = 0;

    incrementCommentCount(): void {
      this.commentCount++;

  }
}