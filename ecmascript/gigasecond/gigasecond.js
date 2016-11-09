class Gigasecond{
  constructor(dateInput){
    this.dateInput = dateInput;
    this.millionSeconds = 1000000000000;
  }

  date(){
    const dateInput = this.dateInput.getTime();
    const endTime = new Date(dateInput + this.millionSeconds)
    return endTime;
  }
}

export default Gigasecond;
