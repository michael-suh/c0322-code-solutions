/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  const firstTop = stack.pop();
  if (firstTop === undefined) {
    return undefined;
  }
  const secondTop = stack.peek();
  stack.push(firstTop);
  return secondTop;
}
