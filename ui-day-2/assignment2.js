// Task 1: Use map to convert an array of numbers into an array of their cubes.

function getCubes(numbers) {
    return numbers.map(num => num ** 3);
}

const numbersArray = [10, 20, 30, 40, 50];
const cubesArray = getCubes(numbersArray);
console.log(cubesArray); 

// Task 2: Use reduce to find the sum of all elements in an array.

function getTotalSum(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

const totalSum = getTotalSum(numbersArray);
console.log(totalSum);

// Task 3: Use filter to find all prime numbers in an array.

function checkPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function findPrimes(numbers) {
    return numbers.filter(checkPrime);
}

const sampleArray = [1, 2, 3, 4, 5];
const primesArray = findPrimes(sampleArray);
console.log(primesArray); 

// Task 4: Calculate the average of squared odd numbers in an array.

function getAverageOfSquaredOdds(numbers) {
    const oddNumbers = numbers.filter(number => number % 2 !== 0);
    const squaredOdds = oddNumbers.map(number => number ** 2);
    const sumOfSquares = squaredOdds.reduce((total, number) => total + number, 0);
    return squaredOdds.length ? sumOfSquares / squaredOdds.length : 0;
}

const numArray = [1, 2, 3, 4, 5];
const averageResult = getAverageOfSquaredOdds(numArray);
console.log(averageResult); 

// Task 5: Find the longest string in an array of strings.

function getLongestString(strings) {
    return strings.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

const stringArray = ['fruits', 'vegetables', 'apple', 'banana', 'watermelon'];
const longestStr = getLongestString(stringArray);
console.log(longestStr); 

// Task 6: Capitalize the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}

const testSentence = "this is a test sentence.";
const capitalizedWords = capitalizeWords(testSentence);
console.log(capitalizedWords);

// Task 7: Find all students who passed the exam.

function getPassingStudents(students) {
    return students.filter(student => student.score >= 60);
}

const studentList = [
    { name: 'A', score: 72 },
    { name: 'B', score: 66 },
    { name: 'C', score: 99 },
    { name: 'D', score: 45 },
    { name: 'E', score: 91 }
];

const passingStudents = getPassingStudents(studentList);
console.log(passingStudents);

// Task 8: Create a Private Counter for Multiple Instances

function createPrivateCounter() {
    let count = 0; 
    return function() {
        return ++count;
    };
}

const counter1 = createPrivateCounter();
const counter2 = createPrivateCounter();
const counter3 = createPrivateCounter();

console.log(counter1()); 
console.log(counter1()); 
console.log(counter2());
console.log(counter2()); 
console.log(counter3()); 
console.log(counter3());
console.log(counter3()); 

// Task 10: Calculate Total Score

function getTotalScore(objects) {
    let total = 0; 
    objects.forEach(obj => total += obj.score);
    return total;
}

const scoreList = [
    { score: 85 },
    { score: 92 },
    { score: 76 },
    { score: 88 },
    { score: 95 }
];

const totalScore = getTotalScore(scoreList);
console.log('Total Score:', totalScore); 

// Task 9: Create a Promise-Based Calculator

function calculatorPromise(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        switch (operation) {
            case 'addition':
                resolve(num1 + num2);
                break;
            case 'subtraction':
                resolve(num1 - num2);
                break;
            case 'multiplication':
                resolve(num1 * num2);
                break;
            case 'division':
                num2 === 0 ? reject(new Error('Cannot divide by zero.')) : resolve(num1 / num2);
                break;
            default:
                reject(new Error('Invalid operation.'));
        }
    });
}

calculatorPromise(5, 2, 'addition')
    .then(result => console.log('Result of 5+2:', result))
    .catch(error => console.error('Error:', error.message));

calculatorPromise(10, 0, 'division')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

calculatorPromise(10, 2, 'exponent')
    .then(result => console.log('Result:', result))
    .catch(error => console.error('Error:', error.message));

calculatorPromise(5, 4, 'subtraction')
    .then(result => console.log('Result of 5-4:', result))
    .catch(error => console.error('Error:', error.message));
