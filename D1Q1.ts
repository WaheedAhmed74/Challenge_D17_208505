/* My name is "Waheed Ahmed"
My Email Addres is "waheedahmedsoomro@gmail.com"
My Roll No. is (00208505)
My Class Slot is Saturday (7:00 to 10:00)
*/

// // Challenge : Day 1 (Question 1)
// Install  Node.Js then Typescript and then VS Code

import { log } from "console"


// // Challenge : Day 1 (Question 2)
// create a name in a variable
// let name1: string = "Waheed"
// console.log("Hellow Mr. "+name1+ " Would You like to learn some Typescript Today")
// console.log("Hellow Mr."+ " " + name1 + " " + "Would You like to learn some Typescript Today")

// // Challenge : Day 1 (Question 3)
// create a name in a variable
// let myname : string = "wAheEd aHmEd sOomRO"
// console.log(" My Name in Orignal Text " + myname)
// console.log(" My Name in LowerCase Text " + myname.toLowerCase())
// console.log(" My Name in UpperCase Text " + myname.toUpperCase())
// this Line learn from Internet but still no idea how it works (Title Case)
// console.log("My Name in TitleCase Text " + myname.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase()))

// // Challenge : Day 2 (Question 1)
// console.log(`"Albert Einstein once said, "A person who never made a mistake never tried anything new.""`)

// // Challenge : Day 2 (Question 2)
// let famous_person : string = "Albert Einstein";
// let message : string = "A person who never made a mistake never tried anything new.";
// console.log(`"${famous_person} once said, "${message}""`)

// // Challenge : Day 2 (Question 3)
// let stripping_name : string = "     Waheed   \t    \n"
// console.log (stripping_name)
// console.log (stripping_name.trim())

// // Challenge : Day 3 (Question 1)
// console.log(5+3)
// console.log(9-1)
// console.log(4*2)
// console.log(16/2)

// // Challenge : Day 3 (Question 2)
// console.log(`5+3\n7+1\n4+4\n9-1`)

// // Challenge : Day 3 (Question 3)
// var favourite_number : number = 7;
// console.log("Here is my favourite number " + favourite_number)

// // Challenge : Day 4 (Question 1)
// This program is written by Soomro Waheed Ahmed
/* This is Day 4 Challenge Program
    and Question 1 for commenting
    these are multi lines Comments
    This Challenge start on 05 March 2024 
*/

// // Challenge : Day 4 (Question 2)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log(names[i])
// }

// // Challenge : Day 4 (Question 3)
// let names : string[] = ["Waheed", "Qamar", "Raza", "Maqsood", "Adnan"]
// for (let i = 0; i < names.length; i ++){
//     console.log("Assalam o Alaikum Dear " +names[i] + ", How are You?")
// }

// // Challenge : Day 5 (Question 1)
// let mode_of_transport : string[] = ["Cycle", "MotorCycle", "Motor Car", "Jeep", "Ferrari"]
// for (let i = 0; i < mode_of_transport.length; i ++) {
//     console.log("I would like to go on " + mode_of_transport[i])
// }
// // this is copy from the Challenge Hint
// mode_of_transport.forEach(transport => {
//     console.log(`I would like to own a ${transport}.`);
// });

// // Challenge : Day 5 (Question 2)
// let guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });

// // Challenge : Day 5 (Question 3)
// let new_guest_list : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// let no_guest = new_guest_list.splice(1,1,"javed")
// console.log(`${no_guest} is unable to attend the dinner Party`)
// new_guest_list.forEach(guest => {
//     console.log(`Dear Mr. ${guest} I would like to invite you on dinner`);
// });

// // Challenge : Day 6 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log(guests)
// guests.push("Kamran")
// console.log(guests)
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// console.log(guests)
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log(guests)
// guests.forEach(guest => {
//          console.log(`Dear Mr. ${guest} I would like to invite you on dinner`)
// });

// // Challenge : Day 6 (Question 2)
// let new_guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// new_guests.splice(1,3)
// console.log(new_guests)
// new_guests.forEach(guest => {
// console.log(`Due to some time table changed, Now Mr. ${guest} I would like to invite you on dinner Party`)
// });

// // Challenge : Day 6 (Question 3)
// let places : string [] = ["Saudi Arabia", "Germany", "Russia", "Nepal", "China", "Iran"]

// console.log(places) // In Orignal State
// console.log([...places].reverse()) // In Reverse Order
// console.log(places) // In Orignal State
// console.log([...places].sort()) // In Ascending Sort Order
// console.log(places) // In Orignal State

