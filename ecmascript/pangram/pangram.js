function pangram(){

  this.isPangram = function(sentence){

    if (!sentence){
      return false;
    }

    var cleaned = sentence.replace(/[^A-Za-z]/g, '').toLowerCase();

    var alphabet = {
      a:0,
      b:0,
      c:0,
      d:0,
      e:0,
      f:0,
      g:0,
      h:0,
      i:0,
      j:0,
      k:0,
      l:0,
      m:0,
      n:0,
      o:0,
      p:0,
      q:0,
      r:0,
      s:0,
      t:0,
      u:0,
      v:0,
      w:0,
      x:0,
      y:0,
      z:0
    }

    Array.from(cleaned).forEach((val, index) => {
      if (alphabet.hasOwnProperty(val)){
        alphabet[val]++;
      }
    })

    for (var letter in alphabet){
      if (alphabet.hasOwnProperty(letter) && alphabet[letter] != 1){
        return "false";
      }
    }

    return true;


  }



}



export default pangram;
