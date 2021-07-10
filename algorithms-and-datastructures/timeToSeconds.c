#include "stdio.h"

int main() {
  int h, h1, h2, m, m1, m2, s, s1, s2;
  int diff, time1, time2, n;
  printf("1つ目の時間を入力してください。\n");
  printf("時: ");
  scanf("%d", &h1);
  printf("分: ");
  scanf("%d", &m1);
  printf("秒: ");
  scanf("%d", &s1);

  printf("2つ目の時間を入力してください。\n");
  printf("時: ");
  scanf("%d", &h2);
  printf("分: ");
  scanf("%d", &m2);
  printf("秒: ");
  scanf("%d", &s2);
  time1 = h1 * 3600 + m1 * 60 + s1;
  time2 = h2 * 3600 + m2 * 60 + s2;
  if (time1 > time2) {
    diff = time1 - time2;
  } else {
    diff = time2 - time1;
  }

  h = diff / 3600;
  n = diff % 3600;
  m = n / 60;
  s = n % 60;
  printf("二つの時間差は、%d時間%d分%d秒\n", h, m, s);
}
