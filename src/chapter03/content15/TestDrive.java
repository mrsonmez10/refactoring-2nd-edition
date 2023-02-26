package chapter03.content15;

public class TestDrive {
    public static void main(String[] args) {
        AlarmImpl alarmImpl = new AlarmImpl();
        alarmImpl.ring();

        Alarm alarm = new AlarmImpl();
        alarm.off();
    }
}
