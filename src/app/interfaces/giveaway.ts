import { UserInfo } from "./UserInfo"


export interface Giveaway {
    "id"?: number,
    "startTime"?: string,
    "endTime": string,
    "isbn": string,
    "book_title"?: string,
    "creator": UserInfo,
    "winner"?: UserInfo | null, 
    "entries"?: UserInfo[],
    "comments": Comment[] | null
}
