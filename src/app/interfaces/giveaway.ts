import { Comment } from "./comment"
import { User } from "./User"

export interface Giveaway {
    "id"?: number,
    "startTime"?: string,
    "endTime": string,
    "isbn": string,
    "book_title"?: string,
    "creator": User,
    "winner"?: User | null,
    "comments"?: Comment[], 
    "entrants"?: User[]
}
