var button = document.getElementById('button')
var text = document.getElementById('advice')
var container = document.getElementById('container')

const getAdvice = async () =>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    document.getElementById('advice-number').innerHTML = `advice #${data.slip.id}`
    document.getElementById('advice').innerHTML = data.slip.advice
    button.classList.add('rotate')

    if(text.style.height >= 100){
        container.style.height = '500px'
    }
}

function notate(){
    button.classList.remove('rotate')    
}