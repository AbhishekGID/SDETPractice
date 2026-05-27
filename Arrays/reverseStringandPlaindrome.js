function reverseString(str) {
  const newstr = str.split("").reverse().join("");

  return str === newstr;
}
console.log(reverseString("Hello"));
