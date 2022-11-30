// event => e, ev, event - запись события
// event - это объект который содержит в себе сведения об произошедшем событии, который генерируется браузером и по умолчанию передается в качестве параметра в функцию обработчик

// function => обработчик, handler, слушатель, listener, подписчик, subscriber
// event => {происходить формирование объекта и обозначется как = e } => function({e})

// запись в нативном JS

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const clickHandler = (e) => {
    e.stopPropagation()  // событие (фунцкия) призвана обрывать/остановить дальнейшую обработку после первого срабатывания.
    console.log(e.currentTarget.id)
}
const clickHandler2 = (e) => {
    console.log(e)
}

// старая запись события

/*
sm.onclick = clickHandler // создание события клик
sm.onclick = null // удаление события клик
*/

// правильная запись события

sm.addEventListener("click", clickHandler)  // создания события 1

const getCurrentTargetID = (e) => {
    e.stopPropagation()
    alert(e.currentTarget.id)
}

md.addEventListener("click", getCurrentTargetID)
bg.addEventListener("click", getCurrentTargetID)
// sm.addEventListener("click", clickHandler2) // создания события 2
// sm.removeEventListener("click", clickHandler) // удаление события 1

const a = document.getElementById("a")
a.addEventListener("click", (e) => {
    e.preventDefault() // отмена поведения по умолчанию
    alert("Hi all!")
})