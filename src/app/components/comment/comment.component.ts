import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';
import { Comment } from '../../interfaces/comment'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment!: Comment;
  replyBoxToggled: boolean = false;
  commentText!: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  toggleReplyBox() {
    this.replyBoxToggled = !this.replyBoxToggled;
  }

  submit() {
    let commentToAdd: Comment = {
      "comment_text": this.commentText,
      "post_time": new Date().toISOString(),
      "user_id": 1, //TODO get user id
      "parent_comment_id": this.comment.id
    }
    this.commentService.addComment(commentToAdd);
  }

}
