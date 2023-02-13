package chapter03.content02;

public class CarCredit {

    private double calculateInterest(double money) {
        double result = 20 * money;
        /*
         * more algorithm here..
         */

        return result;
    }

    public static void main(String[] args) {
        LoanUtil.calculateInterest(20, 2312);
    }
}
