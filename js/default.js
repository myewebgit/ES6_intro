// const add= (first, second)=> first+' '+ second;
// const result = add('a','b');
// // console.log(result)



// const numbers = [12,23,54,765,3434];
// const numbers1 = [15,17,18,...numbers];

// console.log(...numbers1)
// console.log(...numbers)

const numbers = [2,14,5,9,7];
// const output = [];
// for (const number of numbers){
//     const doubled = number *2;
//     output.push(doubled)
// }

// console.log(output)

function getDoubles(numbers){
    const output = [];
    for (const number of numbers){
            const doubled = doubleIt(number)
            output.push(doubled)
        }
        return output;
}

// function doubleIt(number){
//     return number*2;
// }

const doubleIt = num => num*2;
const result = getDoubles(numbers);
// console.log(result)


const number1 = [5,4,91,52,14,7]
const multiply = x => x*5;
const multi = number1.map(multiply);
// console.log(multi)

const directMap = [5,4,2,1,9].map(x => x*5);
// console.log(directMap)

const friends = ['Tom Cruise', 'Tom MOddy', 'Tom Brady', 'Tom Solaiman']
// const firstletter = friends.map(x =>x[0])
const firstletter = friends.map(x =>x.length)
// console.log(firstletter)

const products = [
    {id:1, name:'laptop', price: 50000},
    {id:1, name:'mobile', price: 52500},
    {id:1, name:'lwatch', price: 12500},
    {id:1, name:'ltab', price: 12430}
]

// const items= products.map(product=> product.name);
const items= products.map(product=> product.name.length);
console.log(items)