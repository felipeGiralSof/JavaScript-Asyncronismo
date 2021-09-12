const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 3000)
      : reject(new Error('Test Error'))
  });
}

doSomething = async () => {
  const Something = await doSomethingAsync();
  console.log(Something);
}

console.log('Before');
doSomething();
console.log('after');

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  }catch(error) {
    console.error(error);
  }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');