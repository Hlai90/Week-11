// function greet(name){
//     console.log("Hello "+ name);
// }

// greet("Howard")

// let greet = function(name) {
//     console.log(`Hello  ${name}`)
// }
// greet("Howard")

// let greet = (name) => {
//     console.log(`Hello ${name}`);
// }
// greet("Howard")

// function greet(name, time='day'){
//     console.log(`Good ${time} ${name} `);
// }

// greet('Howard', 'night')

// const radiusPara = document.querySelector("#radius");
// console.log(radiusPara)
// const resultPara = document.querySelector("#result");
// console.log(resultPara)

// function circleArea(radius){
//     if(isNaN(radius)){
//         // alert("This is not a string")
//         // update the textConent of innerText property of resultPara
//         resultPara.textContent = "This is not a number"
//     } else {
//     area = Math.PI*radius*radius;
//     return area;
//     }
// }
// let input = prompt("Enter a raidus ")
// radiusPara.textContent = radiusPara.textContent += input

// let result = circleArea(input)
// //Show an alert message with both values, radius and area.
// if (result !== undefined){}
// // alert(`The area of a circle with a radius of ${radius} is ${result}`)
// resultPara.textContent = `The radius is ${input} and the area is ${area}`
const ullist = document.querySelector(".shopping")

function populateList(shoppingListArray){
    //1 for each item in the shoppingListArray, add a list item with its value
    for (let item of shoppingListArray);
    //2 Create a new Li
    const newli = document.createElement("li")
        //3 update the Li's text using item
        newli.textContent = item;
        ullist.appendChild(newli);
}

let myShoppingList = ["Cheese","Bread","Green Pepper"]
populateList(myShoppingList)