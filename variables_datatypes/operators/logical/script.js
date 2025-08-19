   // AND (&&) 
 console.log(true && true);   // true 
        

 console.log(true && false);  // false
        console.log(5 > 3 && 10 > 5); // true
        console.log(5 > 10 && 10 > 5); // false

        // OR (||) - true if at least one condition is true
        console.log(true || false);  // true
        console.log(false || false); // false
        console.log(5 > 3 || 10 < 5); // true
        console.log(2 > 5 || 1 > 3);  // false

        // NOT (!) - inverts the boolean value
        console.log(!true);  // false
        console.log(!false); // true
        console.log(!(5 > 3)); // false
        console.log(!(2 > 5)); // true

        // Combined examples 
var age = 20;    
var hasTicked = true;
if (age >= 18 && hasTicket) {
    console.log("you can enter the studiam .")
} 
if (age < 18 || hasTicket); 
console.log("you can enter the studiam with a ticket")
if (!(age < 18));