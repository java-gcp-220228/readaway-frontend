import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getComments(giveawayId: number): Comment[] {
    let comment1: Comment = {
      "id": 1,
      "comment_text": "comment",
      "post_time": new Date().toISOString(),
      "user_id": 1,
      "parent_comment_id": 3,
      "replies": []
    }
    let comment2: Comment = {
      "id": 2,
      "comment_text": "comment2",
      "post_time": new Date().toISOString(),
      "user_id": 1,
      "giveaway_id": 1,
      "replies": []
    }
    let comment3: Comment = {
      "id": 3,
      "comment_text": "comment3",
      "post_time": new Date().toISOString(),
      "user_id": 1,
      "giveaway_id": 1,
      "replies": [comment1]
    }
    return [comment3, comment2];
  }

  addComment(comment: Comment) {

  }
}