// // Challenge : Day 7 (Question 1)
// let guests : string [] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// console.log("Orignal Guests are " + guests.length)
// guests.push("Kamran")
// guests.splice(0,1,"Arslan","Waqas","Sohail")
// guests.splice(1,3,"Adnan","Ali","Murtaza")
// console.log("Now the  Guests are " + guests.length)

// // Challenge : Day 7 (Question 2)
// let mountains : string[] = ["K-2", "Himaliya", "QaraQaram", "Mount Averest"]
// let rivers : string[] = ["Indus", "Satlaj", "Ravi", "chanab"]
// let cities : string[] = ["Hyderabad", "Khairpur", "Kaachi", "Quetta", "Islamabad","Pehawar"]
// let zuban : string[] = ["Sindhi", "Arabic","Urdu", "Chinese", "French"] 
// console.log("I want to hike on all mountains like " + mountains)
// console.log("I want to swim in all rives like " + rivers)
// console.log("I want to travel and see all the cities like " + cities)
// console.log("I want to learn and speak all the languages like " + zuban)

// // Challenge : Day 7 (Question 3)
// const myCar = {
//     model : "2008",
//     color : "Brown",
//     manufacture : "Honda",
//     HP : "1300cc"
// }
// console.log(myCar["model"])
// console.log(myCar["color"])
// console.log(myCar["manufacture"])
// console.log(myCar["HP"])

// // Challenge : Day 8 (Question 1)
// try {
// let Stationary : string[] = ["Pen", "Pencil", "Eraser", "Sharpner", "Marker", "Glue"]
// console.log(Stationary.length)
// console.log(Stationary[6])
// }
// catch  (e){
//     if (e instanceof Error) {
//         if (e.message.includes("undefined")) {
//             console.error("Index-related error:", e.message);
//         } else {
//             console.error("Other error:", e.message);
//         }
//     } else {
//         console.error("Unexpected error:", e);
//     }
// }


// // Challenge : Day 8 (Question 2)
// let marks : number = 20;
// if (marks >= 0 && marks <= 100) {
//     if (marks >= 90) {
//         console.log("You are in A-1 Grade")
//     } else if (marks >= 80) {
//         console.log("You are in A Grade")
//     } else if (marks >= 70) {
//         console.log("You are in B Grade")
//     } else if (marks >= 60) {
//         console.log("You are in C Grade")
//     } else if (marks >= 50) {
//         console.log("You are in D Grade")
//     } else if (marks >= 40) {
//         console.log("You are in E Grade")
//     } else {
//         console.log("You are FAIL")
// } 
// }

// // Challenge : Day 8 (Question 3)
// let names : string[] = ["Qamar", "Adnan", "Maqsood", "Aqeel", "Adil"]
// for (let i = 0; i < names.length; i ++)
// if (names[i] == "Aqeel"){
//     console.log(`Yor are the Data Base  Expert Mr. ${names[i] }`)
// } else if (names[i] == "Adnan"){
//     console.log(`Yor are the Software  Expert Mr. ${names[i] }`)
// } else if (names[i] == "Adil"){
//     console.log(`Yor are the Web Designer Expert Mr. ${names[i] }`)
// } else {
//     console.log (`You are not an IT Professional ${names[i]}`)
// }

// // Challenge : Day 9 (Question 1)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
// for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i] === "Red" || alien_color[i] === "Green" || alien_color[i] === "Yellow") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }

// // Challenge : Day 9 (Question 2)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
//  for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i] == "Yellow" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else if (alien_color[i] == "Green" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else if (alien_color[i] === "Red") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }

// // Challenge : Day 9 (Question 3)
// let alien_color : string[] = ["Red", "Green", "Yellow", "Bown"]; // Array for hold the colors scheme
//  for (let i = 0; i < alien_color.length; i++) {
//     if (alien_color[i].toLowerCase() == "yellow" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if the color is alien 
//     } else if (alien_color[i] == "Green" ) {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else if (alien_color[i] === "Red") {
//         console.log(`${alien_color[i]} is an Alien Color`); // if color is alien
//     } else {
//         console.log(`${alien_color[i]} is not an Alien Color`); // if color is not alien
//     }
// }

// // Challenge : Day 10 (Question 1)
// let age : number = 42;
// if (age < 2 ) {
//     console.log ("You are the baby");
// } else if (age >= 2 && age < 4) {
//     console.log ("You are the Toddler");
// } else if (age >= 4 && age < 13) {
//     console.log ("You are the Kid");
// } else if (age >= 13 && age < 20) {
//     console.log ("You are the Teenager");
// } else if (age >= 20 && age < 65) {
//     console.log ("You are the Adult");
// } else {
//     console.log ("You are the Elder");
// } 

