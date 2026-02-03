export default interface TableRequest {
    authentication?: string;

    filters: TableRequestFilter[],

    limit: number;

    offset: number;

    sorts: TableRequestSort[],

    token?: string;
}


export interface TableRequestFilter {
    column: string;

    regex: boolean;

    type: 'Boolean' | 'DateRange' | 'Enum' | 'ObjectId' | 'String';

    value: string;
}


export interface TableRequestSort {
    column: string;

    direction: number;
}
