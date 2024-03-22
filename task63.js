//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, 
//including properties unique to each shape.
// Describing a circle using our Shape type
var circle = {
    kind: "circle",
    radius: 5
};
// Describing a rectangle using our Shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 10,
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
