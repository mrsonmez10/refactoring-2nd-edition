package chapter09.content04;

public class Order2 {
    private Customer customer;

    public Order2(Customer customer) {
        this.customer = customer;
    }

    public String getCustomerName() {
        return customer.getName();
    }
}

/*
 * Şimdi, bir müşterinin adı değişebildiğinde bu çözüm iyi,
 * çünkü her siparişte customerName üyesini güncellemeniz gerekmez.
 */
