async function getData() {
    return 'Hello';
}
const dataPromise = getData();
console.log(dataPromise);
// dataPromise.then((res) => console.log(res));