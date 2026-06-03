const score = 300
console.log(score)
const balance= new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const anothernumber = 637.8754
console.log(anothernumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString(`en-IN`));


console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(9.4));
console.log(Math.floor(9.4));
console.log(Math.min(4,5,2,9));
console.log(Math.max(4,6,8,1));
console.log(Math.random()); // values always lie betweem 0 and 1
console.log((Math.random()*10)+1);


//we want number between 10 and 20
const min =10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) +min);