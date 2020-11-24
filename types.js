// чтобы проверить консоль, в терминале пишем команды:
// tsc types.ts  (имя файла)
// node types.js
var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TypeScript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TypeScript'];
// Tuple
var contact = ['Iryna', 1234567];
// Any
var variable = 42;
// ...
variable = 'New String';
variable = [];
// ====
function sayMyName(name) {
    console.log(name);
}
sayMyName('Irishka');
// Never
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) { }
}
var login = 'admin';
var login2 = 'hello';
var id1 = 1234;
var id2 = '1234';
// const id3: ID = true
