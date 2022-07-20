function checkAmount(reqAmount, finalAmount) {
    setTimeout(() => {
      var availableAmount = 2000;
      if (reqAmount <= availableAmount) {
        console.log("Amount available");
        finalAmount(availableAmount);
      } else {
        console.log("Insaficiant amount");
      }
    }, 5000);
  }
  function withdraw(reqAmount) {
    checkAmount(reqAmount, (availableAmount) => {
      var remainingBalance = availableAmount - reqAmount;
      console.log("withdraw successfull and remainingbalance :" + remainingBalance);
    });
  }
  
  withdraw(300);
  