package chapter09.content04;

public class Order {
    private String customerName;

    public Order(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }
}

/*
 * bir müşterinin adı hiç değişmiyorsa, bu yöntem iyi çünkü
 * Customer nesnelerini bir yerde yönetmeniz gerekmez.
 */
