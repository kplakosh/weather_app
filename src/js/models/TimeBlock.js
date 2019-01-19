export default class TimeBlock {
    constructor(dayTime, rainPercentage, imgDescription, temp) {
        this.day_time = this.trimDateTimeString(dayTime);
        this.rain_percentage = rainPercentage;
        this.img_description = imgDescription;
        this.temp = this.transferTempToF(temp);
    }

    // Transform time of the day
    trimDateTimeString(time) {
        time = parseInt(time);
        if (time >= 12) {
            if (time === 12) {
                return '12PM';
            } else {
                return `${time - 12}PM`;
            }
        } else {
            if (time === 0) {
                return '12AM';
            }
            return `${time}AM`;
        }
    }

    // Calculate temperature from K(default) to F
    transferTempToF(temp) {
        return Math.round(1.8 * (temp - 273) + 32);
    }
}