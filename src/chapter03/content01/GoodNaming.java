package chapter03.content01;

import java.util.ArrayList;
import java.util.List;

public class GoodNaming {
    int elapsedTimeInDays;
    int daysSinceCreation;
    int daysSinceModification;
    int fileAgeInDays;

    public List<String> getFlaggedCells(String[] gameBoard) {
        List<String> flaggedCells = new ArrayList<>();
        for (String cell : gameBoard)
            if (isFlagged(cell))
                flaggedCells.add(cell);
        return flaggedCells;
    }

    public boolean isFlagged(String cell) {
        // some condition
        return true;
    }
}
