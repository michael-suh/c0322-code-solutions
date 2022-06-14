/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  const firstTop = stack.pop();
  if (firstTop === undefined) {
    return stack;
  }
  stack.push(value);
  stack.push(firstTop);
  return stack;
}
