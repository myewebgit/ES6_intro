//Q-1

// function add(first=0, second= 36){
//     const total = first + second;
//     return total
// }
// const result = add(55);
// console.log(result)

// Q-2
// const a=1;
// const b =32;
// const sum = `Sum of ${a} and ${b} is: ${(a+b)/3}`
// console.log(sum)

//Q-3//

// function add(first, second){
//     const total = first + second;
//     return total
// }

// const add = (first,second) => first + second;
// // const result = add(10,250);
// console.log(add(150,250))

// const doubleIt = (num)=> num*.2;
// const result = doubleIt(50)
// console.log(result)


// const doMath = (x,y,z)=>{
//     const a = x+y;
//     const b = a*z;
//     const c= (a*b)/5;
//     const d = c+10;
//     return d;
// }
// console.log(doMath(5,51,7))


// Spread Operator//

// const numbers = [12,15,78,99];
// const largets = Math.max(...numbers);
// const largets1 = Math.min(...numbers);
// console.log(largets);
// console.log(largets1);
// console.log(...numbers)
// console.log(...numbers, largets, largets1)

// const{ age, name}= {name: 'Almas', age:56, profession:'Artist'};
// console.log(name)
// const fish = {
//     name: 'Hilsa',
//     address: 'Chandpur',
//     color:'silver',
//     price: 4000
// }

// const {price} = fish;
// console.log(price)

// const {first, age} = {first:'code', last:'mode', age:11};
// console.log(last)

//Spread Operator

// let fruits = ['a','d'];
// let veg = ['gg']
// let add = [...fruits, ...veg];
// console.log(add)

// console.log(fruits,veg)

// let [a,...b] = ['x','y','z']
// console.log(a)
// console.log(b)

const data = {
    count:5000,
    data :{

    }
}


// const users = [
//     {id:1, name:'abir', jod:'student'},
//     {id:2, name:'kabir', jod:'student1'},
//     {id:3, name:'sabir', jod:'student2'},
//     {id:4, name:'mabir', jod:'student3'}
// ]
// // console.log(users)
// console.log(users[2].name)
// // console.log(users[0].name)

const user = {
    id:5001,
    name:'Thomas',
    address:{
        street1:{
            first: ' 35/A kochuket',
            second: 'kolkata',
            four : [
                    {id:1, name:'abir', jod:'student'},
                    {id:2, name:'kabir', jod:'student1'},
                    {id:3, name:'sabir', jod:'student2'},
                    {id:4, name:'mabir', jod:'student3'}
                ],
            third:  ' right side'
        
        },
        postOffice: 'cantonment',
        
    },
    city : 'Dhaka'
}

const userFloor = user.address?.stret?.four[2].name;
// console.log(userFloor)


const users = [
        {id:1, name:'abir', jod:'student'},
        {id:2, name:'kabir', jod:'student1'},
        {id:3, name:'sabir', jod:'student2'},
        {id:4, name:'mabir', jod:'student3'}
    ]

    const man = users.map(x =>x.name)
    console.log(man)