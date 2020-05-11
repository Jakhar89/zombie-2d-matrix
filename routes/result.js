//print
var print = (arr,n)=>{
    
for (var i = 0; i < n; i++)
{
    let string ='';
  for (var j = 0; j < n; j++)
  {
      string = string+`  ${arr[j][i]}  `;
  }
  console.log(string)
}
//  document.write("<br/>");
}//print end
module.exports= print;