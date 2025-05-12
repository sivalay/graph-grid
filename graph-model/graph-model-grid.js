
const tasks = ['Task1', 'Task2', 'Task3', 'Task4']
const times = [1, 4, 3, 4]
const maxHour = 10
const taskCont = document.querySelector('.task-container')
const gridCont = document.querySelector('.div-container')
const timeCont = document.querySelector('.time-container')
console.log(timeCont, 'timecont')

tasks.forEach((task, id) => {
    const taskHtml = `
        <li class="task" id="task${id}">${task}</li>
    `
    taskCont.innerHTML += taskHtml

    // console.log(taskCont, id)
    
    const taskTimeHtml = `
        <ul class="box" id="task${id}" data-task-id="${id}"></ul>
    `
    gridCont.innerHTML += taskTimeHtml
})

const gridEl = document.querySelectorAll('.box')

gridEl.forEach((element, id) => {
    let gridElHtml
    for (let i=1; i<=maxHour; i++){
        gridElHtml = `<li class="box-col box${id}" id="col${i}" data-box-id="${i}"></li>`
        element.innerHTML += gridElHtml
    }
    console.log(element, 'element')
    console.log(id, 'id')
})

let timeContHtml

for (let i=0; i<=maxHour; i++){
    console.log('hi')
    timeContHtml = `<li class="time">Time${i}</li>`
    timeCont.innerHTML += timeContHtml
}

times.forEach((time, timeid) => {
    const grid = document.querySelectorAll(`.box${timeid}`)
    grid.forEach((boxItem) => {
        const boxId = boxItem.dataset.boxId
        // console.log(boxId, 'boxId') 
        if(boxId <= time){
            boxItem.classList.add('red-back')
        }
        if(boxId == time){
            boxItem.classList.add('bend')
        }
    })
    console.log(grid)
})

console.log(gridCont, 'gridCont')

function msgPrint(msg){
    let m = 0
    if(msg == 'Stop'){
        console.log(msg)
        console.log('100cn')
        m = 100
    }

    if (msg == 'Start'){
        console.log(msg)
        console.log('200cn')
        m = 200
    }
    console.log(m)
}