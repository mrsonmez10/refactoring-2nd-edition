package chapter03.content15;

public class AlarmImpl implements Alarm {

    @Override
    public void ring() {
        System.out.println("Alarm is ringing");
    }

    @Override
    public void off() {
        System.out.println("Alarm is off");
    }

}
