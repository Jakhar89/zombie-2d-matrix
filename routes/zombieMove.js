let zombieList;  
let x,y;
let finalResult;
let moveFunc=(arr,aX,aY,mv,n,zombieL,final)=>{
    //parameter extraction
    zombieList=zombieL;
    [x,y]=[aX,aY];
    finalResult=final;
//Running moves    
mv.forEach((m,i)=>{
    let last=0; 
    let calcD;
    //console.log(m)

    //Setting last move variable
    if(i==mv.length-1){
      last=1;
    }

  switch (m){
    case "D": 
        //set new coordinates and calculate 
        let[dn1,dn2]= [x,y+1<n?y+1:0];
        calcD= calc(dn1,dn2,last,arr);
        //setting updated values
        [x,y]=[dn1,dn2];
        arr[x][y] = calcD;

        break;
    case "L":
        //set new coordinates and calculate 
        let [lt1,lt2] = [x-1>=0?x-1:n-1,y];
        calcD = calc(lt1,lt2,last,arr);
        //setting updated values
        [x,y]=[lt1,lt2];
        arr[x][y] = calcD;

        break;
    case "U":
        //set new coordinates and calculate 
        let [up1,up2]=[x,y-1>=0?y-1:n-1];
        calcD = calc(up1,up2,last,arr);
        //setting updated values
        [x,y]=[up1,up2];
        arr[x][y] = calcD;

        break;
    case "R":
        //set new coordinates and calculate 
        let [rt1,rt2]=[x+1<n?x+1:0,y];
        calcD = calc(rt1,rt2,last,arr);
        //setting updated values
        [x,y]=[rt1,rt2];
        arr[x][y] = calcD;

        break;
    default:
       break;
     }
  })

  //returning updated zombie list for next run
  //final array for this move
  return {'arr':arr,'zombies':zombieList,'final':finalResult};
}

let calc=(X,Y,last,arr)=>{
    let currentVal = arr[X][Y];
    if(currentVal==0 || last>0){
      if(currentVal==0){
        //Pushing Humans converted to zombie
        zombieList.push([X,Y]);
        finalResult.score=finalResult.score+1;
      }
      if(last>0){
        finalResult.pos.push([X,Y]);
      }
        currentVal=1;
      
    };
    return currentVal;
  };
module.exports=moveFunc;