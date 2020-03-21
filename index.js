// 1. Вывести в консоль сообщение `"My first debug"`
console.log("My first debug")

// 2. Создать переменные возраст, кличка питомца и вывести в консоль
let petAge = 4
let petName = "Justin"

console.log(petName, petAge)

// 3. Изменить возраст и вывести эти данные опять
petAge = 5

console.log(petName, petAge)

// 4. Создать переменные каждого из типов в JS и с помощью typeof вывести в консоль тип
const productName = "SSD Drive"
const productPrice = 2000
const productPriceCurrency = "UAH"
const isInStock = true 
const quantityOrdered = null
// const orderComment;
const productDescription = {
    productName: "SSD Drive",
    capacity: 512,
    capacityUnit: "Gb",
    externalInstallation: false, 
}

console.log(typeof productName)
console.log(typeof productPrice)
console.log(typeof productPriceCurrency)
console.log(typeof isInStock)
console.log(typeof quantityOrdered)
console.log(typeof productDescription)

// 5. У объекта cons `student = {name: "{Ваше имя}", surname: "{Ваша фамилия}", isActive: true}`взять свойство isActive и вывести тип
const student = {
    name: "Sergey",
    surname: "Ostapchuk",
    isActive: true,
}

console.log(typeof student.isActive)

// 6. Создать массивы из 5 элементов для таких сущностей: `фрукты, числа, студенты (массив объектов)`

const fruits = ["apple", "orange", "banana", "pineapple", "plum"]
const numbers = [2, 6, 14, 30, 62]
const students = [
    student1 = {
        name: "John",
        surname: "Doe",
        age: 21,
        group: "FE19",
        isActive: true
    },
    student2 = {
        name: "Jane",
        surname: "Doe",
        age: 20,
        group: "FE19",
        isActive: true
    }.
    student3 = {
        name: "Paul",
        surname: "Smith",
        age: 22,
        group: "FE19",
        isActive: true
    },
    student4 = {
        name: "Steve",
        surname: "Jobs",
        age: 56,
        group: "Apple",
        isActive: false
    },
    student5 = {
        name: "Baby",
        surname: "Doe",
        age: 4,
        group: "Home",
        isActive: true
    }
]

// Со звездочкой: 

// Из массива чисел от 1 до 10 вывести первый и последний элемент

const tenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(tenNumbers[0], tenNumbers[9])

// Используя объекта student (пункт 5) вывести сообщение
//  студент: {имя} {фамилия}, сейчас активен: {isActive}

console.log("Студент: "+student.name+" "+student.surname+" "+"ceйчас активен: "+student.isActive)

// ИЛИ

let message = `Студент: ${student.name} ${student.surname} сейчас активен: ${student.isActive}`

console.log(message)
