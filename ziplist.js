const sampleList1 = ['a', 'b', 'c'];
const sampleList2 = [1, 2, 3];

/*
function zipList(list1, list2) {
  const list = [];
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < list1.length + list2.length; i++) {
    if (i % 2 === 0) {
      list[i] = list1[count1];
      count1++;
    } else {
      list[i] = list2[count2];
      count2++;
    }
  }
  return list;
}
*/

function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}

console.log(zipList(sampleList1, sampleList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(sampleList1, sampleList2));