// // Challenge : Day 10 (Question 2)
// let favourite_fruits : string[] = ["Coconut", "Mango", "Peach", "Oranges", "Banana"]
// favourite_fruits.forEach(fruit =>{
//     if (fruit.toLowerCase() == "banana") {
//         console.log(`I like the ${fruit} too much.`);
//     } else {
//     console.log(`${fruit} is not your desired fruit.`)
//     }
// })

// // Challenge : Day 10 (Question 3)
// let officials : string[] = ["Manager", "General Manager", "Admin", "Transport Officer"]
// officials.forEach(official =>{
//     if (official.toLowerCase() == "admin") {
//         console.log(`Hellow ${official} you are the main Administrator of our Organization`)
//     } else {
//         console.log(`Hellow ${official}, how r u??`)
//     }
// })

// // Challenge : Day 11 (Question 1)
// let users : string[] = ["Administrator", "Wshop_User", "DBA_User"];
// console.log("There are " + users.length + " Users available"); // There are 3 users, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 2 users, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 1 user, Array is not empty
// users.pop()
// console.log("There are " + users.length + " Users available"); // There are 0 users, Array is empty

// // Challenge : Day 11 (Question 2)
// let usernames : string [] = ["Waheed", "Adil", "Qamar", "Adnan", "Huzaifa"];
// let current_users : string [] = ["Maqsood", "Adil", "Kamran", "Adnan", "Adeel"];
// for (let i = 0; i < usernames.length; i ++){
//     if (current_users[i].toLowerCase() === usernames[i].toLowerCase()){
//         console.log(`User Name ${current_users[i]} already exist.`)
//     } else {
//         console.log(`This User name ${current_users[i]} is available`)
//     }
// }

// // Challenge : Day 11 (Question 3)
// let ordinal_number : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (let i = 0; i < ordinal_number.length; i ++) {
//     if (ordinal_number[i] == 1){
//         console.log(`${ordinal_number[i]}st`)
//     } else if (ordinal_number[i] == 2) {
//         console.log(`${ordinal_number[i]}nd`)
//     } else if (ordinal_number[i] == 3) {
//         console.log(`${ordinal_number[i]}rd`)
//     } else {
//         console.log(`${ordinal_number[i]}th`)
//     }
// }

// // Challenge : Day 12 (Question 1)
// let pizza : string [] = ["Fujita Pizza", "Tikka Pizza", "Peproni Pizza" ]
// for (let i = 0; i<pizza.length; i++){
//     console.log(`I want to eat pizza and i like to eat ${pizza[i]}`)
// }
// console.log("I like pizza\nand i like to eat all flavours\nspicy pizza are too much tasty")

// // Challenge : Day 12 (Question 2)
// let animals : string[] = ["Horse", "Dog", "Cat"]
// for (let i = 0; i<animals.length; i++){
//     console.log(animals[i])
//     console.log(`${animals[i]} is a pet animal`)
// }
// console.log("They are not Halal\nHorse is good for Travelling\nDog is good for watching at night")

// // Challenge : Day 12 (Question 3)
// function make_shirt(size: string, mesg:string){
//     console.log("The Shirt size is " + size + " and message is " + mesg)
// }
// make_shirt("Medium", "Pakistan Zindabad")

// // Challenge : Day 13 (Question 1)
// function make_shirt(size: string = "Large" , mesg:string = "I Love TypeScript"){
//     console.log("The Shirt size is " + size + " and message is " + mesg)
// }
// make_shirt()
// make_shirt("Medium", "Proud to be Pakistani")
// make_shirt("Small", "I will become a Programmer very soon")

// // Challenge : Day 13 (Question 2)
// function describe_city(city: string, country:string = "Pakistan"){
//     console.log(`The ${city} is in ${country}`)
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Mascat", "Oman")

// // Challenge : Day 13 (Question 3)
// function city_country(city: string, country:string = "Pakistan"){
//     console.log(`"${city}, ${country}"`)
// }
// city_country("Karachi")
// city_country("Lahore")
// city_country("Quetta")

// // Challenge : Day 14 (Question 1)
// function make_album(artist_name: string, album_title: string, track : number = 12) {
//     console.log(`${album_title} is of ${artist_name} having tracks ${track}`)
// }
// make_album("Atif Aslam", "Jal Pari");
// make_album("Vital Signs", "Aitbar", 15);
// make_album("Abida Parveen ", "Dhamal", 1999);

