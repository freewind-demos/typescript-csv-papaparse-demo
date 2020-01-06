import Papa from 'papaparse';

const data = [
  {name: 'AAA', age: 111},
  {name: 'BBB', age: 222},
  {name: 'CCC', age: 333},
  {name: 'DDD', age: 444},
]

const csv = Papa.unparse(data);

console.log(csv)

const parsed = Papa.parse(csv)
console.log(parsed.data)
