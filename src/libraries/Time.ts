export class Time {
    public static initializeTimezone(date: Date): string {
        let result: string;

        const offset: number = Math.abs(date.getTimezoneOffset() / 60);

        if(date.getTimezoneOffset() < 0) {
            result = '+' + ('0' + offset).slice(-2) + '00';
        } else {
            result = '-' + ('0' + offset).slice(-2) + '00';
        }

        return result;
    }


    public static toDateString(date: Date): string {
        let result: string = '';

        if(date !== null) {
            date = new Date(new Date(date.toString() + '+0000').toLocaleString('en-US', {timeZone: import.meta.env.PLD_TIMEZONE}));
            result = ('0' + date.getDate()).slice(-2) + ' ' + date.toLocaleString('default', {month: 'short'}) + ' ' + date.getFullYear();
        }

        return result;
    }


    public static toDateTimeString(date: any): string {
        let result: string = '';

        if(date !== null) {
            date = new Date(parseInt(date.$date.$numberLong));
            result = ('0' + date.getDate()).slice(-2) + ' ' + date.toLocaleString('default', {month: 'short'}) + ' ' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2);
        }

        return result;
    }


    public static toMonthShort(number: number): string {
        const date: Date = new Date();
        date.setMonth(number);

        return date.toLocaleString('en-US', {
            month: 'short',
        });
    }
}
