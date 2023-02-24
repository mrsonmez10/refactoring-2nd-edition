package chapter03.content11;

import java.util.ArrayList;
import java.util.List;

public class Loops {
    public static void main(String[] args) {

        /*
         * const names = [];
         * for (const i of input) {
         * if (i.job === "programmer")
         * names.push(i.name);
         * }
         */

        /*
         * const names = input
         * .filter(i => i.job === "programmer")
         * .map(i => i.name)
         * ;
         */
        // Replace loop with a pipeline

        List<Integer> list = new ArrayList<>();
        list.add(1);
        // bare for loop.
        for (int i : list) {
            System.out.println("int = " + i);
        }

        // controlled for each
        list.forEach(i -> System.out.println("int = " + i));
    }
}
