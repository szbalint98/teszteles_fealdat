import { fuggvenyem } from "./main.js";
export function tesztFuggveny() {
  {
    let a = 25;
    let b = 15;
    let vart = 5;
    console.assert(
        vart===fuggvenyem(a,b),
        "%o",
        `a=${a},b=${b},lnko=${vart}`,
        "a várt eredmény nem stimmel"
      )
  }
  console.assert(
    vart===fuggvenyem(a,b),
    "%o",
    `a=${a},b=${b},lnko=${vart}`,
    "a várt eredmény nem stimmel"
  )
  {
    let a = -15;
    let b = 5;
    let vart = -2;
    console.assert(
        vart===fuggvenyem(a,b),
        "%o",
        `a=${a},b=${b},lnko=${vart}`,
        "a várt eredmény nem stimmel"
      )
  }
  {
    let a = 3;
    let b = 4;
    let vart = 1;
    console.assert(
        vart===fuggvenyem(a,b),
        "%o",
        `a=${a},b=${b},lnko=${vart}`,
        "a várt eredmény nem stimmel"
      )
  }
  {
    let a = 25;
    let b = 15;
    let vart = 5;
    console.assert(
        vart===fuggvenyem(a,b),
        "%o",
        `a=${a},b=${b},lnko=${vart}`,
        "a várt eredmény nem stimmel"
      )
  }
  {
    let a = 25;
    let b = 15;
    let vart = 5;
    console.assert(
        vart===fuggvenyem(a,b),
        "%o",
        `a=${a},b=${b},lnko=${vart}`,
        "a várt eredmény nem stimmel"
      )
  }
}
