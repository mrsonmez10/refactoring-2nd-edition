package chapter09.content04;

public class TestDrive {

    public static void main(String[] args) {

        // order için örnek
        Order orderv1 = new Order("Ali");
        Order orderv2 = new Order("Ali");

        // Example for order2
        Customer customer = new Customer("Ali");
        customer.setName("Alican");

        Order2 order2 = new Order2(customer);
        Order2 order3 = new Order2(customer);
        Order2 order4 = new Order2(customer);

    }

}
