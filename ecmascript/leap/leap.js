const isLeapYear = function(year){

  // every year divisible by 4
  const rule1numb = year%4;

  if (rule1numb != 0){
    return false;
  }

  // divisible by 400
  const rule3numb = year%400;

  if (rule3numb == 0){
    return true;
  }

  // NOT evently divisible by 100
  const rule2numb = year%100;

  if (rule2numb == 0){
    return false;
  }

  return true;
};

export default isLeapYear;