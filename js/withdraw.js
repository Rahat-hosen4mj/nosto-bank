/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = document.getElementById("withdraw-field").value;
  const withdrawAmount = parseInt(newWithdrawAmount);
  
  // setTextElementValueById(withdraw - total, newWithdrawTotal);
  const previousBalanceTotal = document.getElementById("balance-total").innerText;
  const previousBalance = parseInt(previousBalanceTotal)
  if(previousBalance > withdrawAmount){
    const newBalanceTotal = previousBalance - withdrawAmount;
    document.getElementById("balance-total").innerText = newBalanceTotal;
    const previousWithdrawTotal = document.getElementById("withdraw-total").innerText;
    const newWithdrawTotal = parseInt(previousWithdrawTotal) + withdrawAmount;
    document.getElementById("withdraw-total").innerText = newWithdrawTotal
  }else{
    alert('You cant withdraw. your withdraw amount is greater than total balance')
  }
  console.log(typeof previousBalanceTotal)

});
