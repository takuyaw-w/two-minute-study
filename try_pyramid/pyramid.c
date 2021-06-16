#include <stdio.h>

int main() {
  for (int i = 1; i <= 20; i++) {
    for (int j = 1; j <= 20 - i; j++) {
      printf(" ");
    }
    for (int k = 1; k <= i * 2 - 1; k++) {
      printf("x");
    }
    printf("\n");
  }
  return 0;
}
