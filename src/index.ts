// let sales = 123_456_789;
// let course = "TypeSript";
// let is_published = true;
// let level; //aviod type 'any' at all cost to maximize typescript ability

// function render(document: any) {
//   console.log(document);
// }

// =========== Array ==========
// let numbers = [1, 2, "3"]; //javascript
// let numbers:number[] = []; //typescript

//=========== Tuples ============
//: Fix lenght array where each element has a particular type
//normally use for key value pair

// let user: [number, string] = [1, "Jm"];

//=========== enum ============
//:A list of related constants

//PascalCase
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
//   //program will generate the related code for us
// }
// let mySize: Size = Size.Medium;
// console.log(mySize);

//=========== function ============

function calTax(income: number, taxYear?: number): number {
  //make the taxYear optiona to to add
  if ((taxYear || 2022) < 2022) return income * 1.2;
  return income * 1.3;
}

function calTax2(income: number, taxYear = 2022): number {
  //give a default value to taxYear
  if (taxYear < 2022) return income * 1.2;
  return income * 1.3;
}

calTax(10_000, 2023);
