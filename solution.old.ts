export const digitalRoot = (n: number): number => {
  let arrNumber: Array<string> = n.toString().split("");
  let sum: number = 0;

  do {
    sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
      sum += Number(arrNumber[i]);
    }
    arrNumber = sum.toString().split("");
  } while (arrNumber.length > 1);

  arrNumber = [];

  return sum;
};
