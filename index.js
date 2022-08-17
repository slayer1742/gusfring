// 1. Write a javascript programe to Print even numbers between 1 to 100 using for loop
let even = [];
let odd = [];

function EvenOrOdd(start, end){
    for (let i=start;i<=end;i++){
        if(i % 2 == 0){
            even.push(i);
        }
        else if(Math.abs(i % 2) == 1){
            odd.push(i);
        };
    };

    console.log({even, odd});
};

EvenOrOdd(1, 100);

// 2. Write a javascript programe Display the sum of first 10 natural numbers
let Numb = 0;

function SumOfTen(range){
    for (let i=1;i<=range;i++){
        Numb += i;
    }

    console.log("Sum of 10 natural numbers: "+Numb); // 55
};

SumOfTen(10);

// 3. Multiplication
function Multiplication(val){
    for (let i=1;i<=10;i++){
        console.log(val * i);
    };
};

Multiplication(5)

// 4. Given an array, find the given value in the array
let SearchArray = [10, 7, 30, 4, 6, 1]
function search(key){
    let find = SearchArray.find(el => el == key);

    if(find){
        console.log(key+" was found");
    }

    else {
        console.log(key+" was not found");
    };
    
};

search(5);

/* 5. Fizz Buzz challenge

If 'n' is multiple of 3 return Fizz
and if 'n' is multiple of 5 return Buzz
And if 'n' is multiple of both 3 & 5 then retur fizzBuzz

pretty cool right :D
*/

var fizzBuzz = function(n) {
    let arr = [];
    for(let i=1;i<=n;i++){
        if(i % 3 == 0 && i % 5 == 0) {
            arr.push("FizzBuzz");
        }
        else if(i % 3 == 0){
            arr.push("Fizz");
        }
        else if(i % 5 == 0){
            arr.push("Buzz");
        }
        else {
            arr.push(i);
        };
    }
    console.log(arr);
};

fizzBuzz(15);
