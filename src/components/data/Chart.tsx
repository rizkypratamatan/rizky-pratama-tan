"use client";

import useDataCandlesticksByAsset from "@/hooks/useDataCandlesticksByAsset";
import cssVariable from "@/lib/cssVariable";
import {RootState} from "@/stores/store";
import Data from "@/types/Data";
import DataState from "@/types/DataState";
import {
    createChart,
    ColorType,
    IChartApi,
    CandlestickSeries,
    ISeriesApi,
    CandlestickData,
    Time, UTCTimestamp
} from 'lightweight-charts';
import React, {RefObject, useEffect, useMemo, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";


export default function Chart() {
    const dataState: DataState = useSelector((state: RootState) => state.data);
    const dispatch: Dispatch = useDispatch();

    const chartRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
    const chartApiRef: RefObject<IChartApi | null> = useRef<IChartApi | null>(null);
    const seriesRef: RefObject<ISeriesApi<'Candlestick'> | null> = useRef<ISeriesApi<'Candlestick'> | null>(null);

    const {data} = useDataCandlesticksByAsset({assetId: '698099e6a7494a2d6839e1a8', authentication: '', filters: [], limit: 200, offset: 0, sorts: [{column: 'timestamp', direction: -1}]});

    useEffect(() => {
        chartApiRef.current = createChart(chartRef.current!, {
            grid: {
                horzLines: {color: cssVariable('--border-100')},
                vertLines: {color: cssVariable('--border-100')}
            },
            layout: {
                background: {type: ColorType.Solid, color: 'transparent'},
                textColor: cssVariable('--text-100')
            },
            height: 500,
            width: chartRef.current!.clientWidth
        });

        seriesRef.current = chartApiRef.current.addSeries(CandlestickSeries, {
            borderDownColor: cssVariable('--trading-view-candlestick-down'),
            borderUpColor: cssVariable('--trading-view-candlestick-up'),
            downColor: cssVariable('--trading-view-candlestick-down'),
            upColor: cssVariable('--trading-view-candlestick-up'),
            wickDownColor: cssVariable('--trading-view-candlestick-down'),
            wickUpColor: cssVariable('--trading-view-candlestick-up')
        });

        const resize = () => {
            if(!chartApiRef.current) {
                return;
            }

            chartApiRef.current.applyOptions({
                width: chartRef.current!.clientWidth,
            });
        };
        window.addEventListener('resize', resize);

        return () => {
            window.removeEventListener('resize', resize);

            if(!chartApiRef.current) {
                return;
            }

            chartApiRef.current.remove();
        }
    }, []);

    const candlesticks: CandlestickData<Time>[] = useMemo(() => {
        if(!data) {
            return [];
        }

        return data.data.map((dataCandlestick: Data) => ({
            time: (Math.floor(Number(dataCandlestick.timestamp.$date.$numberLong) / 1000) as UTCTimestamp), // harus "YYYY-MM-DD" atau unix timestamp (detik)
            open: Number(dataCandlestick.price.open),
            high: Number(dataCandlestick.price.high),
            low: Number(dataCandlestick.price.low),
            close: Number(dataCandlestick.price.close)
        }));
    }, [data]);

    // 3) Update chart setiap data berubah
    useEffect(() => {
        const series = seriesRef.current;
        if (!series) return;

        series.setData(candlesticks);

        // optional: auto fit content setelah update
        chartApiRef.current?.timeScale().fitContent();
    }, [candlesticks]);

    return <section>
        <div ref={chartRef}></div>
    </section>;
}
