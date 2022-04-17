import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  addCommentAsReply(commentId: number, reply: Comment) {

  }

  addCommentToGiveaway(giveawayId: number, comment: Comment) {

  }
}
