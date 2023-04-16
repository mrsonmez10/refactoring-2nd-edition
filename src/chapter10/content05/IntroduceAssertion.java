package chapter10.content05;

public class IntroduceAssertion {

    public String getExpenseLimit(String limit, String primaryLimit) {
        // limit and primary limit cannot be null
        String result = "result";
        return limit == "limitValue" ? result : primaryLimit;
    }

    public String getExpenseLimitv2(String limit, String primaryLimit) {
        assert (limit == null || primaryLimit == null);
        String result = "result";
        return limit == "limitValue" ? result : primaryLimit;
    }

    // checked and unchecked exception
    public String getExpenseLimitv3(String limit, String primaryLimit) {
        if (limit == null || primaryLimit == null) {
            throw new RuntimeException("limit or primary limit is null");
        }
        String result = "result";
        return limit == "limitValue" ? result : primaryLimit;
    }
}
