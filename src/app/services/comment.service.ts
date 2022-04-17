import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url: string = "http://localhost:8081";

  constructor(private http: HttpClient) { }

  addCommentAsReply(commentId: number, reply: Comment) {
    this.http.post(`${this.url}/comments/${commentId}/replies`, reply, {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    }).subscribe();
  }

  addCommentToGiveaway(giveawayId: number, comment: Comment) {
    this.http.post(`${this.url}/giveaways/${giveawayId}/comments`, comment, {
      'observe': 'response',
      'headers': { Authorization: `Bearer ${localStorage.getItem('jwt')}`}
    }).subscribe();
  }
}
