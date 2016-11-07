function rna(){

  this.toRna =  function(dna){

    let rna = [];

    for (let i = 0; i < dna.length; i ++){
      switch (dna[i]){
        case 'G':
          rna.push('C');
          break;
        case 'C':
          rna.push('G');
          break;
        case 'T':
          rna.push('A');
          break;
        case 'A':
          rna.push('U');
          break;
        default:
          break;
        }
      }
    return rna.join('');
  }

}


export default rna;
