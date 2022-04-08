export interface Giveaway {
    "id": number,
    "start_time": string,
    "end_time": string,
    "isbn": string,
    "book_title": string,
    "creator_id": number,
    "winner_username": string | null,
    "entries": [
            {"user_id": number,
            "username": string}
        ]
}
