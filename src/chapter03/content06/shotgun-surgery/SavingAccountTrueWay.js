var MIN_AMOUNT = 1000;

class SavingsAccount {

    withdrawMoney(amount) {
        if(checkMoneyIsUnderMinAmount(amount)) {
            // do something
        }
    }

    transferMoney(amount) {
        if(checkMoneyIsUnderMinAmount(amount)) {
            // do something
        }
    }

    checkMoneyIsUnderMinAmount(amount) { 
        return amount < MIN_AMOUNT;
    }
}