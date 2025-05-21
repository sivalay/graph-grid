const drawBtn = document.querySelector('#draw')
const markBtn = document.querySelector('#mark')
const clearBtn = document.querySelector('#clear')
const resetBtn = document.querySelector('#reset')

const form1 = document.querySelector('.form1')
const form2 = document.querySelector('.form2')

const maxX = document.querySelector('#max-x')
const maxY = document.querySelector('#max-y')
const xVal = document.querySelector('#x-val')
const yVal = document.querySelector('#y-val')

const timeCont = document.querySelector('.time-container')
const gridCont = document.querySelector('.div-container')
const msgCont = document.querySelector('.msg')

// function to draw grid
let xValue
let yValue
function drawGrid(){
    xValue = maxX.value
    yValue = maxY.value
    for (let i=1; i<=yValue; i++){
        const gridContHtml = `<ul class="box" id="task${i}" data-task-id="${i}"></ul>`
        gridCont.innerHTML += gridContHtml
    }
    const gridEl = document.querySelectorAll('.box')
    gridEl.forEach((gridItem, id) => {
        for(let i=1; i<=xValue; i++){
            const gridElHtml = `<li class="box-col box${id} grid-box" id="col${i}" data-box-id="${id+1}"></li>`
            gridItem.innerHTML += gridElHtml
        }
    })
    maxX.value = ''
    maxY.value = ''
}

// function to mark grid
let matchItem
function markGridCells(){
    const x = xVal.value
    const y = yVal.value
    // console.log(x,y, 'x,y')
    if(x>xValue){
        xVal.classList.add('red-bord')
    }
    if(y>yValue){
        yVal.classList.add('red-bord')
    }
    if (x<=xValue && y<=yValue){
        msgCont.classList.add('undisplay')
        xVal.classList.remove('red-bord')
        yVal.classList.remove('red-bord')
        const gridEl = document.querySelectorAll(`#col${y}`)
        gridEl.forEach((item) => {
            const boxId = item.dataset.boxId
            // console.log(boxId, 'boxId')
            if(boxId == x){
                matchItem = item
                matchItem.classList.add('red-back')
            }
        })
    }else{
        msgCont.classList.remove('undisplay')
    }
}

drawBtn.addEventListener('click', () => {
    drawGrid()
    markBtn.classList.remove('undisplay')
    clearBtn.classList.remove('undisplay')
    resetBtn.classList.remove('undisplay')
    form1.classList.add('undisplay')
    drawBtn.classList.add('undisplay')
    form2.classList.remove('undisplay')
})

markBtn.addEventListener('click', () => {
    markBtn.disabled = true
    markGridCells()
})
clearBtn.addEventListener('click', () => {
    xVal.value = ''
    yVal.value = ''
    console.log(xVal.value)
    markBtn.disabled = false
    matchItem.classList.remove('red-back')
})

resetBtn.addEventListener('click', () => {
    location.reload()
})

// console.log(gridCont, 'gridCont')
