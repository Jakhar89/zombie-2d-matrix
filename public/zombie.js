//var canvaS = $('#mainground');
var createGround = (para)=>{
  var {n,z,hmn,move}={...para};
  [z1,z2]=[...z];
  let mv= [...move];
  let zombie = [[z1,z2]];
  
  let finalR={score:0,pos:[]};
  
  
  console.log(n);
  var myArray1 = new Array(n)

for (i = 0; i < n; i++){
    myArray1[i] = new Array(n)
}
start= -1;
for (var i = 0; i < n; i++)
{
    for (var j = 0; j < n; j++)
    {
        myArray1[i][j] = start;
    }
}
  
myArray1[z1][z2]   = 1;
  
  hmn.forEach(el=>{
    let [el1,el2]=[...el];
    myArray1[el1][el2] = 0;

  })
  
  //print
  var print = (arr)=>{
  for (var i = 0; i < n; i++)
{
    for (var j = 0; j < n; j++)
    {
        document.write(`&nbsp; ${arr[j][i]} &nbsp;  &nbsp`);
    }
    document.write("<br/>");
}
    document.write("<br/>");
  }//print end
  print(myArray1);
  
  
 let calc=(X,Y,last)=>{
   let currentVal = myArray1[X][Y];
   if(currentVal==0 || last>0){
     if(currentVal==0){
        zombie.push([X,Y])
        finalR.score=finalR.score+1;
     }
     if(last>0){
      finalR.pos.push([X,Y])
     }
     currentVal=1;
   };
   
   return currentVal;
 };

  
  
let job =()=>{ zombie.forEach(el=>{
    let [x,y]=[...el];
    myArray1[x][y]=-1;
    let clear = zombie.indexOf(el);
    clear!= -1?zombie.splice(clear,1):null;
    
    //Move started
    mv.forEach((m,i)=>{
      let last=0; 
       let calcD;
       console.log(m)
      if(i==mv.length-1){
        last=1;
      }
    switch (m){
      case "D": 
         //let [dn1,dn2] =[...calcD.cor] ;
        let[dn1,dn2]= [x,y+1<n?y+1:0];
        console.log(`dn${dn1}+dn${dn2}`)
         calcD= calc(dn1,dn2,last);
        myArray1[dn1][dn2] = calcD;
        [x,y]=[dn1,dn2];
        break;
      case "L":
        let [lt1,lt2] = [x-1>=0?x-1:n-1,y];
        console.log(`lt${lt1} + lt${lt2}`)
        calcD = calc(lt1,lt2,last);
        myArray1[lt1][lt2] = calcD;
        [x,y]=[lt1,lt2];
        break;
      case "U":
         let [up1,up2]=[x,y-1>=0?y-1:n-1];
        console.log(`up${up1} + up${up2}`)
        calcD = calc(up1,up2,last);
        myArray1[up1][up2] = calcD;
        [x,y]=[up1,up2];
        break;
      case "R":
         let [rt1,rt2]=[x+1<n?x+1:0,y];
        console.log(`rt${rt1} + rt${rt2}`)
        calcD = calc(rt1,rt2,last);
        myArray1[rt1][rt2] = calcD;
        [x,y]=[rt1,rt2];
        break;
      default:
         null;
       }
    })
  })//Zombie end
  if(zombie.length>0){
    
    //console.log(zombie);
   //let re = window.confirm()
    job()
    //print(myArray1);
  }else{
    print(myArray1);
    document.write(`Score: ${finalR.score} <br/>
    Positions: ${finalP(finalR.pos)}`)
  }
}//Job end
  
job()
//create gorund end below
}
//input
let obj={
  n:4,z:[2,1],hmn:[[0,1],[1,2],[3,1]],move:'DLUURR'
}

//Printing final coordinates as string
let finalP=(fin)=>{
  let f='';
  fin.forEach(el=>{
    f+=`[${el}]` 
  }) 
  return f;
}

createGround(obj)
