/* exported getTail */

function getTail(list) {
  let lastVal = list.data;
  while (list.next) {
    lastVal = list.next.data;
    list = list.next;
  }
  return lastVal;
}
