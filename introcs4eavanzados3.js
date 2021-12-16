//Write a program that takes in two lists and returns the greatest
//number out of the two lists. Hint: call the function from Class
//Exercise #1 (Exercise #1 should return a single number - the greatest
//number in the list).
//Write a program that takes in an array of numbers and returns the
//largest number in the list. Example: The given array is [3, 5, 7, 1, 6]
//The largest number is 7.
function largest() {
arrayNumber = [3, 5, 7, 1, 6];//Array of numbers
aux = 0;//Array for save the largest number
if (arrayNumber[0] > aux) {//Check every index if the the number is
largest
aux = arrayNumber[0];
}
if (arrayNumber[1] > aux) {
aux = arrayNumber[1];
}
if (arrayNumber[2] > aux) {
aux = arrayNumber[2];
}
if (arrayNumber[3] > aux) {
aux = arrayNumber[3];
}
if (arrayNumber[4] > aux) 
//Write a program that takes in two lists and returns the greatest
//number out of the two lists. Hint: call the function from Class
//Exercise #1 (Exercise #1 should return a single number - the greatest
//number in the list).
//Write a program that takes in an array of numbers and returns the
//largest number in the list. Example: The given array is [3, 5, 7, 1, 6]
//The largest number is 7.
function largest() {
arrayNumber = [3, 5, 7, 1, 6];//Array of numbers
aux = 0;//Array for save the largest number
if (arrayNumber[0] > aux) {//Check every index if the the number is
largest
aux = arrayNumber[0];
}
if (arrayNumber[1] > aux) {
aux = arrayNumber[1];
}
if (arrayNumber[2] > aux) {
aux = arrayNumber[2];
}
if (arrayNumber[3] > aux) {
aux = arrayNumber[3];
}
if (arrayNumber[4] > aux) 
aux = list[4];
}
else console.log("Error");
}
largestOfBoth();
console.log("The largest number is: " + aux); //Print the number
