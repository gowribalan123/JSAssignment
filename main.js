let num=parseInt(prompt("Enter a number between 0 and 1 million"))
 

if(num > 0 && num < 1000000)
{
    document.write("The number entered is = " +num)
    let sum1=sum(num)
    document.write("<br><br>")
    document.write("The sum of numbers upto " +num  , " is ",  +sum1)
    
}
else
{
     document.write("Invalid Number")
}


function sum(n){
let sum=0
for(let i=0;i<=n;i++)
{
    sum=sum+i
  
}
  return sum
}