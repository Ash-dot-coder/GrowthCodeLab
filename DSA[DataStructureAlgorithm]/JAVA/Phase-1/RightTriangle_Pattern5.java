// Print Right Triangle Pattern

public class RightTriangle_Pattern5 {

    public static void main(String[] args) {
        int n = 8;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  ");
            }
            for (int k = 1; k <= i; k++) {
                if (k == i) {
                    System.out.print("*");
                } else {
                    System.out.print("* ");
                }
            }
            System.out.println();
        }
    }
}
