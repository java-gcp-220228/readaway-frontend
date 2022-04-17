import { User } from "./User";

export interface Comment {
    "id"?: number,
    "text": string,
    "postTime"?: string,
    "user": User,
    "replies"?: Comment[]
}