package chapter12.content07;

public class NewStack {

    protected Vector delegatee;

    public NewStack() {
        delegatee = new Vector();
    }

    public Object push(Object item) {
        delegatee.addElement(item);
        return item;
    }
}
