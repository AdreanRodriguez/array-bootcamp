/*1*/
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
// let fruits = [`Orange`, `pear`, `kiwi`, `apple`, `banana`]
// console.log(`uppgift 1` + ` ` + fruits);

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
// let myArray = [`string`, 2,[`pear`, `apple`]]
// console.log('Uppgift 2' + ` ` + myArray);

/* 3 */
//  let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// console.log(animals.length) //hur många objekt arrayen ovan innehåller.
// console.log('Uppgift 3');

/* 4 */
// let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
// /* I arrayen ovan, hämta cat. */
// console.log('Uppgift 4' + ` ` + animals[0]);

/* 5 */
//  let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] 
// /* I arrayen ovan, hämta funky chihuahua. */
// console.log('Uppgift 5' + ` ` + animals.pop());

/* 6 */
//  let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
//  let index = animals.indexOf[1]
//  animals[1] = `tiger`;
//  console.log(animals)
// /* I arrayen ovan, byt ut hamster mot tiger. */
// console.log('Uppgift 6');

/* 7 */
//  let a = [1,2,3]; 
//  let b = [4,5,6]; 
//  let newArray = a.concat(b);
// console.log(newArray)
// /* Sätt ihop ovanstående arrayer. */

// console.log('Uppgift 7');

/* 8 */
//  let a = [1,2,3,7,8,9];
//  let b = [4,5,6]; 
//  let mergeResult = a.slice(0, 3).concat(b, a.slice(3));
//  console.log(mergeResult)

// /* Merga in array b på index 3 i array a.. */
// console.log('Uppgift 8');

/* 9 */
// let arr = ['a', 'b', 'c']; 
// let cloneArray = [...arr];
// console.log(arr)
// console.log(cloneArray)
// /* Klona ovanstående array. */
// console.log('Uppgift 9');

/* 10 */
//  let fruits = ['kiwi', 'apple', 'pear']; 
//  fruits.push(`orange`)
//  console.log(fruits)
// /* Lägg till en frukt i slutet av arrayen ovan. */
// console.log('Uppgift 10');

/* 11 */
//  let fruits = ['kiwi', 'apple', 'pear'];
//  fruits.unshift(`orange`)
//  console.log(fruits)
// /* Lägg till en frukt i början av arrayen ovan. */
// console.log('Uppgift 11');

/* 12 */
//  let fruits = ['kiwi', 'apple', 'pear']; 
//  fruits.pop()
//  console.log(fruits)
// /* I arrayen ovan, ta bort sista frukten i arrayen. */
// console.log('Uppgift 12');

/* 13 */
//  let fruits = ['kiwi', 'apple', 'pear']; 
// fruits.shift()
// console.log(fruits)
// /* I arrayen ovan, ta bort första frukten i arrayen. */
// console.log('Uppgift 13');

/* 14 */
//  let fruits = ['kiwi', 'apple', 'pear']; 
//  fruits.splice(1, 0, `banana`) // 1 = indexposition, 0 = hur många du vill ta bort, `lägg till ord`
//  console.log(fruits)
// /* Sätt in en frukt i arrayen ovan på index 1. */
// console.log('Uppgift 14');

/* 15 */
//  let fruits = ['kiwi', 'apple', 'pear']; 
//  fruits.splice(2, 0, 'orange', 'banana', 'mango');
//  console.log(fruits)
// /* Sätt in tre frukter i arrayen ovan på index 2. */
// console.log('Uppgift 15');

/* 16 */
//  let names = ['David', 'Christoffer', 'Johan', 'Maja'] 
//  names.splice(1, 2,)
//  console.log(names)
// /* I arrayen ovan, ta bort Christoffer och Johan. */
// console.log('Uppgift 16');

/* 17 */
//  let nums = [1,2,3,4,5,6,7,8,9]; 
//  nums.reverse()
//  console.log(nums)
// /* Spegelvänd på arrayen ovan. */
// console.log('Uppgift 17');

/* 18 */
//  let str = 'Supercalifragilisticexpialidocious'; 
//  let findLetter = `n`;

//  if (str.includes(findLetter)) {
//     console.log(`Det finns ${findLetter} i strängen`)
//  } else {
//     console.log(`Det finns inte någon ${findLetter} i strängen`)
//  }
// /* Kika om strängen ovan innehåller bokstaven n. */
// console.log('Uppgift 18');

/* 19 */
//  let str = 'Supercalifragilisticexpialidocious'; 
//  let findLetter = `x`

//  if (str.includes(findLetter)) {
//     console.log(`Bokstaven ${findLetter} finns med i strängen`)
//  } else {
//     console.log(`Bokstaven ${findLetter} finns inte med i strängen`)
//  }
// /* Kika om strängen ovan innehåller bokstaven x. */
// console.log('Uppgift 19');

/* 20 */
//  let str = 'Supercalifragilisticexpialidocious'; 
//  let positionOfP = str.indexOf(`p`);
//  console.log(`Första positionen som "P" har är ${positionOfP}, börjar räkna från 0`)
// /* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
// console.log('Uppgift 20');

/* 21 */
//  let str = 'Supercalifragilisticexpialidocious'; 
//  let firstFiveLetters = str.slice(0, 5)
//  console.log(`De fem första tecknen är "${firstFiveLetters}"`)
// /* I strängen ovan, plocka fram de 5 första tecknena. */
// console.log('Uppgift 21');

