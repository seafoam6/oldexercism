const isLeapYear = function(year){

  const yearDivisibleBy4 = year%4;
  if (yearDivisibleBy4 != 0){
    return false;
  }

  const yearDivisibleBy400 = year%400;
  if (yearDivisibleBy400 == 0){
    return true;
  }

  const yearDivisibleBy100 = year%100;
  if (yearDivisibleBy100 == 0){
    return false;
  }

  return true;
};

export default isLeapYear;
