const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((previous, current) => previous + current);
console.log('sum:', sum);

const product = numbers.reduce((previous, current) => previous * current);
console.log('product:', product);

let result = 0;
const balance = account.reduce((previous, current) => {
  if (current.type === 'deposit') {
    result = previous + current.amount;
  } else if (current.type === 'withdrawal') {
    result = previous - current.amount;
  }
  return result;
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((previous, current) =>
  Object.assign(previous, current)
, {});
console.log('composite:', composite);
