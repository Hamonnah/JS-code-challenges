//http://jscwiczenia.pl

let text = 'Hello World!!!'
console.log(text);

let welcomeButton = document.getElementById('welcome');
let statement = document.getElementById('statement');

const showWelcome = () => {
    statement.innerHTML = ('<h1>Hello World !!!</h1>');
};

welcomeButton.addEventListener('click', showWelcome);

//const e = alert('2.718228');

let variable = 12;
console.log(typeof variable);

variable = 'JavaScript';
console.log(typeof variable);

let infoText = 'JavaScript is a programming language.';
console.log(`Info: ${infoText}`);

let a = 21;
let b = 17;

//alert(`${a} + ${b} = ${a + b}`);

/* let number = prompt('Insert number');
console.log(number); */



let result = document.getElementById('result');
result.innerHTML = (`<h2>result: ${a + b}<h2/>`);

let numbers = document.getElementById('numbers');

let displayedNumbers = '';
    
for(let i=1; i<=100; i++) {
    displayedNumbers += `${i}, `;
    /* displayedNumbers = `${displayedNumbers + i}, `; */
}

numbers.innerHTML = displayedNumbers;




let tableData = document.getElementById('table-data');

let table = '<table>'
for(let i=0; i<10; i++) {
    table += `<tr><td>${i}</td><td>${i*i}</td><tr/>`;
}
table += '</table>';

tableData.innerHTML = table;



let description = document.getElementById('description');
let number = 1;

/* if(number>0) {
    description.innerHTML = 'Positive number'
} else {
    description.innerHTML = 'Number negative or 0'
}; */

(number>0) ? description.innerHTML = 'Positive number' : description.innerHTML = 'Number negative or 0';



let descriptionTwo = document.getElementById('description-two');
let numberTwo = 0; 

if(numberTwo>0) {
    descriptionTwo.innerHTML = `Number ${numberTwo} is higher then 0`
} else if(numberTwo<0) {
    descriptionTwo.innerHTML = `Number ${numberTwo} is lower then 0`
} else {
    descriptionTwo.innerHTML = `Number ${numberTwo} is 0`
}




let charDescription = document.getElementById('char-description');
let char = 2;

switch(char) {
    case 1:
        charDescription.innerHTML = `${char} <h2>niedostateczny</h2>`;
        break;
    case 2:
        charDescription.innerHTML = `${char} <h2>dopuszczajacy</h2>`;
        break;
    case 3:
        charDescription.innerHTML = `${char} <h2>dostateczny</h2>`;
        break;
    case 4:
        charDescription.innerHTML = `${char} <h2>dobry</h2>`;
        break;
    case 5:
        charDescription.innerHTML = `${char} <h2>bardzo dobry</h2>`;
        break;
    case 6:
        charDescription.innerHTML = `${char} <h2>celujacy</h2>`;
        break;
}


/* OPIS
Teksty, liczby, wyrażenia zwracają wartość logiczną
true lub false jeśli są "sprawdzane jako wyrażenia logiczne".
Warto wiedzieć jakie wartości są zwracane.
!! czyli podwójne zaprzeczenie zwraca wartość logiczną danego wyrażenia.
*/
     
console.log('"" - '+!!"");
console.log('0 - '+!!0);
console.log('null - '+!!null);
console.log('undefined - '+!!undefined);
console.log('abc - '+!!"abc");
console.log('" " - '+!!" ");
console.log('7 - '+!!7);
console.log('-45 - '+!!45);

/* OPIS
Wartość logiczna liczby 0 wynosi false.
*/

if(0)
{
    console.log('Liczba różna od zera.');
}
else
{
    console.log('Zero.')
}



