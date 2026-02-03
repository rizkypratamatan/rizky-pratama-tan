"use client";

import dataCandlesticksByAssetService from "@/services/dataCandlesticksByAssetService";
import DataCandlesticksByAssetRequest from "@/types/DataCandlesticksByAssetRequest";
import {useQuery} from "@tanstack/react-query";


export default function useDataCandlesticksByAsset(params: DataCandlesticksByAssetRequest) {
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['dataCandlesticksByAsset', params],
        queryFn: ({queryKey}) => {
            const [, params] = queryKey;
            return dataCandlesticksByAssetService(params as DataCandlesticksByAssetRequest);
        }
    });

    return {data, isLoading, isError, error};
}
