const todolistID_1 = "24fs-hd4q"
const todolistID_2 = "76sq-k7w3"


const todolist = [
    {
        id: todolistID_1,
        title: "What to learn",
        filter: "all",
/*        tasks: [
            {id: 11, title: "JS", isDone: false},
            {id: 12, title: "TS", isDone: false},
            {id: 13, title: "CSS", isDone: false},
        ],*/
    },
    {
        id: todolistID_2,
        title: "What to buy",
        filter: "all",
/*        tasks: [
            {id: 21, title: "Milk", isDone: false},
            {id: 22, title: "Sugar", isDone: false},
            {id: 23, title: "Meat", isDone: false},
        ],*/
    },
]

const tasks = {
    [todolistID_1]: [
        {id: 11, title: "JS", isDone: false},
        {id: 12, title: "TS", isDone: false},
        {id: 13, title: "CSS", isDone: false},
    ],
    [todolistID_2]: [
        {id: 21, title: "Milk", isDone: false},
        {id: 22, title: "Sugar", isDone: false},
        {id: 23, title: "Meat", isDone: false},
    ],
}

console.log(tasks[todolistID_1].find(t=> t.id === 12).title) // JS
console.log([...tasks[todolistID_2], {id: 24, title: "Water", isDone: false}]) // массив из 4-х элементов
console.log(tasks[todolistID_1].map(t => t.title))  // массив заголовков


// reduce

const nums = [10, 20, 30]
console.log(nums.reduce((acc, el) => acc + el, 0)) // 60
console.log(nums.reduce((acc, el) => acc > el ? acc : el)) // поиск наибольшее число в массиве

// массив с объектами

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100,
    },
];

const sts = {
    "1": {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
}

console.log(students.reduce((acc, el) => {
    acc[el.id] = {...el}
    delete acc[el.id].id
    return acc
}, {}))

console.log(students.reduce((acc, el) => acc + el.scores, 0))