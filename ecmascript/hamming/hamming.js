function Hamming(){

  this.compute = (strand1, strand2) =>{
    if (strand1.length !== strand2.length){
      throw new Error('DNA strands must be of equal length.');
    }

    var distance = 0;

    Array.from(strand1).forEach((val, index) =>{
      if (val !== strand2[index]) distance++
    })
    
    return distance;
  }

}


export default Hamming;
