class Gigasecond{
  constructor(dateInput){
    this.dateInput = dateInput;
    this.billionSeconds = 1000000000000;
  }

  date(){
    const dateInput = this.dateInput.getTime();
    const endTime = new Date(dateInput + this.billionSeconds)
    return endTime;
  }
}

export default Gigasecond;
