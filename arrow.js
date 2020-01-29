addAndMultiply = (x, y, z) => ((x + y) * z);

console.log(addAndMultiply(4, 8, 5)) // 60


// Also fix the string interpolation using Template Literals
selfIntro = (name, hobby, count) => `My name is ${name}. I practice ${hobby} ${count} times a day.`

console.log(selfIntro('Shanqyeet', 'Kendama', '18')) // My name is Shanqyeet. I practice Kendama 18 times a day.

let squared = x => x * x

console.log(squared(2))

//ex. 3, commented out due to ex. 4

// const prices = [1.00, 2.00, 3.00, 4.00]
// const gst = 0.06

// const pricesWithTax = prices.map((value) => value += value * gst) // Complete this with .map

// console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]


// ex. 4
const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06

const pricesWithTax = [];
prices.forEach((value) => {
    pricesWithTax.push(value += value * gst)
})

console.log(pricesWithTax) // you should get [1.06, 2.12, 3.18, 4.24]