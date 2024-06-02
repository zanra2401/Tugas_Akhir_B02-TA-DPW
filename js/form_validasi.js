
// Meassign element element html yang di butuhkan ke dalam variable
const nama = document.getElementById("nama")
const nama_error = document.getElementById("error-nama")
const nomer_handphone = document.getElementById("nomer-handphone")
const error_nomer_handphone = document.getElementById("error-nomer-handphone")
const ketersediaan_pagi = document.getElementById("pagi")
const email = document.getElementById("email")
const error_email = document.getElementById("error-email")




// fungsi untuk mengecek apakah sebuah inputan kosong atau tidak
function isEmpty(inputValue) {
    if (inputValue == "") { // jika input value sama dengan string kosong maka dapat di simpulkan bahwa input value adalah kosong
        // jika kosong akan di kembalikan nilai boolean true
        return true
    }
    // jika tidak kosong akan di kembalikan nilai boolean false
    return false
}


// fungsi untuk mengecek apakah inputan hanya berisi alfabet atau tidak
function isAlfabet(inputValue) {
    // regex di bawah berfungsi untuk mengecek apakah input value merupakan character a sampai z atau A sampai Z yang
    // karakternya bisa 1 atau lebih
    regex = /^[a-z|A-Z]+$/g

    // jika pengecekan input value dengan regex di atas mengembalikan nilai true maka
    // input value hanya mengandung character a sampai z atau A sampai Z (benar) lalu akan di kembalikan nilai dari hasil test regex tersebut
    return regex.test(inputValue) // karena regex.test() mengembalikan boolean kita dapat langsung mengembalikan kembalian dari regex.test()
}

function isDigit(inputValue) {

    // regex di bawah berfungsi untuk mengecek apakah input value merupakan angka 0 - 9 yang angkanya dapat 1 atau lebih 
    regex = /^[0-9]$/g

    // jika pengecekan input value dengan regex di atas mengembalikan nilai true maka
    // input value hanya mengandung angka 0 sampai 9 (benar) lalu akan di kembalikan nilai dari hasil test regex tersebut
    regex.test(inputValue) // karena regex.test() mengembalikan boolean kita dapat langsung mengembalikan kembalian dari regex.test()
} 


// fungsi untuk mengecek apakah inputan merupakan gmail yang valid
function isValidGmail(inputValue) {

    // regex di bawah berfungsi untuk mengecek apakah input value merupakan gmail yang valid 
    // yang angkanya dapat 1 atau lebih yang karakter/angkaya bisa lebih dari 1
    regex = /^[a-z|A-Z|0-9|.]+@gmail.com$/g

    // jika pengecekan input value dengan regex di atas mengembalikan nilai true maka
    // input value merupakan gmail yang valid lalu akan di kembalikan nilai dari hasil test regex tersebut
    return regex.test(inputValue) // karena regex.test() mengembalikan boolean kita dapat langsung mengembalikan kembalian dari regex.test()

}

function submited() {
    if (isEmpty(nama.value)) {
        event.preventDefault()
        nama_error.innerHTML = "Nama wajib di isi"
    }else if(!isAlfabet(nama.value)) {
            event.preventDefault()
            nama_error.innerHTML = "Nama hanya boleh di isi dengan alfabet"
    }else{
        nama_error.innerHTML = ""
    }

    if (isEmpty(nomer_handphone.value)) {
        event.preventDefault()
        error_nomer_handphone.innerHTML = "Nomer handphone wajib di isi"
    }else if(!isDigit(nomer_handphone.value)) {
        event.preventDefault()
        error_nomer_handphone.innerHTML = "Nomer handphone hanya boleh di isi dengan angka"
    }else{
        nomer_handphone.innerHTML = ""
    }

    if (isEmpty(email.value)) {
        event.preventDefault()
        error_email.innerHTML = "Email wajib di isi"
    }else if (!isValidGmail(email.value)) {
        event.preventDefault()
        error_email.innerHTML = "Pastikan email yang anda masukan adalah gmail yang valid"
    }else{
        error_email.innerHTML = ""
    }
}
// fungsi untuk mengecek tahun 2024 keatas
function validasi_tgl(){
			event.preventDefault()
			regex = /^([2][0-9][2][4-9])|([2][1-9][0-9][0-9])|([3-9][0-9][0-9][0-9])(\-)([0][1-9]|[1][1-2])(\-)([0-2][0-9]|[3][0-1])/g // 2024 - 9999
			console.log(regex.test(inp.value))
		}
