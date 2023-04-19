package chapter12.content07;

public class Stack extends Vector {
    public Stack() {
    }

    public Object push(Object item) {
        addElement(item);
        return item;
    }
}
