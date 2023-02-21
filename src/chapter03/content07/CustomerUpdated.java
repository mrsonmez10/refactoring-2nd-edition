public class CustomerUpdated {
    private PhoneUpdated mobilePhone;

    public String getMobilePhoneNumber() {
        return mobilePhone.toFormattedString();
    }
}