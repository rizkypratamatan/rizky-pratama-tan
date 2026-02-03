import TableRequest, {TableRequestFilter, TableRequestSort} from "@/types/TableRequest";


export default function apiTable(params: TableRequest) {
    const url = new URLSearchParams();
    url.append('authentication', params.authentication ?? '');
    url.append('limit', params.limit.toString());
    url.append('offset', params.offset.toString());
    url.append('token', params.token ?? '');

    if(params.filters && params.filters.length > 0) {
        params.filters.forEach((filter: TableRequestFilter, index: number) => {
            url.append(`filters[${index}][column]`, filter.column);
            url.append(`filters[${index}][regex]`, filter.regex.toString());
            url.append(`filters[${index}][type]`, filter.type);
            url.append(`filters[${index}][value]`, filter.value);
        });
    }

    if(params.sorts && params.sorts.length > 0) {
        params.sorts.forEach((sort: TableRequestSort, index) => {
            url.append(`sorts[${index}][column]`, sort.column);
            url.append(`sorts[${index}][direction]`, sort.direction.toString());
        });
    }

    return url;
}
