import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() giveawayId!: number;
  comments!: Comment[];
  commentText!: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getComments(this.giveawayId);
  }

  submit() {
    let commentToAdd: Comment = {
      "comment_text": this.commentText,
      "post_time": new Date().toISOString(),
      "user_id": 1, //TODO get user id
      "giveaway_id": this.giveawayId
    }
    this.commentService.addComment(commentToAdd);
  }

}
