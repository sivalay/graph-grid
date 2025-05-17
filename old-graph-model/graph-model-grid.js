
const tasks = ['Task1', 'Task2', 'Task3', 'Task4']
const times = [1, 4, 3, 4]
const maxHour = 10
const taskCont = document.querySelector('.task-container')
const gridCont = document.querySelector('.div-container')
const timeCont = document.querySelector('.time-container')

// function to create graph
function callFun(){
    drawGraph()
    markGraph()
}
callFun()

function drawGraph(){
    let taskHtml = ''
    let taskTimeHtml = ''
    tasks.forEach((task, id) => {
        taskHtml += `<li class="task">${task}</li>`        
        taskTimeHtml += `<ul class="box" data-task-id="${id}"></ul>`
    })
    taskCont.innerHTML = taskHtml
    gridCont.innerHTML = taskTimeHtml
    const gridEl = document.querySelectorAll('.box')
    drawBoxEl(gridEl)
    drawTimeCont()
}


function drawBoxEl(gridEl){
    gridEl.forEach((element, id) => {
        let gridElHtml = ''
        for (let i=1; i<=maxHour; i++){
            gridElHtml += `<li class="box-col box${id}" data-box-id="${i}"></li>`
        }
        element.innerHTML = gridElHtml
        // console.log(element, 'element')
    })
}

function drawTimeCont(){
    let timeContHtml = ''
    for (let i=0; i<=maxHour; i++){
        // console.log('hi')
        timeContHtml += `<li class="time">Time${i}</li>`
    }
    timeCont.innerHTML = timeContHtml
}

// function to mark Graph
function markGraph(){
    times.forEach((time, timeid) => {
        const grid = document.querySelectorAll(`.box${timeid}`)
        grid.forEach((boxItem) => {
            const boxId = Number(boxItem.dataset.boxId)
            // console.log(boxId, 'boxId') 
            if(boxId <= time){
                boxItem.classList.add('red-back')
            }
            if(boxId == time){
                boxItem.classList.add('bend')
            }
        })
        // console.log(grid)
    })
}



// console.log(gridCont, 'gridCont')