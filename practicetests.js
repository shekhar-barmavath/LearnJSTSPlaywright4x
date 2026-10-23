// 1. Write a Java program that takes a name as input and greets the user with 'Hello, [name]!'.
// let userName = "Shekhar";
// console.log(`Hello, ${userName}`);


// 2. Write a Java program that prints a multiplication table for a given number using printf formatting.
// let mNumber=10;
// for(i=1;i<=10;i++)
// {
// console.log(`${mNumber}` +" " + "X" + " " + i + " " + "=" + " " + (mNumber*i));
// }



// 3. Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.Input
// 5
// Output
// 1
// 2
// Fizz
// 4
// Buzz

// const mNum = 20;

// for (let n = 1; n <= mNum; n++) {
//     if (n % 3 == 0 && n % 5 == 0) {

//         console.log("FizzBuzz")
//     }
//     else if (n % 3 == 0) {
//         console.log('Fizz');

//     }

//     else if (n % 5 == 0) {
//         console.log('Buzz');

//     }

//     else

//         console.log(`${n}`);


// }


//4. Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

let score = 79.999999999999999;

if (score > 100 || score <= 0) {
    console.log("Invalid score, Please check the score");

}


else if (score >= 90 && score <= 100) {

    console.log("Grade is A");
}

else if (score >= 80 && score < 90) {

    console.log("Grade is B");
}
else if (score >= 70 && score < 80) {

    console.log("Grade is C");
}
else if (score >= 60 && score < 70) {

    console.log("Grade is D");
}

else {

    console.log("F");
}



