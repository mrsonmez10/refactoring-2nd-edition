package chapter03.content01;

import java.util.ArrayList;
import java.util.List;

public class Mysterious {

    int d; // elapsed time in day
    int virmanProblemFix;

    public List<int[]> getThem(int[][] theList) {
        List<int[]> list1 = new ArrayList<>();
        for (int[] x : theList)
            if (x[0] == 4)
                list1.add(x);
        return list1;
    }
}
