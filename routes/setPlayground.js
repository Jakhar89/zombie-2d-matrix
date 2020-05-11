//var canvaS = $('#mainground');

var createGround = (para,res)=>{
//console.log(para);

  var {n,z,hmn,move}={...para};
  [z1,z2]=[...z];
  
  //Building grid, 2d Array
  var myArray1 = new Array(n);
  for (i = 0; i < n; i++){
      myArray1[i]=new Array(n);
  }

  //Setting empty values
  let start= -1;
  for (var i = 0; i < n; i++)
  {
      for (var j = 0; j < n; j++)
      {
          myArray1[j][i] = start;
  
      }
  }
  
  //Setting Zombie position
  myArray1[z1][z2]   = 1;
  //Set human positions  
    hmn.forEach(el=>{
      let [el1,el2]=[...el];
      myArray1[el1][el2] = 0;
  
    })
    
    return myArray1;
}
module.exports = createGround;