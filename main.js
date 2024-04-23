// ordinal NUmber:Ordiinal number indicate their position in a array, such as 1st or 2nd. Most ordinal
// numbers end in th, except 1, 2, and 3,
// (a) Store the number 1 through 9 in a array.
//(b) Loop through the array. Use an if-else chain inside the loop to print th proper ordinal ed=nding for each 
// number.Your output.
//(c) should read "1st, 2nd, 3rd, 4th, 5th,6th, 7th, 8th, 9th", and each result should be on a separate line.
// import { log } from "console"
// let numbers : number[] = [1,2,3,4,5,6,7,8,9]
// for (let number of numbers){
// if (number === 1){
//     console.log(`${number}st`)
// }else if (number === 2){
//     console.log(`${number}2nd`)
// }else if(number === 3){
//     console.log(`${Number}3rd`)
// }else {
//     console.log(`${number}th`)
// }
// }
//Task 34
//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use
//  a for loop to print the name of each pizza.
// (a) Modify your for loop to print a sentences using the name of the pizza instead of printing just the name of 
// the pizza . For each pizza you should have one line of output containing a simple statemnet like I like p
// pepperonal pizza.
// (b) Add a line at the end of your program, outside the foor loop , that states much you like pizza. The output 
//  should consist of three or more lines about the kinds of pizza you like and then an additional sentence
// suuch as I really love pizza!
// let favorite_pizza : string [] = ["pepperoni", "chicken", "veg"]
// for(let pizza of favorite_pizza){
//     console.log(pizza)
// }
// console.log("\n")
// for (let pizza of favorite_pizza){
//     console.log(`I really like ${pizza}pizza!`)
// }
// console.log("I  really love pizza!")
// Task 35
// Animals : Think of at least three different animals that have a common characteristic. Store the name of these
//  animals in a list, and then use a for loop to print out the name of each animal.
//(a) modify your program to print a statement about each animals, Such a A dog would make a great pet.
// (b) Add a line at the end of your program stating what these animals have in common.you cold print a 
// a sentence such as Any of these animals would a great pet!
var animals = ["cat", "dog", "loin"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " has a tail"));
}
console.log("\n  all of these are great pets! but I love cats mors");
