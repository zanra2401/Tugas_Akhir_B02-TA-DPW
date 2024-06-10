// memanggil element yang akan berisi inforasi yang di isi oleh user
// semuanya menggunakan getElementById
const jadwalLes = document.getElementById("jadwal");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const nomerHandphone = document.getElementById("nomer-handphone");
const alamat = document.getElementById("alamat");
const mentor = document.getElementById("mentor");

// memanggil element container untuk pesan error
const errJadwal = document.getElementById("err-jadwal");
const errNama = document.getElementById("err-nama");
const errNomer = document.getElementById("err-nomer");
const errAlamat = document.getElementById("err-alamat");
const errKelas = document.getElementById("err-kelas");
const errPernyataan = document.getElementById("err-pernyataan");
const errEmail = document.getElementById("err-email")
const errMentor = document.getElementById("err-mentor")

// fungsi untuk mengecek apakah sebuah inputan kosong atau tidak
function isEmpty(inputValue) {
  if (inputValue.trim() == "") {
    // jika input value sama dengan string kosong maka dapat di simpulkan bahwa input value adalah kosong
    // jika kosong akan di kembalikan nilai boolean true
    return true;
  }
  // jika tidak kosong akan di kembalikan nilai boolean false
  return false;
}

// fungsi untuk memvalidasi panjang digit karakter
function lenInput(inputValue, min, max) {
  if (inputValue.trim().length > max || inputValue.trim().length < min) {
    return false;
  }
  return true;
  
}

// fungsi untuk validasi alphabet
function isAlphabet(inputValue) {
  // regex di bawah berfungsi untuk memvalidasi apakah inputan ada di antara a-z A-Z dan " " jika tidak salah satu dari
  // character itu maka method regex.test akan mengembalikan false
  let regex = /^[a-zA-Z ]+$/g;

  if (regex.test(inputValue.trim())) {
    // jika regex.test mengembalikan true akan masuk ke cabang ini
    // dan mengembalikan true
    return true;
  }
  // jika regex.test mengembalikan falsa akan melewati cabang di atas
  // dan mengembalikan false
  return false;
}

// fungsi ini untuk memvalidasi email
function isValidEmail(inputValue) {
  let gmailArr = inputValue.split("@")
  let alphaNumeric = /^[a-z|0-9|.]+$/g
  let dotBerturutRegex = /^([a-z0-9]+\.?[a-z0-9]?)+$/g
  let gmail = /^gmail.com$/g
  console.log(gmailArr[0])
  if (gmailArr.length != 2) {
    return "gmail yang valid memiliki satu @"
  } else if (!alphaNumeric.test(gmailArr[0])) {
    return "gmail yang valid hanya mengandung (a-z atau 0-9 atau titik)"
  } else if (!dotBerturutRegex.test(gmailArr[0])) {
    return "tidak boleh memasukan titik berturut"
  } else if (gmailArr[0].length < 6 || gmailArr[1].length  > 30) {
    return "panjang nama gmail yang valid adalah 6 sampai 30 character"
  } else if (!gmail.test(gmailArr[1])) {
    return "email yang valid adalah gmail.com, contoh: userName@gmail.com"
  }
  return true
}

// fungsi untuk memvalidasi nomer handphone
function isNumeric(inputValue) {
  let regex = /^08[0-9]+$/g;
  if (regex.test(inputValue.trim())) {
    return true;
  }
  return false;
}



function isAlphaNumeric(inputValue) {
  const regex = /^[a-zA-Z0-9 ,./]+$/;
  if (regex.test(inputValue.trim())) {
    return true;
  } else {
    return false;
  }
}

// a = /^[a-z0-9.]+@([a-zA-Z0-9_][a-zA-Z0-9_]+[a-zA-Z0-9_])+$/g;

