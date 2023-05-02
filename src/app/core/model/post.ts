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
  }
  