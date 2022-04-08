export interface Comment {
    "id"?: number,
    "comment_text": string,
    "post_time": string,
    "user_id": number,
    "giveaway_id"?: number,
    "parent_comment_id"?: number,
    "replies"?: Comment[]
}