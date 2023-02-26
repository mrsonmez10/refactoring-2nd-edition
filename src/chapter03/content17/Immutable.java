package chapter03.content17;

import java.time.LocalDate;
import java.util.Date;

public class Immutable {

    public static void main(String[] args) {
        /*
         * Date date = new Date();
         * System.out.println(date);
         * date.setDate(1);
         * System.out.println(date);
         */

        LocalDate localDate = LocalDate.now();
        System.out.println(localDate);
        localDate.plusDays(1);
        System.out.println(localDate);
    }

}
