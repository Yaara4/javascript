let address = " 123 Main St ";

// ✅ Convert to lowercase
console.log(address.toLowerCase());  // " 123 main st "

// ✅ Convert to uppercase
console.log(address.toUpperCase());  // " 123 MAIN ST "

// ✅ Get a character by index
console.log(address.charAt(5));      // "M"

// ✅ Concatenate strings
console.log(address.concat(", London"));  // " 123 Main St , London"

// ✅ Check if string ends with...
console.log(address.endsWith("St "));     // true

// ✅ Check if string starts with...
console.log(address.startsWith(" 123"));  // true

// ✅ Check if string includes substring
console.log(address.includes("Main"));    // true

// ✅ Find index of first occurrence
console.log(address.indexOf("a"));        // 5

// ✅ Find index of last occurrence
console.log(address.lastIndexOf("a"));    // 6

// ✅ String length
console.log(address.length);              // 12

// ✅ Remove whitespace from both ends
console.log(address.trim());              // "123 Main St"

// ✅ Remove whitespace from start only
console.log(address.trimStart());         // "123 Main St "

// ✅ Remove whitespace from end only
console.log(address.trimEnd());           // " 123 Main St"

// ✅ Slice part of string
console.log(address.slice(1, 4));         // "123"

// ✅ Substring (similar to slice but slightly different rules)
console.log(address.substring(1, 4));     // "123"

// ✅ Replace first match
console.log(address.replace("Main", "High")); // " 123 High St "

// ✅ Replace all matches
console.log(address.replaceAll("a", "@"));    // " 123 M@in St "

// ✅ Repeat string
console.log("Hi! ".repeat(3));            // "Hi! Hi! Hi! "

// ✅ Split into array
console.log(address.split(" "));          // ["", "123", "Main", "St", ""]

// ✅ Match with regex
console.log(address.match(/[A-Z]/g));     // ["M", "S"]

// ✅ Pad start (useful for formatting)
let num = "7";
console.log(num.padStart(3, "0"));        // "007"

// ✅ Pad end
console.log(num.padEnd(3, "0"));          // "700"

// ✅ Convert to primitive value (same as valueOf)
console.log(address.valueOf());           // " 123 Main St "

// ✅ Template literals with string interpolation
let city = "London";
console.log(`My address is ${address.trim()}, ${city}.`);
