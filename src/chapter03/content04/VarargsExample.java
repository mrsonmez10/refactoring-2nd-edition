package chapter03.content04;

public class VarargsExample {

    public static int sum(int a, int... args) {
        int sum = 0;
        for (int i : args)
            sum += i;
        return sum;
    }

    public static void main(String[] args) {
        sum(1, 2, 3, 4);
    }
}
