export default interface Base {
    _id: Id;

    created: Timestamp;

    modified: Timestamp;
}


export interface Id {
    $oid: string;
}


export interface Timestamp {
    timestamp: TimestampDate;

    user: UserReference;
}


export interface TimestampDate {
    $date: TimestampDateNumberLong;
}


export interface TimestampDateNumberLong {
    $numberLong: string;
}


export interface UserReference {
    _id: Id;

    username: string;
}
