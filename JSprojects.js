// Palindrome Checker
function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
  );
}
palindrome("eye");

// Roman numeral converter
var convertToRoman = function(num) {
  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
  ];

  var romanized = "";

  for (var index = 0; index < decimalValue.length; index++) {
      while (decimalValue[index] <= num) {
          romanized += romanNumeral[index];
          num -= decimalValue[index];
      }
  }
  return romanized;
};

convertToRoman(36);

// Caesars Cipher
function rot13(str) {
  var newArray = [];
  var regEx = /[A-Z]/;
  str = str.split("");
  for (var x in str) {
    if (regEx.test(str[x])) {
      newArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
    } else {
      newArray.push(str[x].charCodeAt());
    }
  }
  str = String.fromCharCode.apply(String, newArray);
  return str;
}

rot13("SERR PBQR PNZC");

// Telephone number validator
function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  return regex.test(str);
}

telephoneCheck("555-555-5555");

// Cash register
var denom = [
  { name: "ONE HUNDRED", val: 100.0 },
  { name: "TWENTY", val: 20.0 },
  { name: "TEN", val: 10.0 },
  { name: "FIVE", val: 5.0 },
  { name: "ONE", val: 1.0 },
  { name: "QUARTER", val: 0.25 },
  { name: "DIME", val: 0.1 },
  { name: "NICKEL", val: 0.05 },
  { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;

  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );

  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  var change_arr = denom.reduce(function(acc, curr) {
    var value = 0;

    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;

      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []); 


  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  output.status = "OPEN";
  output.change = change_arr;
  return output;
}

checkCashRegister(19.5, 20, [
["PENNY", 1.01],
 ["NICKEL", 2.05], 
 ["DIME", 3.1], 
 ["QUARTER", 4.25], 
 ["ONE", 90], 
 ["FIVE", 55], 
 ["TEN", 20], 
 ["TWENTY", 60], 
 ["ONE HUNDRED", 100]]);