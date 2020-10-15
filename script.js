let firstBill=124;
let secondBill=48;
let thirdBill=75;
let fourthBill=268


function calculateTips(bill){

   let tip;
   if (bill<50 && bill>0){
    tip=bill * 0.20
   }else if(bill>50){
    tip=bill *0.15
   }else if (bill>200){
    tip=bill*0.10
   }else{
    console.log("Enter valid value")   
   }
 return Math.round(tip);
}
totalBill=firstBill+secondBill+thirdBill+fourthBill;
console.log( "Total bill is "+ totalBill )
console.log("The first restaurant tip is $"+calculateTips(firstBill)); 
console.log("The second restaurant tip is $"+calculateTips(secondBill))
console.log("The third restaurant tip is $"+calculateTips(thirdBill))
console.log("The fourth restaurant tip is $"+calculateTips(fourthBill))



function getTotalTips(){
  totalTips=calculateTips(firstBill)+calculateTips(secondBill)+calculateTips(thirdBill)+calculateTips(fourthBill);
  return totalTips;
  
}
console.log("Total paid tip is $" + getTotalTips())


function budgetDust(){
  let totalSpent=firstBill + secondBill + thirdBill + fourthBill+totalTips;
  let leftPercentage=Math.round(((750-totalSpent)/750)*100);
 if(leftPercentage>20){
  console.log("John stop spending !! Your budget only "+leftPercentage +"% left " )
  }
  return 
}
budgetDust()