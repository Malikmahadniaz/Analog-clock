setInterval(setClock, 1000)

const hourhand = document.querySelector('[data-hour-hand]')
const minutehand = document.querySelector('[data-minute-hand]')
const secondhand = document.querySelector('[data-second-hand]')


function setClock() {
    const current = new Date()
    const second = current.getSeconds() / 60
    const minutes = (second + current.getMinutes()) / 60
    const hours = ( minutes + current.getHours()) / 12

    setRotation(secondhand, second)
    setRotation(minutehand, minutes)
    setRotation(hourhand, hours)
}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()