function isValidJadwal(jadwalLes) {
  // mengambil tanggal hari ini dengan menggunakan objek Date tanpa parameter untuk mengambil hari ini
  const hariIni = new Date();
  // megambil tanggal dari jadwal yang di tentukan menggunakan parameter yang berasal dari tanggal yang di masukan user
  const jadwal = new Date(jadwalLes);

  // untuk mengambil waktu milidetik menggunakan getTime get time ini mengembalikan milidetik yang berlalu sejak
  // 1 january 1970 atau unix epoch dan ketika kita menggurangi dari sautu date.getTime() ke suatu date.getTime()
  // akan menghasilkan selisih milidetik dapat kita gunakan untuk mencari selisih hari
  let selisih = jadwal.getTime() - hariIni.getTime();

  // mengkonversi selisih milidetik ke hari dengan cara membagi nya dengan berapa banyak milidetik pada satu hari
  // dan kita akan membulatkan ke atas agar suatu hari tidak di lewati sebelum hari itu benar benar di lewati
  // menggunakan Math.ceil()
  let selisihHari = Math.ceil(selisih / (1000 * 60 * 60 * 24)); 

  // minimal jadwal yang di pilih 1 hari setelah pemesanan
  // dan maksimal jadwal yang di pilih 7 hari setelah pemesanan
  if (selisihHari < 1) {
    // jika selisih hari lebih kecil dari 1 maka berarti jadwal sama dengan  pemesanan
    // atau hari yang di pilih masa lalu
    return "Hari yang anda masukan tidak valid!!";
  } else if (selisihHari > 7) {
    // jika selisih hari lebih besar dari 7 maka hari yang di pilih lebih dari 7 hari saat pemesanan
    return "Maksimal jadwal les 7 hari setelah hari pemesanan!!";
  }

  // jika tidak ada yang sesuai di atas akan di kembalikan true
  return true;
}
//fungsi untuk memvalidasi radio button wajib pilih salah satu
function isNotEmptyRadio() {
  let kelas = document.getElementsByName("kelas");//mengambil element radio button berdasarkan nama "kelas"
  let kelasValue = false;//inisialisasi variabel kelasValue dengan nilai false

  for (var i = 0; i < kelas.length; i++) { //looping setiap element di radio button
    if (kelas[i].checked) { //jika salah satu radio button dipilih(checked) 
      kelasValue = true; //maka nilai dari variabel kelasValue diubah menjadi true
      break; //keluar dari loop karena yang dibutuhkan hanya satu yang dipilih
    }
  }
  if (!kelasValue) { // jika tidak ada radio button yang dipilih
    errKelas.innerText = "wajib pilih salah satu"; //maka akan menampilkan pesan kesalahan ini
    return false; //dan akan mengembalikan nilai false menandakan pemeriksaan gagal
  } else { //jika ada radio button yang dipilih/kelasValue = true
    errKelas.innerText = "";// maka pesan kesalahan akan dihapus
  }
  return true;//mengembalikan nilai true, bahwa pemeriksaan berhasil
}

//fungsi untuk memvalidasi checkbox wajib dipilih
function isChecked() {
  let checkboxes = document.getElementsByClassName("pernyataan-check");
  let allcheck = false;
  console.log(checkboxes);
  
  for (let i = 0; i < checkboxes.length; i++) { // Looping elemen checkbox dengan nama "pernyataan-check"
    if (checkboxes[i].checked) { // Jika checkbox dipilih (checked)
      allcheck = true; // maka variabel allcheck diubah true
      break; // Keluar dari loop karena checkbox sudah dipilih
    }
  }
  if (!allcheck) {
    errPernyataan.innerHTML = "Checklist persetujuan";
    return false;
  } else {
    errPernyataan.innerHTML = "";
    return true;
  }
}

