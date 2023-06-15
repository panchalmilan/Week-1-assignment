/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const expAnalysisObj = {};
  transactions.forEach(({ category, price }) => {
    if (category in expAnalysisObj) expAnalysisObj[category] += price;
    else expAnalysisObj[category] = price;
  });
  /*
    expAnalysisObj ->
    Food:30
    Clothing:40
    Electronics:30
  */

  // format data as per output needed
  const expAnalysisList = [];
  for (const key in expAnalysisObj)
    expAnalysisList.push({ category: key, totalSpent: expAnalysisObj[key] });
  /*
    expAnalysisList ->
    [
      { category: 'Food', totalSpent: 30 },
      { category: 'Clothing', totalSpent: 40 },
      { category: 'Electronics', totalSpent: 30 }
    ]
  */
  return expAnalysisList;
}
module.exports = calculateTotalSpentByCategory;
