// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;
  const newDepositAmountNumb = parseInt(newDepositAmount);
  if(newDepositAmountNumb > 0){
        /* 
  1. get previous deposit total by id
  
  */
 const previousDepositTotal = document.getElementById("deposit-total").innerText;
 
 // calculate new deposit total
 const newDepositTotal = parseInt(previousDepositTotal) + newDepositAmountNumb;
//  console.log(typeof newDepositTotal, previousDepositTotal, newDepositAmount);
 // set deposit total value
 // setTextElementValueById("deposit-total", newDepositTotal);
 document.getElementById("deposit-total").innerText = newDepositTotal
 
 // get previous balance by using the function
 const previousBalanceTotal = document.getElementById("balance-total").innerText;
 const previousBalance = parseInt(previousBalanceTotal)
 console.log('value', typeof previousBalance)
  const newBalanceTotal = previousBalance + newDepositAmountNumb;
  document.getElementById("balance-total").innerText = newBalanceTotal;
  }else{
    alert('you need to add a positive number of value')
  }

});
