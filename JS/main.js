// 9.Write a program that allows user to insert integer then print all numbers between 1 to that’s number
function q9() {
  var num = Number(window.prompt("enter a number"));
  var i = 1;
  for (i; i <= num; i++) {
    console.log(i);
  }
}

// 10. Write a program that allows userto insert integerthen print a multiplication table up to 12.
function q10() {
  var num = Number(window.prompt("enter a number"));
  var i = 1;
  for (i; i <= 12; i++) {
    console.log(i * num);
  }
}

// 11.Write a program that allows to user to insert number then print all even numbers between 1 to this number
function q11() {
  var num = Number(window.prompt("enter a number"));
  var i = 2;
  for (i; i <= num; i += 2) {
    console.log(i);
  }
}

// 12. Write a program that take two integers then print the power
function q12() {
  var num1 = Number(window.prompt("enter the num"));
  var num2 = Number(window.prompt("enter the power num"));
  var num3 = num2;
  var i = 1;
  var result = 1;
  if (num2 < 0) {
    num2 = -1 * num2;
  }
  for (i; i <= num2; i++) {
    result = result * num1;
  }
  if (num3 > 0) {
    console.log(result);
  } else if (num3 == 0) {
    console.log(1);
  } else if (num3 < 0) {
    console.log(1 / result);
  }
}

// 13. Write a program to enter marks of five subjects and calculate total, average and percentage.
function q13() {
  var i = 1;
  var sum1 = 0;
  for (i; i <= 5; i++) {
    sum1 += Number(window.prompt("enter mark number " + i));
  }
  console.log("sum=", sum1);
  console.log("average =", sum1 / 5);
  console.log("percentage =", sum1 / 5);
}
// 14. Write a program to input month number and print number of days in that month.
function q14() {
  var num1 = Number(window.prompt("enter the month number"));
  if (
    num1 == 1 ||
    num1 == 3 ||
    num1 == 5 ||
    num1 == 7 ||
    num1 == 8 ||
    num1 == 10 ||
    num1 == 12
  ) {
    console.log("Days in month= ", 31);
  } else if (num1 == 2) {
    console.log("Days in month= ", 28);
  } else {
    console.log("Days in month= ", 30);
  }
}
// 15. Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade
function q15() {
  var deg1 = Number(window.prompt("please Enter Physics mark"));
  var deg2 = Number(window.prompt("please Enter Chemistry mark"));
  var deg3 = Number(window.prompt("please Enter Biology mark"));
  var deg4 = Number(window.prompt("please Enter Mathematics mark"));
  var deg5 = Number(window.prompt("please Enter Computer mark"));
  var degTotal = (deg1 + deg2 + deg3 + deg4 + deg5) / 500;
  if (degTotal >= 0.9) {
    console.log("Grad A");
  } else if (degTotal >= 0.8) {
    console.log("Grad B");
  } else if (degTotal >= 0.7) {
    console.log("Grad C");
  } else if (degTotal >= 0.6) {
    console.log("Grad D");
  } else if (degTotal >= 0.4) {
    console.log("Grad E");
  } else {
    console.log("Grad F");
  }
}
