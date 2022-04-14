export interface Giveaway {
    "id": number,
    "start_time": string,
    "end_time": string,
    "isbn": string,
    "book_title": string,
    "creator": {
        "user_id": number,
        "username": string
    },
    "winner": {
        "user_id": number,
        "username": string
    } | null, 
    "entries": [
            {"user_id": number,
            "username": string}
        ]
}
