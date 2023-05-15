// -----------------------------Chap # 21_25-----------------------------


// Q:1
// Ans:1
// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// document.write("Hello and welcome to the page " + (firstName +" "+ lastName));

// Q:2
// Ans:2
// var favMobile = prompt("Which mobile is your favourite");
// document.write("My favourite mobile is: " + favMobile + "<br />Length of string: " + favMobile.length);

// Q:3
// Ans:3
// var ask = prompt("Ask the index of particular letter");
// var string = "Pakistani";
// document.write("String: " + string + "<br />");
// var indexNum = string.indexOf(ask);
// document.write("Index of '" + ask +"': " + indexNum);

// Q:4
// Ans:4
// var ask = prompt("Ask the index of particular letter");
// var string = "Hello world";
// document.write("String: " + string + "<br />");
// var indexNum = string.lastIndexOf(ask);
// document.write("Index of '" + ask +"': " + indexNum);

// Q:5
// Ans:5
// var ask = prompt("Ask the index of particular letter");
// var string = "Pakistani";
// document.write("String: " + string + "<br />");
// var indexNum = string.charAt(ask);
// document.write("Index of " + ask +": " + indexNum);

// Q:6
// Ans:6
// var firstName = "Muhammad";
// var lastName = "Azhar";
// var fullName = firstName.concat(" " + lastName);
// document.write(fullName);

// Q:7
// Ans:7
// var city = "Hyderabad";
// document.write("City: " + city + "<br />")
// city = city.replace("Hyder", "Islam");
// document.write("After replacement: " + city);

// Q:8
// Ans:8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Before replacement: " + message + "<br />");
// message = message.replace(/and/g, "&");
// document.write("After replacement: " + message);

// Q:9
// Ans:9
// var val = "472";
// document.write("Value: " + val + "<br />Type: " + typeof(val) + "<br />");
// var convert = Number(val);
// document.write("Value: " + convert + "<br />Type: " + typeof(convert));

// Q:10
// Ans:10
// var takeInput = prompt("Enter lower case for convert in upper case");
// document.write("User input: " + takeInput + "<br />");
// var upperCase = takeInput.toUpperCase(takeInput);
// document.write("Upper case: " + upperCase);

// Q:11
// Ans:11
// var takeInput = prompt("Enter lower case for convert in upper case");
// document.write("User input: " + takeInput + "<br />");
// var upperCase = takeInput.charAt(0).toUpperCase() + takeInput.slice(1);
// document.write("Title case: " + upperCase);

// Q:12
// Ans:12
// var val = 35.36;
// document.write("Number: " + val + "<br />");
// var convert = val.toString();
// document.write("Result: " + convert.replace(".",""));

// Q:13
// Ans:13
// var char = ['@', '.', ',', '!'];
// var ask = prompt("Ask us what you want");
// var isMatch = true;
// for(var i = 0; i < char.length; i++){
//     if(ask.includes(char[i])){
//         isMatch = false;
//         break;
//     }
// }
// if(!isMatch){
//     document.write("Please enter a valid username");
// }

// Q:14
// Ans:14
// var item = ['cake', 'apple pie', 'cookie', 'chip', 'patties'];
// var ask = prompt("Ask us what you want").toLocaleLowerCase();
// var isMatch = false;
// for(var i = 0; i < item.length; i++){
//     if(item[i].toLocaleLowerCase() === ask.toLocaleLowerCase()){
//         isMatch = true;
//         break;
//     }
// }
// if(isMatch){
//     document.write(`"${item[i]}" is found in the list.`);
// }else{
//     document.write(`"${ask}" is not found in the list.`);
// }

// Q:15
// Ans:15
// var password = prompt("Enter Password");
// if(password.length < 6){
//     password = prompt("Password should be at least 6 charaters long. Enter a valid password.");
// }else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(password)){
//     password = prompt("Password Should contain Only alphabets and numbers , Please enter a valid Password.");
// }else{
//     alert("Valid Password!!")
// }

// Q:16
// Ans:16
// var string = "University of Karachi";
// var arr = string.split('');
// var strArr = string.replace(/,/g," ")
// for(var i = 0; i < strArr.length; i++){
//     document.write(strArr[i] + "<br />")
// }

