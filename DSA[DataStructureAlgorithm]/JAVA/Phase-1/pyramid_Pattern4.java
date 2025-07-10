// Print Pyramid Pattern

// // In detail
// public class pyramid_Pattern4 {
//     public static void main(String[] args) {
//         int n = 7;
//         int st = 1;
//         int sp = n - 1;
//         for (int i = 1; i <= n; i++) {
//             for (int j = 1; j <= sp; j++) {
//                 System.out.print(" ");
//             }
//             for (int k = 1; k <= st; k++) {
//                 if (k == st) {
//                     System.out.print("*");
//                 } else {
//                     System.out.print("* ");
//                 }
//             }
//             st++;
//             sp--;
//             System.out.println();
//         }
//     }
// }
// Clearest way
public class pyramid_Pattern4 {

    public static void main(String[] args) {
        int n = 8;

        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
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
