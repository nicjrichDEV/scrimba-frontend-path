const rainJanuaryByWeek = [10, 20, 0, 122];

const totalRainfallJanuary = rainJanuaryByWeek.reduce(
  (total, currentElement) => {
    return total + currentElement;
  }
);

console.log(totalRainfallJanuary); // 152

// With objects
import { studentsArr } from "./studentsArr.js";

function calculateClassAverage(studentsArr) {
  const totalGrades = studentsArr.reduce((total, currentStudent) => {
    return total + currentStudent.grade;
  }, 0);
  return totalGrades;
}

console.log(calculateClassAverage(studentsArr));

// challenge
import { itemsBoughtArr } from "./itemsBoughtArr.js";

function calculateTotalPrice(itemsBoughtArr, discount = 0) {
  const totalPrice = itemsBoughtArr.reduce((total, currentItem) => {
    return total + currentItem.priceUSD;
  }, 0);

  return totalPrice - discount;
}

console.log(calculateTotalPrice(itemsBoughtArr));
