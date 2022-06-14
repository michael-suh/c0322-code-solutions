/* exported maxValue */

function maxValue(stack) {
  const topNum = stack.pop();
  let maxNum = topNum;
  if (maxNum === undefined) {
    return -Infinity;
  }

  while (stack.peek() !== undefined) {
    const num = stack.pop();
    if (maxNum < num) {
      maxNum = num;
    }
  }
  return maxNum;
}
