export interface Comment {
    "id"?: number,
    "text": string,
    "postTime"?: string,
    "user": {"id": number},
    "replies"?: Comment[]
}