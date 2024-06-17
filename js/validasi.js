// memanggil element yang akan berisi inforasi yang di isi oleh user
// semuanya menggunakan getElementById
// di sini menggunakan const karena variabel tidak akan di rubah lagi variabel tetap
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

// WARNING:  jika menemukan const berarti variabel dapat di pastikan tidak akan di ubah
// WARNING: tanda seru(!) berarti negasi atau kebalikan

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
  // fungsi ini mengecek panjang input namun di trim dulu agar spasi berturut di akhir kalimat atau spasi kosong 
  // tidak di hitung lalu di bandingkan dengan max dan min jika salah satu menghasilkan true maka panjang inputan 
  // lebih atau kurang dari yang di tentukan
  if (inputValue.trim().length > max || inputValue.trim().length < min) {
    // masuk sini jika panjang input > max
    // atau masuk sini jika panjang input < min
    return false;
  }
  // jika di atas tidak di jalankan masuk ke sini
  return true;
  
}

// fungsi untuk validasi alphabet
function isAlphabet(inputValue) {
  // regex di bawah berfungsi untuk memvalidasi apakah inputan ada di antara a-z A-Z dan " " jika tidak salah satu dari
  // character itu maka method regex.test akan mengembalikan false
  const regex = /^[a-zA-Z ]+$/g;

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
  // menggunakan method split untuk mebagi string ke beberapa bagian atau menjadi aray berdasarkan delimiter
  // di bawah menggunakan delimiter @ jadi contoh: manusia@gmail.com akan menjadi [manusia, gmail.com]
  const gmailArr = inputValue.split("@")
  // regex alphanumeric unutk mengecek apakah inputan yang di masukan hanya character yang di perbolehkan
  const alphaNumeric = /^[a-z|0-9|.]+$/g
  // regex dot_start_end berfungsi untuk mengecek bahwa charater pertama dan terakhir apakah titik atau bukan
  const dot_start_end = /^[^.][a-z|0-9|.]+[^.]$/g
  // regex dorBerturutRegex berfungsi untuk mengecek bahwa tidak ada titik berturut atau tidak
  // ? berarti charater opsional
  const dotBerturutRegex = /^([a-z0-9]+\.?[a-z0-9]?)+$/g
  // regex gmail untuk mengecek apakah domain yang dimasukan adalah benar domain gmail
  const gmail = /^gmail.com$/g

  // precabangan 
  if (gmailArr.length != 2) {
    // jika saat di slpit panjang array di bawah dua atau di atas dua 
    // berarti di dalam gmail tidak ada @ atau @ lebih dari satu
    // mengembalikan error
    return "gmail yang valid memiliki satu @"
  } else if(!dot_start_end.test(gmailArr[0])) {
    // jika gmail di awali titik maka akan masuk ke sini 
    // mengembalikan error
    return "gmail yang valid tidak di awali titik atau/dan tidak di akhiri titik"
  } else if (!alphaNumeric.test(gmailArr[0])) {
    // jika charater yang di masukan selain yang ada pada regex alphanumeric akan masuk ke sini 
    // mengembalikan error
    return "gmail yang valid hanya mengandung (a-z atau 0-9 atau titik)"
  } else if (!dotBerturutRegex.test(gmailArr[0])) {
    // jika ada titik berturut maka akan masuk ke sini 
    // mengemblikan error
    return "tidak boleh memasukan titik berturut"
  } else if (gmailArr[0].length < 6 || gmailArr[1].length  > 30) {
    // jika panjang nama dari gmail kurang dari 6 atau lebih dari 30 maka akan masuk ke sini
    // mengembalikan error
    return "panjang nama gmail yang valid adalah 6 sampai 30 character"
  } else if (!gmail.test(gmailArr[1])) {
    // jika yang di masukan bukan domain email gmail maka akan masuk ke sini
    // mengembalikan error
    return "email yang valid adalah gmail.com, contoh: username@gmail.com"
  }
  return true
}

// fungsi untuk memvalidasi nomer handphone
function isValidHandphone(inputValue) {
  // regex numeric berfungsi untuk mengecek apakah yang di masukan user angka atau bukan
  const numeric = /^[0-9]+$/g
  // regex noIndonesia berfungsi untuk mengecek apakah nomer yang di masukan user adalah nomer indonesia yang valid
  const noIndonesia = /^08[0-9]+$/g
  // tanda ! berarti negasi yang berarti jika !true = false jika !false = true, atau bisa di sebut kebalikanya
  if (!numeric.test(inputValue)) {
    // expressi di atas menghasilkan true maka akan masuk ke sini karena kembalian numeric.test adalah false dan di negasi menjadi true
    // dan mengembalikan pesan error 
    return "masukan nomer hanphone hanya boleh angka"
  } else if (!noIndonesia.test(inputValue.trim())){
    // expressi di atas menghasilkan true maka akan masuk ke sini karena kembalian noIndonesia.test adalah false dan di negasi menjadi true
    // dan mengembalikan pesan error 
    return "masukan nomer handphone indonesia di awali dengan 08"
  } else {
    // jika selain di atas berarti masukan benar dan mengembalikan true
    return true
  }
}


