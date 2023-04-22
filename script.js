setInterval(function time(){
    const DiaHoje = new Date()
    const hora = DiaHoje.getHours()
    const minutos = DiaHoje.getMinutes()
    const segundos = DiaHoje.getSeconds()
    const respostah = document.getElementById("horas")
    const respostam = document.getElementById("minutos")
    const respostas = document.getElementById("segundos")
    respostah.innerHTML = `${hora} <strong>Horas</strong>`
    respostam.innerHTML = `${minutos} <strong>Minutos</strong>`
    respostas.innerHTML = `${segundos} <strong>Segundos</strong>`
})