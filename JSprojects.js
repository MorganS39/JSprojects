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