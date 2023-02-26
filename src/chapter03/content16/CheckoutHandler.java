package chapter03.content16;

public class CheckoutHandler {
    // ...

    // Currency Enum
    // double floating point

    public double convertToCurrency(double price, String currencyTo) {
        if (currencyTo.equalsIgnoreCase("EUR")) {
            return price * 0.9;
        } else if (currencyTo.equalsIgnoreCase("TL")) {
            return price * 1453;
        } else {
            throw new IllegalArgumentException("Unrecognized currency: " + currencyTo);
        }
    }
}
