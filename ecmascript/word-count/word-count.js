function words(){

  this.count = function(phrase){

  let wordMap = {};

  let lowerCaseWords = phrase.replace(/\n/i, " ").replace(/\s+/,' ').replace(/\t/i, " ").trim().split(" ").map((word) => word.toLowerCase())

  lowerCaseWords.forEach(function(word){
    if (wordMap.hasOwnProperty(word)){
      wordMap[word] = wordMap[word] + 1
      } else {
        wordMap[word] = 1
      }
    })
    return wordMap;
  }
}

export default words;
