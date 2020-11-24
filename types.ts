// чтобы проверить консоль, в терминале пишем команды:
// tsc types.ts  (имя файла)
// node types.js

const isFetching: boolean = true;
const isLoading: boolean = false

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]
const words: string[] = ['Hello', 'TypeScript']

// Tuple
const contact: [string, number] = ['Iryna', 1234567]

// Any

let variable: any = 42
// ...
variable = 'New String'
variable = []

// ====
function sayMyName(name: string): void {  // void = значит, что функция ничего нам не вернет
    console.log(name);
}
sayMyName('Irishka')

// Never
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never { // never = цикл никогда не прекратится
    while (true) { }
}

// Type
type Login = string
const login: Login = 'admin'
const login2: Login = 'hello'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'
// const id3: ID = true // error!

type SomeType = string | null | undefined
