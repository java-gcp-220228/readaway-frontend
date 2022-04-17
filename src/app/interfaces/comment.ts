import { UserInfo } from "./UserInfo";

export interface Comment {
    "id"?: number,
    "text": string,
    "postTime"?: string,
    "user": UserInfo,
    "replies"?: Comment[]
}