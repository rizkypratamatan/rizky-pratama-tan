import Base, {TimestampDate} from "@/types/Base";


export default interface Data extends Base {
    analysis: DataAnalysis;

    change: DataChange;

    price: DataPrice;

    timeframe: 'FifteenMinutes' | 'FiveMinutes' | 'FourHours' | 'OneDay' | 'OneHour' | 'OneMinute' | 'OneMonth' | 'ThirtyMinutes';

    timestamp: TimestampDate;

    volume: number;
}


export interface DataAnalysis {
    classification: 'Bearish' | 'Bullish' | 'Sideways';

    prediction: 'Bearish' | 'Bullish' | 'Sideways';

    target: number;
}


export interface DataChange {
    amount: number;

    percentage: number;
}


export interface DataPrice {
    close: number;

    high: number;

    low: number;

    open: number;
}
