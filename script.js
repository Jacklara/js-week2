// Very Easy
function min (x, y) {
    return (x > y)
}
console.log(min(7, 10))
console.log(min(6, 4))

// Easy
let firstName = ['Adrian', 'David', 'Matthew']
let lastName = ['Lara', 'Xochicale', 'Galeote']
let age = [15, 11, 9]

console.log(`Hello, my name is ${firstName[1]} ${lastName[1]} and i'm ${age[1]} years old.`)

// Medium
let enterNum = Number(prompt('Choose a number between 1 and 12'))
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
console.log(`The month is ${months[enterNum - 1]}`) 

while (enterNum < 1 || 12 < enterNum) {
    alert('Enter a valid number');
    enterNum = Number(prompt('Choose a number between 1 and 12'));
    console.log(`The month is ${months[enterNum - 1]}`) 
}

// Hard
let tom = {
    mass: 8,
    height: 9,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

let jerry = {
    mass: 45,
    height: 10,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

tom.calcBMI();
jerry.calcBMI();

let higherBMI = tom.bmi > jerry.bmi
console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)