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
  @Input() comments!: Comment[];
  commentText!: string;

  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
  }

  submit() {
    let commentToAdd: Comment = {
      "text": this.commentText,
      "user": {"id": +localStorage.getItem("user_id")},
    }
    this.commentService.addCommentToGiveaway(this.giveawayId, commentToAdd);
  }

}