/* 22 */
//  let str = 'Supercalifragilisticexpialidocious'; 
//  let lastSevenLetters = str.slice(-7)
//  console.log(`De sju sista orden är "${lastSevenLetters}"`)
// /* I strängen ovan, plocka fram de 7 sista tecknena. */
// console.log('Uppgift 22');

/* 23 */
//  let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; 
//  let numbersOverFive = numArray.filter(num => num > 5);
//  console.log(`Nummer som är över 5 är "${numbersOverFive}"`)
// /* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
// console.log('Uppgift 23');

/* 24 */
//  let numArray = [23, 45, 5, 62, 1, 21, 3, 54];
//  let numbersUnderFive = numArray.filter(num => num < 5);
//  console.log(`Nummer som är under 5 är "${numbersUnderFive}"`)
// /* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
// console.log('Uppgift 24');

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen i dokumentet. */

// let persons = [
//     {
//         name: "Felicia",
//         age: 12
//     },
//     {
//         name: "Pelle",
//         age: 20
//     },
//     {
//         name: "Peter",
//         age: 59
//     },
//     {
//         name: "Anna",
//         age: 32
//     },
//     {
//         name: "Jocke",
//         age: 18
//     },
//     {
//         name: "Ella",
//         age: 3
//     }
// ]


// // Filtrera personer som är 18 år eller äldre
//  let adults = persons.filter(person => person.age >= 18);

// // // Skriv ut namnen på de vuxna personerna
//  adults.forEach(adult => console.log(adult.name));
// console.log('Uppgift 25');

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst ner i dokumentet. */

// let persons = [
//     {
//         name: "Felicia",
//         age: 12
//     },
//     {
//         name: "Pelle",
//         age: 20
//     },
//     {
//         name: "Peter",
//         age: 59
//     },
//     {
//         name: "Anna",
//         age: 32
//     },
//     {
//         name: "Jocke",
//         age: 18
//     },
//     {
//         name: "Ella",
//         age: 3
//     }
// ]


// // Filtrera personer som är 18 år eller äldre
//  let adults = persons.filter(person => person.age < 18);

// // // Skriv ut namnen på de vuxna personerna
//  adults.forEach(adult => console.log(adult.name));
// console.log('Uppgift 26');

/* 27 */
//  let arr = ['beta', 'alfa', 'gamma']; 
//  arr.sort();
//  console.log(arr);
// /* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
// console.log('Uppgift 27');

/* 28 */
//  let nums = [1,5,7,9,3,4,2,6,8]; 
//  nums.sort()
//  console.log(nums)
// /* Sortera ovanstående array numeriskt. */
// console.log('Uppgift 28');

/* 29 */
/* I person-arrayen längst ner i dokumentet, sortera objekten efter ålder, yngst först. */
// let persons = [
//     {
//         name: "Felicia",
//         age: 12
//     },
//     {
//         name: "Pelle",
//         age: 20
//     },
//     {
//         name: "Peter",
//         age: 59
//     },
//     {
//         name: "Anna",
//         age: 32
//     },
//     {
//         name: "Jocke",
//         age: 18
//     },
//     {
//         name: "Ella",
//         age: 3
//     }
// ]

// // Sortera värdet
// persons.sort((a, b) => {return a.age - b.age});

// console.log(persons)
// console.log('Uppgift 29');

/* 30 */
/* I person-arrayen längst ner i dokumentet, sortera objekten efter ålder, äldst först. */
// let persons = [
//     {
//         name: "Felicia",
//         age: 12
//     },
//     {
//         name: "Pelle",
//         age: 20
//     },
//     {
//         name: "Peter",
//         age: 59
//     },
//     {
//         name: "Anna",
//         age: 32
//     },
//     {
//         name: "Jocke",
//         age: 18
//     },
//     {
//         name: "Ella",
//         age: 3
//     }
// ]

// persons.sort((a, b) => {return b.age - a.age});
// console.log(persons)

// console.log('Uppgift 30');

/* 31 */
/* I person-arrayen längst ner i dokumentet, sortera objekten i bokstavsordning efter deras namn */
// let persons = [
//     {
//         name: "Felicia",
//         age: 12
//     },
//     {
//         name: "Pelle",
//         age: 20
//     },
//     {
//         name: "Peter",
//         age: 59
//     },
//     {
//         name: "Anna",
//         age: 32
//     },
//     {
//         name: "Jocke",
//         age: 18
//     },
//     {
//         name: "Ella",
//         age: 3
//     }
// ]

// persons.sort((a, b) => {
//     let nameA = a.name.toUpperCase(); // Ignorerar stor & liten bokstav
//     let nameB = b.name.toUpperCase(); // Ignorerar stor & liten bokstav

//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0;

// })

// console.log(persons)

// console.log('Uppgift 31');

/* 32 */
/* I person-arrayen längst ner i dokumentet, gör om alla namn till versaler. */
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
let upperCase = persons.map(persons => persons.name.toUpperCase());
console.log(upperCase)

console.log('Uppgift 32');

/* 33 */
/* I person-arrayen längst ner i dokumentet, spegelvänd alla namn. */
console.log('Uppgift 33');

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log('Uppgift 36');

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log('Uppgift 37');



//Array innehållandes flera objekt
/*let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]
*/