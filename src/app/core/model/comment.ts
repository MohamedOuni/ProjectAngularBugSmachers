import { Post } from "./post";
import { Vote } from "./vote";

export class Comment {
  id!: number;
body!:string;
  dateCreated!: Date;

  score!: number;
}


