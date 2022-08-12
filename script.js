const loginbtn = document.getElementById("submit");
loginbtn.addEventListener("click", function () {
  document.getElementById("login-area").style.display = "none";
  document.getElementById("loged-in-area").style.display = "block";
});
document.getElementById("deposit-btn").addEventListener("click", function () {
  let depositValue = parseFloat(document.getElementById("deposit").value);
  let totalDeposit = parseFloat(
    document.getElementById("total-deposit").innerText
  );
  let currentDeposit = depositValue + totalDeposit;
  document.getElementById("total-deposit").innerText = currentDeposit;
  //balance upadate when cliccked on deposit
  let availableBalance = document.getElementById("balance").innerText;
  let BalanceNumb = parseFloat(availableBalance);
  console.log(BalanceNumb);
  let totalBalance = BalanceNumb + depositValue;
  console.log(totalBalance);
  document.getElementById("balance").innerText = totalBalance;
  document.getElementById("deposit").value = "";
});
//withdraw section
document.getElementById("withdraw-btn").addEventListener("click", function () {
  let withdrawValue = parseFloat(
    document.getElementById("withdraw-value").value
  );
  let totalWithdraw = parseFloat(document.getElementById("withdraw").innerText);
  let currentWithdraw = withdrawValue + totalWithdraw;
  document.getElementById("withdraw").innerText = currentWithdraw;
  let availableBalance = document.getElementById("balance").innerText;
  let BalanceNumb = parseFloat(availableBalance);
  console.log(BalanceNumb);
  let totalBalance = BalanceNumb - withdrawValue;
  document.getElementById("balance").innerText = totalBalance;

  document.getElementById("withdraw-value").value = "";
});
