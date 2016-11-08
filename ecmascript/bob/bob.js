//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  hey(message) {




    let uppercase = 0;
    let lowercase = 0;

    // test if all caps // ANGRY
    Array.from(message).forEach((val, index) =>{
      if (val.toUpperCase() !== val.toLowerCase() && val.toUpperCase() === val && isNaN(val)){
        uppercase++;
      }else if(val.toLowerCase() !== val.toUpperCase() && val.toLowerCase() === val && isNaN(val)){
        lowercase++;
      }
    })
    if (uppercase > lowercase && !message.includes('\xfc')){
      return "Whoa, chill out!";
    }

    //test if asking a question not angry
    if (message.slice(-1) === "?"){
      return "Sure.";
    }

    if (message.trim() == ''){
      return "Fine. Be that way!"
    }

    // default return
    return "Whatever.";
  }
}

export default Bob;
