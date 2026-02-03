import {apiClient} from "@/lib/apiClient";
import apiTable from "@/lib/apiTable";
import apiToken from "@/lib/apiToken";
import DataCandlesticksByAssetRequest from "@/types/DataCandlesticksByAssetRequest";
import DataCandlesticksByAssetResponse from "@/types/DataCandlesticksByAssetResponse";


export default async function dataCandlesticksByAssetService(params: DataCandlesticksByAssetRequest) {
    params.token = apiToken(`/data/candlestick/${params.assetId}`);
    const {data} = await apiClient.get<DataCandlesticksByAssetResponse>(`/data/candlestick/${params.assetId}?${apiTable(params).toString()}`);

    return data;
}
