// const superHeroes = [`Hulk`, `He Man`, `Thor`, `Spider Man`, `Bat Man`];

// console.log(superHeroes.length);
// console.log(superHeroes[superHeroes.length-1]);

// console.log(`We have ${[superHeroes.length]} super heroes.`);


const numbers = [`one`, `two`, `three`, `four`];

// numbers[4] = 'something'

// console.log(numbers);


//START

// numbers.shift()
// console.log(numbers.shift(numbers));//removes the first one and returns the rest

// numbers.unshift(`something`);//Adds to the beggining of the array
// console.log(numbers);



//END

//numbers.pop(); // This pops ONE off the End
// console.log(`This one is comming off of the list:` + ` ` + numbers.pop());

// console.log(numbers);

//numbers.push();//Pushes to the End of the array.
// console.log(numbers.push(`five`,`six`));

// console.log(numbers);



//MIDDLE

 //splice()
numbers.splice(2, 2, `something`);//This starts at the 2nd position and then deletes 2 items and replaces them with `something`
console.log(numbers);
