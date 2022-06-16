/* exported takeSmaller */

function takeSmaller(queue) {
  const firstValue = queue.dequeue();
  if (firstValue === undefined) return;
  if (queue.peek() === undefined) {
    return firstValue;
  }
  if (firstValue > queue.peek()) {
    queue.enqueue(firstValue);
    return queue.dequeue();
  }
  const secondValue = queue.dequeue();
  queue.enqueue(secondValue);
  return firstValue;
}
