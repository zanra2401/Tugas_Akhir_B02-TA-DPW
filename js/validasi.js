const jadwalLes = document.getElementById("jadwal")
const jadwalErr = document.getElementById("jadwal-err")


// fungsi untuk mengecek apakah sebuah inputan kosong atau tidak
function isEmpty(inputValue) {
    if (inputValue == "") { // jika input value sama dengan string kosong maka dapat di simpulkan bahwa input value adalah kosong
        // jika kosong akan di kembalikan nilai boolean true
        return true
    }
    // jika tidak kosong akan di kembalikan nilai boolean false
    return false
}

function isValidJadwal(jadwalLes) {
    // mengambil tanggal/detik hari ini dengan menggunakan objek Date tanpa parameter untuk mengambil hari ini
    const hariIni = new Date()
    // megambil tanggal/detik jadwal yang di tentukan menggunakan parameter yang berasal dari tanggal yang di masukan user
    const jadwal = new Date(jadwalLes)

    // karena objek ambil waktu milidetik menggunakan getTime get time ini mengembalikan milidetik yang berlalu sejak
    // 1 january 1970 atau unix epoch dan ketika kita menggurangi dari sautu date.getTime() ke suatu date.getTime()
    // akan menghasilkan selisih milidetik
    let selisih = jadwal.getTime() - hariIni.getTime()

    // mengkonversi milidetik ke hari dengan cara membagi nya dengan berapa banyak milidetik pada satu hari
    // dan kita akan membulatkan ke atas agar suatu hari tidak di lewati sebelum hari itu benar benar di lewati
    // menggunakan Math.ceil()
    let selisihHari = Math.ceil(selisih / (1000 * 60 * 60 * 24))

    // minimal jadwal yang di pilih 1 hari setelah pemesanan 
    // dan maksimal jadwal yang di pilih 7 hari setelah pemesanan
    if (selisihHari < 1 ) {
        // jika selisih hari lebih kecil dari 1 maka berarti jadwal sama dengan  pemesanan
        // atau hari yang di pilih masa lalu
        return "Hari yang anda masukan tidak valid!!"
    }else if (selisihHari > 7) {
        // jika selisih hari lebih besar dari 7 maka hari yang di pilih lebih dari 7 hari saat pemesanan
        return "Maksimal jadwal les 7 hari setelah hari pemesanan!!"
    }

    // jika tidak ada yang sesuai di atas akan di kembalikan true
    return true
}

// jika ingin menambahkan code harus sebelum onSubmit()


function onSubmit() {
    if (isEmpty(jadwal.value)) {
        event.preventDefault()
        jadwalErr.innerHTML = "Jadwal wajib di isi"
    }else {
        if (isValidJadwal(jadwalLes.value) != true) {
            event.preventDefault()
            jadwalErr.innerHTML = isValidJadwal(jadwalLes.value)
        }else {
            jadwalErr.innerHTML = ""
        }
    }
}
