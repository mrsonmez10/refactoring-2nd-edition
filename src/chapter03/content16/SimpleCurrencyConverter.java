package chapter03.content16;

public class SimpleCurrencyConverter {
    private String currencyTo;

    public SimpleCurrencyConverter(String currencyTo) {
        this.currencyTo = currencyTo;
    }

    // DRY
    public double convert(double price) {
        if (currencyTo.equalsIgnoreCase("EUR")) {
            return price * 0.9;
        } else if (currencyTo.equalsIgnoreCase("TL")) {
            return price * 1453;
        } else {
            throw new IllegalArgumentException("Unrecognized currency: " + currencyTo);
        }
    }
}