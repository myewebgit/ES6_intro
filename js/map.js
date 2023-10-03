const number = [12,15,5,11,55,17,35,95,50,75];
// const five = number.filter(x =>x % 5 === 0);
// const five = number.find(x =>x % 5 === 0);
// const five = number.map(x =>x % 5 === 0);
const five = number.forEach(x =>x % 5 === 0);
// console.log(five)


const student ={
    name: 'kalim',
    age: 15,
    class: 'Ten',
    marks:{
        math:75,
        phy:80,
        che:55
    }
}
const subject = 'math';
const subjectMarks = student.marks
const marks= student.marks.math;
console.log(subjectMarks)