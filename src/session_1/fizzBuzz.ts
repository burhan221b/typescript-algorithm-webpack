// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = (): void => {
    for (let fizzBuzz: number = 1; fizzBuzz < 101; fizzBuzz++) {
        if (fizzBuzz % 15 === 0) console.log("FIZZBUZZ");
        else if (fizzBuzz % 3 === 0) console.log("FIZZ");
        else if (fizzBuzz % 5 === 0) console.log("BUZZ");
        else console.log(fizzBuzz);
    }
}

export default fizzBuzz;