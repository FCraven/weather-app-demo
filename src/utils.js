
export class DateObj {
  constructor(unixTimestamp){
    // Short Months array
    this.short_months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //Long Month array
    this.long_months_arr = ['January', 'February', 'March', 'April','May','June','July','August','September','October','November','December']
    // Convert timestamp to milliseconds
    this.date = new Date(unixTimestamp * 1000);
    // Year
    this.year = this.date.getFullYear();
    //Month
    this.month = this.long_months_arr[this.date.getMonth()];
    // ShortMonth
    this.shortMonth = this.short_months_arr[this.date.getMonth()];
    // Day
    this.day = this.date.getDate();
    // Hours
    this.hours = this.date.getHours();
    // Minutes
    this.minutes = this.date.getMinutes() < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
    // Seconds
    this.seconds = this.date.getSeconds() < 10 ? '0' + this.date.getSeconds() : this.date.getSeconds()
    // Display date time in MM-dd-yyyy h:m:s format
    this.dateAndTimeString = this.shortMonth+ '-' + this.day + '-' + this.year + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds;
    //Display time in 24 hours
    this.militaryTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    //Display time in 12 hours
    this.twelveHourTime  = this.hours > 12 ? `${(+this.hours-12).toString()}`: `${this.hours}:${this.minutes}:${this.seconds}`
  }
 }



