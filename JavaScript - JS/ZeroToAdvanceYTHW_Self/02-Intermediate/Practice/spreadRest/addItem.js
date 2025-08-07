// addItem function with spread & rest
function addItem(item, ...moreItems) {
  console.log(`Item: ${item} --<>--`);
  console.table(moreItems);
}
addItem("The MOnkey", "The Farm", "Insidius", "Carrage", "CounterInsident");
addItem(1, 83, 23, 789, 3838, 89);
