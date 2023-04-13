package chapter09.content03;

import java.util.ArrayList;
import java.util.List;

//@Service
public class Scope {
    private final List<Long> customerNo = new ArrayList<>();

    public void a() {
        customerNo.add(1L);
    }

    public void b() {
        customerNo.add(1L);
    }
}
