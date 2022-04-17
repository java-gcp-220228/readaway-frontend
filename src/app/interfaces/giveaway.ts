import { UserInfo } from "./UserInfo"


export interface Giveaway {
    "id"?: number,
    "start_time"?: string,
    "end_time": string,
    "isbn": string,
    "book_title"?: string,
    "creator": UserInfo,
    "winner"?: UserInfo | null, 
    "entries"?: UserInfo[],
    "comments"?: Comment[]
}
