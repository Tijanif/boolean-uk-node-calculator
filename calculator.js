

const parseArgs = (arguments) => {
  return arguments.splice(2);
};

const input = parseArgs(process.argv)




const calculator = ({...args}) => {
 const firstNumber = Number(input[0])
const Operator = input[1]
const secondNumber = Number(input[2])

if(Operator === 'plus'){
 return firstNumber + secondNumber
}

if(Operator === 'minus'){
 return firstNumber - secondNumber
}

if(Operator === 'times'){
 return firstNumber * secondNumber
}

if(Operator === 'divide'){
 return firstNumber / secondNumber
}

}

console.log(`Your result is: ${calculator(input)}`);