// Q:17
// Ans:17
// var character = prompt("Enter an input");
// var lastIndex = character.charAt(character.length-1);
// document.write("User input: " + character + "<br />" + "Last character of input: " + lastIndex);

// Q:18
// Ans:18
// var string = "The quick brown fox jumps over the lazy dog";


// -----------------------------Chap # 26_30-----------------------------


// Q:1
// Ans:1
// var number = +prompt("Enter number");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("User input number: " + number + "<br />");
// document.write("Rounded off value: " + round + "<br />");
// document.write("Floor value: " + floor + "<br />");
// document.write("Ceil value: " + ceil);

// Q:2
// Ans:2
// var number = +prompt("Enter number");
// var round = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("User input number: " + number + "<br />");
// document.write("Rounded off value: " + round + "<br />");
// document.write("Floor value: " + floor + "<br />");
// document.write("Ceil value: " + ceil);

// Q:3
// Ans:3
// var value = +prompt("Enter a number");
// var absMthod = Math.abs(value);
// document.write("The absolute value of " + value + " is " + absMthod);

// Q:4
// Ans:4
// var randomDice = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value: " + randomDice);

// Q:5
// Ans:5
// var num = Math.random();
// var num1 = Math.round(num)
// if(num1 < 1){
//     document.write(num1 + "<br />" + "random coin value: Heads");
// }else{
//     document.write(num1 + "<br />" + "random coin value: Tails");
// }

// Q:6
// Ans:6
// var randomNum = Math.floor(Math.random() * 100);
// document.write("random number between 1 and 100 is: " + randomNum);

// Q:7
// Ans:7
// var askUser = prompt("Enter weight of an item");
// var parse = parseInt(askUser);
// document.write("The weight of user is " + parse + " kilograms");

// Q:8
// Ans:8
// var guessNum = +prompt("Guess the number between 1 and 10");
// var randomNum = Math.floor(Math.random() * 10);
// if(guessNum == randomNum){
//     document.write("Congratulations! You have guess the right number")
// }else{
//     document.write("It's ok dear try again");
// }


// -----------------------------Chap # 31_34-----------------------------


// Q:1
// Ans:1
// var now = new Date();
// document.write("<h1>" + now + "</h1>");

// Q:2
// Ans:2
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date();
// alert(monthNames["Current month: " + now.getMonth()]);

// Q:3
// Ans:3
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var d = new Date();
// var dayName = days[d.getDay()];
// alert("Today is " + dayName);

// Q:4
// Ans:4
// var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var d = new Date();
// var dayName = days[d.getDay()];
// for(var i = 0; i < days.length; i++){
//     if(days[i] == dayName){
//         alert("Its a funday");
//     }
// }

// Q:5
// Ans:5
// var currentDate = new Date();
// var currentDateOfMonth = currentDate.getDate();
// if (currentDateOfMonth < 16) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }

// Q:6
// Ans:6
// var currentDate = new Date();
// var minutesSince1970 = Math.floor(currentDate.getTime() / (1000 * 60));
// document.write("Minutes since midnight, Jan. 1, 1970: " + minutesSince1970);

// Q:7
// Ans:7
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

// Q:8
// Ans:8
// var laterDate = new Date(2020, 11, 0);
// document.write("Later Date: " + laterDate);

// Q:9
// Ans:9
// var startingDate = new Date('June 18, 2015');
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - startingDate.getTime();
// var daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days past since 1st Ramadan: " + daysPast);

// Q:10
// Ans:10
// var referenceDate = new Date();
// var beginningOf2015 = new Date('January 1, 2015');
// var timeDifference = (referenceDate.getTime() - beginningOf2015.getTime()) / 1000;
// document.write("Seconds elapsed since the beginning of 2015: " + timeDifference);

// Q:11
// Ans:11
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Updated Date: " + currentDate);

// Q:12
// Ans:12
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);

// Q:13
// Ans:13
// var age = +prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your birth year is: " + birthYear);

// Q:14
// Ans:14
// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month (e.g., January):");
// var numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));
// var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);  
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p>Customer Name: " + customerName + "</p>");
// document.write("<p>Current Month: " + currentMonth + "</p>");
// document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
// document.write("<p>Charges per Unit: $" + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable + "</p>");
// document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable + "</p>");