

const parseArgs = (arguments) => {
  return arguments.splice(2);
};

const input = parseArgs(process.argv)

const firstNumber = Number(input[0])
const Operator = input[1]
const secondNumber = Number(input[2])

if(Operator === 'pluss')
function pluss (number1, number2){
 return number1 + number2
}
console.log(`Your result is: ${pluss(firstNumber, secondNumber)}`);