package chapter03.content05;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class TestDrive {

    public static void exec(List<String> n, List<Integer> a) {

        Iterator<String> i = n.iterator();
        while (i.hasNext()) {
            System.out.println(" --> " + i.next());
        }

        Iterator<Integer> i2 = a.iterator();
        while (i2.hasNext()) {
            System.out.println(" --> " + i2.next());
        }
    }
    // for (Iterator<Suit> i = suits.iterator(); i.hasNext();)

    public static void main(String[] args) {
        System.out.println("Global Data Örnek");
        System.out.println(GlobalData.a);
        GlobalData.a = 15;
        System.out.println(GlobalData.a);

        System.out.println("Scope Örnek");
        List<String> names = new ArrayList<>();
        names.add("James");
        names.add("Kirk");
        names.add("Robert");
        names.add("Lars");

        List<Integer> ages = new ArrayList<>();
        ages.add(54);
        ages.add(51);
        ages.add(46);
        ages.add(57);
        exec(names, ages);

    }
}