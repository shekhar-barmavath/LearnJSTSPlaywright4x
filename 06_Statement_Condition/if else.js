// Write a JavaScript program that accepts a student's exam score and determines the corresponding grade using conditional statements (`if`, `else if`, and `else`).

// The score must be between 0 and 100 (inclusive).
let score = 49;

if (score > 90 && score <= 100) {

    console.log("Grade: A - Excellent");


}

else if (score > 80 && score <= 90) {
    console.log("Grade: B - Very Good");
}

else if (score > 70 && score <= 80) {
    console.log("Grade: C - Good");
}

else if (score > 60 && score <= 70) {
    console.log("Grade: D - Average");
}

else if (score >= 50 && score <= 60) {
    console.log("Grade: E - Needs Improvement");
}
// else if(score >=0 && score <= 49)
// {
//      console.log("Grade: F - Fail");
// }


else {

    console.log("Grade: F - Fail");


}












