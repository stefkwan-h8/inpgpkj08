function ubahGambarSunny(){
    document.body.style.backgroundImage='url("asset/sunny.jpg")'
    document.body.style.color = "#FFFF00"
}
function ubahGambarCloudy(){
    document.body.style.backgroundImage='url("asset/cloudy.jpg")'
    document.body.style.color = "#C0C0C0"
}
function ubahGambarRainy(){
    document.body.style.backgroundImage='url("asset/rainy.jpg")'
    document.body.style.color = "#008080"
}
function ubahGambarRandom(){
    let random = Math.floor(Math.random() * 4) //0,1,2,3

    if (random == 0){
        ubahGambarSunny()
    } else if (random == 1){
        ubahGambarCloudy()
    } else if (random == 2) {
        ubahGambarRainy()
    } else {        
        document.body.style.backgroundImage=''
        document.body.style.color = "black"
    }
}