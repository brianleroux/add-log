import add from './add'
import rando from 'random-number-in-range'

let pp = (first, second) => {
  console.log(add(first, second))
  console.log(rando(1, 10)) // returns a number between 1 and 10
}

export default pp
