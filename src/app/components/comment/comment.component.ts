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
      "text": this.commentText,
      "user": JSON.parse(localStorage.getItem('user_info')),
    }
    this.commentService.addCommentAsReply(this.comment.id, commentToAdd);
  }

}
