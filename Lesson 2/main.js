const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
        isStudent: false,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
        isStudent: false,
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
        isStudent: false,
    },
    {
        name: "John",
        age: 19,
        isMarried: true,
        scores: 100,
        isStudent: false,
    },
]

const getName = (obj) => obj.name
const getScores = (obj) => obj.scores
const getStudent = (obj) => ({...obj, isStudent: true})



/*const getStudentsNames = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result;
}

console.log(getStudentsNames(students))

const getStudentsScores = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result;
}

console.log(getStudentsScores(students))

const getStudents = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}

console.log(getStudents(students))*/

const getMappedArray = (arr, func) => {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result[i] = func(arr[i])
    }
    return result
}

console.log(getMappedArray(students, getName))
console.log(getMappedArray(students, (obj) => obj.name))
console.log(students.map((obj) => obj.name))

const getFilteredArray = (arr, func) => {  // func(arr[i] => true ||
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(getFilteredArray(students, st => st.age >= 21))
console.log(students.filter(st => st.age >= 21))


// Задание
const addElToEndOfArray = (arr, el) => {
    arr[arr.length] = el
    return arr.length
}

console.log(addElToEndOfArray([1, 2, 3], 4)) // => [1, 2, 3, 4] // =>4