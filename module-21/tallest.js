// function maxInArrey(number) {
//   let largest = number[0];
//   for (let i = 0; i < number.length; i++) {
//     const index = i;
//     const element = number[index];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }
// const heights = [167, 190, 120, 165, 137, 150, 320];
// const tallest = maxInArrey(heights);
// console.log("tallest person is :", tallest);

function maxInArrey(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const heightts = [127, 146, 564, 241, 44, 447];
const talleest = maxInArrey(heightts);
console.log(talleest);

function minInArray(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let minLength = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const element = numbers[i];
    if (element < minLength) {
      minLength = element;
    }
  }
  return minLength;
}

const numbers = [655, 52, 568, 41, 110, 53, 14];
7;
const lowest = minInArray(numbers);
console.log(lowest);