// fungsi untuk validasi alphanumeric
function isAlphaNumeric(inputValue) {
  // regex di bawah berati di jek jika inputan yang di masukan bukan character yang berada dalam kurung 
  // berarti inputan bukan alphanumeric atau salah
  const regex = /^[a-zA-Z0-9 ,./]+$/;
  if (regex.test(inputValue.trim())) {
    // jika expressi regex.test() di atas true maka akan masuk ke sini dan mengembalikan true
    return true;
  } else {
    // jika tidak masuk ke sini dan mengembalikan false
    return false;
  }
}




// fungsi untuk validasi tanggal
function isValidJadwal(jadwalLes) {
  // mengambil tanggal hari ini dengan menggunakan objek Date tanpa parameter untuk mengambil hari ini
  const hariIni = new Date();
  // megambil tanggal dari jadwal yang di tentukan menggunakan parameter yang berasal dari tanggal yang di masukan user
  const jadwal = new Date(jadwalLes);

  // untuk mengambil waktu milidetik menggunakan getTime get time ini mengembalikan milidetik yang berlalu sejak
  // 1 january 1970 atau unix epoch dan ketika kita menggurangi dari sautu date.getTime() ke suatu date.getTime()
  // akan menghasilkan selisih milidetik dapat kita gunakan untuk mencari selisih hari
  const selisih = jadwal.getTime() - hariIni.getTime();

  // mengkonversi selisih milidetik ke hari dengan cara membagi nya dengan berapa banyak milidetik pada satu hari
  // dan kita akan membulatkan ke atas agar suatu hari tidak di lewati sebelum hari itu benar benar di lewati
  // menggunakan Math.ceil()
  const selisihHari = Math.ceil(selisih / (1000 * 60 * 60 * 24)); 

  // minimal jadwal yang di pilih 1 hari setelah pemesanan
  // dan maksimal jadwal yang di pilih 7 hari setelah pemesanan
  if (selisihHari < 1) {
    // jika selisih hari lebih kecil dari 1 maka berarti jadwal sama dengan  pemesanan
    // atau hari yang di pilih masa lalu
    return "Minimal jadwal les satu hari setelah hari pemesanan!!";
  } else if (selisihHari > 7) {
    // jika selisih hari lebih besar dari 7 maka hari yang di pilih lebih dari 7 hari saat pemesanan
    return "Maksimal jadwal les 7 hari setelah hari pemesanan!!";
  }

  // jika tidak ada yang sesuai di atas akan di kembalikan true
  return true;
}





//fungsi untuk memvalidasi radio button wajib pilih salah satu
function isNotEmptyRadio() {
  const kelas = document.getElementsByName("kelas");//mengambil element radio button berdasarkan nama "kelas"
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
  const checkboxes = document.getElementsByClassName("pernyataan-check");
  let allcheck = false;
    
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



  // WARNING: prevent.default() di kasus ini berfungsi agar form tidak melanjutkan ke halaman lain 
  // atau agar form tidak melakukan sifat default saat di submit, di kasus ini di panggil saat ada inputan yang salah


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
    // jika tidak kosong kita gunakan fungsi isValidEmail dari fungsi yang telah kita buat 
    // jika email yang di masukan user valid maka fungsi akan mengembalikan nilai true
    // jika tidak valid akan mengembalikan string error atau pesan error
    const isEmail = isValidEmail(email.value)
    if (isEmail != true) {
      // jika isEmail tidak true akan masuk ke sini karena isEmail bukan true
      // berarti isEmail merupakan pesan error lalu langsung masukan nilai isEmail ke dalam div error email
      errEmail.innerHTML = isEmail
    } else {
      // jika isEmail selain tidak true atau jika isEmail true akan masuk ke sini
      // error di kosongi, karena mungkin ini pernah di isi error, agar erronya hilang
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
    const isValidNo = isValidHandphone(nomerHandphone.value)
    if (!lenInput(nomerHandphone.value, 10, 13)) {
      // jika expressi di atas true maka akan masuk ke sini
      // memanggil event.preventDefault() agar form tidak melanjutkan ke suatu halaman atau actionya tidak berjalan
      event.preventDefault();
      // lalu error di isi sebagai berikut
      errNomer.innerHTML = "Panjang nomer handphone hanya valid di antara 10 sampai 13";
    } else if (isValidNo != true) {
       errNomer.innerHTML = isValidNo
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
    // jika !isChecked() menghasilkan true maka masuk ke sini
    event.preventDefault();
  }
}