// // Challenge : Day 14 (Question 2)
// let magician_name : string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"]
// function show_magician (){
//     magician_name.forEach(magician => {
//              console.log(`${magician}`);
//          });
// }
// show_magician()

// // Challenge : Day 14 (Question 3)
// let magician_name : string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"]
// function show_magician (){
//     magician_name.forEach(magician => {
//              console.log(`${magician}, You are the Great Magician`);
//          });
// }
// show_magician()

// // Challenge : Day 15 (Question 1)
// let magician_name : string[] = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];
// let great_magician : string[] = ["M Eijaz", "Mian Afzal", "Shamshee Razzaq"];
// function make_great (){
// let show_magician : string[] = [...magician_name]
// show_magician.push(...great_magician)
//     show_magician.forEach(magician => {
//              console.log(`${magician}`);
//          });
// }
// console.log(magician_name) // Orignal Array
// console.log(great_magician) // Added values
// make_great() // Added Values array

// // Challenge : Day 15 (Question 2)
// const sanwicharray:string[] = ["club Sanwich", "Cheese Sandwich", "Chicken Sandwich"]
// function sandwiches(getarray: string[]): string[] {
//     const result: string[] = [];
//     for (let i = 0; i < getarray.length; i++) {
//         result.push(getarray[i]);
//     }
//     return result;
// }
// console.log(sandwiches(sanwicharray));

// // Challenge : Day 15 (Question 3)
/*****  I didn't understand this answer ****/
///////////////////////////////////////////////////
// interface Car {
//     manufacturer: string;
//     model: string;
//     [key: string]: any; // Allow any additional properties
// }

// function createCar(manufacturer: string, model: string, ...options: any[]): Car {
//     const car: Car = {
//         manufacturer,
//         model,
//     };
//     // Process additional options
//     for (let i = 0; i < options.length; i += 2) {
//         const key = options[i];
//         const value = options[i + 1];
//         car[key] = value;
//     }
//     return car;
// }
// console.log(createCar(car));
//////////////////////////////////////////////////////////////
// // Challenge : Day 16 (Question 1)
// let laptop = {
//     make: "Acer",
//     model: "Veriton M4610G",
//     year: 2011,
//     describe: function() {
//         console.log(`This laptop is a ${laptop.make},  ${laptop.model} released in ${laptop.year}.`);
//     }
// };
// laptop.describe();

// // Challenge : Day 16 (Question 2)
// let laptop = [
//     { "Make": "Acer", "Model": "Veriton M4610G", "Year" : 2011 },
//     { "Make": "HP", "Model": "ZBook", "Year" : 2012  },
//     { "Make": "Dell", "Model": "Inspiron", "Year" : 2015  }
//   ];
// console.log(laptop)

// // Challenge : Day 16 (Question 3)
// var laptop_Price = [50000,45000,92000,38000];
// laptop_Price = [52000, 64000, 880000, ...laptop_Price ];
// console.log(laptop_Price.sort()) // Both Prices in sort Order
//-----------------------------------------------------------------
// let pricesSet1 = [1200, 1500, 1100];
// let pricesSet2 = [1000, 1300, 1600];
// let combinedPrices = [...pricesSet1, ...pricesSet2].sort();
// console.log(combinedPrices);

// // Challenge : Day 17 (Question 1)
// function Hobbies(Person: string, ...Interests: string[]) { 
//   return Interests.join(" ** ") + " ** " + Person; 
// } 
// console.log(Hobbies("You enjoy that hobbies", "Hiking", "Travelling", "Cycling")); 
// /*****  This is your code *****/
// function logHobbies(...hobbies: string[]) {
//     // Loops through each hobby in the array
//     hobbies.forEach(hobby => {
//         // Logs a statement for each hobby
//         console.log(`I enjoy ${hobby}.`);
//     });
// }
// logHobbies("reading", "coding", "cycling");
// /*****  This is your code *****/

// // Challenge : Day 17 (Question 2)
// let multiline_literal : string = 'Today I Wakeup Early\nand I perform Fajar prayer in Masjid\nbecause of today activities I fell freshness in my Body'
// // Print the multiline
// console.log(multiline_literal)

// // Challenge : Day 17 (Question 3)
// let area_of_rectangle = (x: number, y: number): number => {
// return (x * y)
// // console.log("Area of Rectangle is " + x * y)
// }
// // Now print Area of Rectangle
// console.log(area_of_rectangle(10,20))