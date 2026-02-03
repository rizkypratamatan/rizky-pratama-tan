import Data from "@/types/Data";
import TableResponse from "@/types/TableResponse";


export default interface DataCandlesticksByAssetResponse extends TableResponse {
    data: Data[];
}
