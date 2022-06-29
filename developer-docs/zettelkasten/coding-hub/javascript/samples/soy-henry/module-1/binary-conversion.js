"use strict";

function BinarioADecimal(num) {
  let result = 0;
  let i = 0;
  while (i < num.length) {
    result += num[i] * Math.pow(2, num.length - i - 1);
    i++;
  }
  return result;
}

function DecimalABinario(num) {
  let bin = 0;
  let rem, i = 1;
  while (num != 0) {
      rem = num % 2;
      num = parseInt(num / 2);
      bin = bin + rem * i;
      i = i * 10;
  }
  return `${bin}`;
}

console.log(BinarioADecimal("101011"));
console.log(DecimalABinario(43));
