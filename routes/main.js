var express = require('express');
var router = express.Router();
var createGround =require('./setPlayground');
var zMove = require('./zombieMove');
var print = require('./result');

router.post('/',(req,res,next)=>{
    //extracting values 
    let arr = createGround(req.body,res);
    let mv= [...req.body.move];
    let num = req.body.n;
    let finalR={score:0,pos:[]};//final scores and positions

    print(arr,num);//just for showcase purpose

    let startMoving = (zombieL,ground,final)=>{
        zombieL.forEach(async el=>{

            //foreach zombie starts moving
            //Pop out of the zombie list
            let [x,y]=[...el];
            arr[x][y]=-1;
            let clear = zombieL.indexOf(el);
            clear!= -1?zombieL.splice(clear,1):null;

            //start move
            let moveIt = await zMove(ground,x,y,mv,num,zombieL,final);

            //If more zombies added to the list
            //Pop zombies 1 by1 to move
            if(moveIt.zombies.length>0){
                startMoving(moveIt.zombies,moveIt.arr,moveIt.final);
            }else{
                //print(moveIt.arr,num)
                console.log(moveIt.final)
                res.send(moveIt.final);
            }
        })
    }
    startMoving([req.body.z],arr,finalR);
    
 
})

module.exports = router;