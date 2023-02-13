package chapter03.content04;

public class TestDrive {
    public static void main(String[] args) {

        // booelan fileExists("myFile")
        // InputStream fileOpen(“MyFile”)

        String file = "file";
        FlagMethod.doStaff(file, true);

        FlagMethod.isVersionIncrement(file);
        FlagMethod.saveNew(file);

        /*
         * Point p = new Point(0,0);
         */

        AssertExample.assertEquals("ali", "veli");

        /*
         * 
         * Circle makeCircle(double x, double y, double z, double radius);
         * Circle makeCircle(Point center, double radius);
         * 
         */

    }

    public static int sum(int a, int b, int c, int d) {
        return a + b + c + d;
    }

}
