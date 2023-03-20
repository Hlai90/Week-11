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

function circleArea(radius){
    area = Math.PI*radius*radius;
    return area;
}
let input = prompt("Enter a raidus")
let result = circleArea(input)
alert(`The area of a circle with a radius of ${radius} is ${result}`)