// document.write("<p>hai</p>")

function nambahHobi(){
    let hobi = document.getElementById("text-hobi").value

    if (hobi == ""){
        document.getElementById("error").style.display = "block"
    } else {
        document.getElementById("error").style.display = "none"

        document.getElementById("list-hobi").innerHTML += `<li>${hobi}</li>`

        document.getElementById("text-hobi").value = ""
    }
}

function cekKomen(){
    let komentar = document.getElementById("komen").value
    let pola = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    // console.log(komentar)
    // console.log(pola)

    // console.log(pola.test(komentar))

    if (pola.test(komentar)){
        document.getElementById("komen").style.backgroundColor = "rgb(168, 0, 0)"
    } else {        
        document.getElementById("komen").style.backgroundColor = "white"
    }
}

function cekKtp(){
    let text = document.getElementById("ktp").value
    let pola = /^.{16}$/
    let pola2 = /^[0-9]*$/

    // console.log(text)

    // console.log(pola)
    // console.log(pola.test(text))

    // console.log(pola2)
    // console.log(pola2.test(text))

    if (pola.test(text) && pola2.test(text)){
        document.getElementById("cek-ktp").innerText="KTP sudah benar"
    } else {        
        
        document.getElementById("cek-ktp").innerText="KTP salah, harus 16 karakter dan angka semua"
    }
}