let counter = 0
function nambah(){
    // console.log("hai")
    
    // counter = counter + 1
    counter++

    // console.log(counter)
    document.getElementById("tempat-counter").innerText = counter
    
    document.getElementById("tempat-text1").innerText = `<a href="https://www.google.com"> google </a>`

    document.getElementById("tempat-text2").innerHTML = `<a href="https://www.google.com"> google </a>`
}

const body = document.getElementById("home")
function ubahWarna(){
    body.style.backgroundColor = "rgb(0, 97, 0)"
}

function ubahWarnaDark(){
    body.style.backgroundColor = "black"
    body.style.color = "white"
}

function ubahWarnaLight(){
    body.style.backgroundColor = "white"
    body.style.color = "black"
}

function nambahRandom(){
    // https://www.w3schools.com/js/js_random.asp
    counter = counter + Math.floor(Math.random() * 6 + 1)
    document.getElementById("tempat-counter").innerText = counter
}