// FUNGSI INI AKAN BERJALAN KETIKA FORM DI SUBMIT
function onSubmit() {
  // di fungsi ini menggunakan fungsi fungsi validasi yang telah dibuat di atas
  // pengecekan nama 
  if (isEmpty(nama.value)) {
    // pertama di cek menggunakan fungsi isEmpty nama jika true maka akan masuk ke sini dan 
    // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
    event.preventDefault();
    // lalu error di isi sebagai berikut
    errNama.innerHTML = "nama wajib diisi";
  } else {
    // jika tidak kosong akan masuk ke sini
    // di cek, karena di sini kita menggunakan operator logical not ! hasil return dari isAlphabet akan di negasikan
    // jika isAlphabet mengembalikan true akan di menjadi false begitu pun sebaliknya
    if (!isAlphabet(nama.value)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      errNama.innerHTML = "hanya boleh mengandung alphabet atau spasi";
    } else {
      // jika selain di ats akan masuk ke sini
      // error di kosongi, karena mungkin ini pernah di isi error, agar erronya hilang
      errNama.innerHTML = "";
    }
  }

  if (isEmpty(email.value)) {
    // di cek menggunakan fungsi isEmpty email jika true maka akan masuk ke sini dan 
    // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
    event.preventDefault()
    // lalu error di isi sebagai berikut
    errEmail.innerHTML = "email wajib diisi"
  }else {
    let isEmail = isValidEmail(email.value)
    if (isEmail != true) {
      errEmail.innerHTML = isEmail
    } else {
      errEmail.innerHTML = ""
    }
  }

  if (isEmpty(nomerHandphone.value)) {
    // di cek menggunakan fungsi isEmpty nomerHandphone jika true maka akan masuk ke sini dan 
    // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
    event.preventDefault();
    // lalu error di isi sebagai berikut
    errNomer.innerHTML = "nomor ponsel wajib diisi";
  } else {
    // jika tidak kosong akan masuk ke sini
    // di cek, karena di sini kita menggunakan operator logical not ! hasil return dari isNumeric akan di negasikan
    // jika isNumeric mengembalikan true akan di menjadi false begitu pun sebaliknya
    if (!isNumeric(nomerHandphone.value)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
       // lalu error di isi sebagai berikut
      errNomer.innerHTML = "Nomer handphone tidak valid";
    } else if (!lenInput(nomerHandphone.value, 10, 13)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      errNomer.innerHTML = "Panjang nomer handphone hanya valid di antara 10 sampai 13";
    } else {
      // jika selain di atas akan masuk ke sini
      // error di kosongi, karena mungkin ini pernah di isi error, agar erronya hilang
      errNomer.innerHTML = "";
    }
  }

  if (!isNotEmptyRadio()) {
    event.preventDefault();
  }

  
  if (isEmpty(jadwal.value)) {
    // di cek menggunakan fungsi isEmpty jadwal jika true maka akan masuk ke sini dan 
    // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
    event.preventDefault();
    // lalu error di isi sebagai berikut
    errJadwal.innerHTML = "jadwal wajib diisi";
  } else {
    // jika tidak kosong akan masuk ke sini
    // di cek apakah isValidJadwal mengebalikan true
    if (isValidJadwal(jadwalLes.value) != true) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      // di sini di isi dengan fungsi nya karen jika isValidJadwal bukan mengembalikan true isValidJadwal mengebalikan pesan error
      errJadwal.innerHTML = isValidJadwal(jadwalLes.value);
    } else {
      // jika selain di atas masuk ke sini
      // error di kosongi, karena mungkin ini pernah di isi error, agar erronya hilang
      errJadwal.innerHTML = "";
    }
  }

  if (isEmpty(mentor.value)) {
    errMentor.innerHTML = "pelatih wajib diisi"
  } else {
    errMentor.innerHTML = ""
  }

  if (isEmpty(alamat.value)) {
    // di cek menggunakan fungsi isEmpty alamat jika true maka akan masuk ke sini dan 
    // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
    event.preventDefault();
    // lalu error di isi sebagai berikut
    errAlamat.innerHTML = "alamat wajib diisi";
  } else {
    // jika tidak kosong akan masuk ke sini
    // di cek, karena di sini kita menggunakan operator logical not ! hasil return dari isValidEmail akan di negasikan
    // jika isAlphaNumerix mengembalikan true akan di menjadi false begitu pun sebaliknya
    if (!isAlphaNumeric(alamat.value)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      errAlamat.innerHTML =
        "Alamat hanya boleh alfanumeric koma slash dan titik";
    } else if (!lenInput(alamat.value, 0, 500)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      errAlamat.innerHTML = "panjang maksimal alamat adalah 500 character";
    } else {
      // jika selain di atas akan masuk ke sini
      // error di kosongi, karena mungkin ini pernah di isi error, agar erronya hilang
      errAlamat.innerHTML = "";
    }
  }

  if (!isChecked()) {
    event.preventDefault();
  }

  
  
}
