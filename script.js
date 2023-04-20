// 1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.

// function getFirstWordLength(str) {
//     let words = str.split(' ');
//     let firstWordLength = words[0].length;
//     console.log(firstWordLength);
// }

// getFirstWordLength('LIGHTCODE PROGRAMMING');

// 2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// function getLowerCaseWord(str) {
//     let lowerCaseStr = str.toLowerCase();
//     let word = lowerCaseStr.substring(lowerCaseStr.indexOf('ужасно'));
//     console.log(word);
// }

// getLowerCaseWord('Максимально УЖАСНО');

// 3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.

// function getUpperCaseWord(str) {
//     let upperCaseStr = str.toUpperCase();
//     let word = upperCaseStr.substring(upperCaseStr.indexOf('Максимально'));
//     console.log(word);
// }

// getUpperCaseWord('Максимально УЖАСНО');

// 4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// function getSubstring(str) {
//     let substring = str.substring(5);
//     console.log(substring);
// }

// getSubstring('Максимально УЖАСНО');

// 5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки

// function str(a, b) {
//     let str = a + b;
//     console.log(str);
// }

// str('Максимально ', 'Ужасно');

// 6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// function findIndex(str, word) {
//     return str.indexOf(word);
//   }
  
//   let str = 'Максимально Ужасно';
//   let word = 'Ужасно';
//   let index = findIndex(str, word);
//   console.log(index);

// 7. Вам дана переменная str = 'Максимально Ужасно'.
//    Выведите в консоль "встречается более 1 раза",
//    если букв 'a' встречается более 1 раза, иначе "встречается менее одного раза"


// function countLetterA(str) {
//   const aCount = (str.split('а').length - 1);
//   if (aCount > 1) {
//     return "встречается более одного раза";
//   } else {
//     return "не встречается ни разу";
//   }
// }

// const result = countLetterA('Максимально Ужасно');
// console.log(result); 

//    8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.

// function indexOfFirstA(str) {
//   let index = str.indexOf('а');
//   return index
// }

// const result = indexOfFirstA('Максимально Ужасно')
// console.log(result);

//    9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.

// function lastIndexOfFirstA(str) {
//   let index = str.lastIndexOf('а');
//   return index
// }

// const result = lastIndexOfFirstA('Максимально Ужасно')
// console.log(result);

// 10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) и выведите в консоль.

// function cutOutWord(str, word) {
//   const index = str.indexOf(word);
//   const substrResult = str.substr(index, word.length);
//   const substringResult = str.substring(index, index + word.length);
//   const sliceResult = str.slice(index, index + word.length);
//   return { substrResult, substringResult, sliceResult };
// }

// const str = 'aaa bbb ccc';
// const word = 'bbb';
// const { substrResult, substringResult, sliceResult } = cutOutWord(str, word);

// console.log(substrResult);
// console.log(substringResult);
// console.log(sliceResult);

