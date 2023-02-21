public class PhoneUpdated {
    private final String unformattedNumber;

    public PhoneUpdated(String unformattedNumber) {
        this.unformattedNumber = unformattedNumber;
    }

    private String getAreaCode() {
        return unformattedNumber.substring(0, 3);
    }

    private String getPrefix() {
        return unformattedNumber.substring(3, 6);
    }

    private String getNumber() {
        return unformattedNumber.substring(6, 10);
    }

    public String toFormattedString() {
        return "(%s) %s-%s".format(getAreaCode(), getPrefix(), getNumber());
    }
}