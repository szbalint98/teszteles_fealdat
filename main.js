import {tesztFuggveny} from "./teszt.js";
export function fuggvenyem(a, b) {
  if (a===0||b===0) {
      return "egyik szám se lehet 0"
  }
  if (a<0||b<0) {
    return "mindkét számnak pozitívnak kell lennie"
}
  
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  console.log(a)
  return a;
}

tesztFuggveny();
