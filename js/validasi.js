// memanggil element input yang di isi oleh user
const jadwalLes = document.getElementById("jadwal");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const nomerHandphone = document.getElementById("nomer-handphone");
const alamat = document.getElementById("alamat");

// memanggil element container untuk pesan error
const jadwalErr = document.getElementById("jadwal-err");
const namaErr = document.getElementById("err-nama");
const nomerErr = document.getElementById("err-nomer");
const alamatErr = document.getElementById("err-alamat");
const errKelas = document.getElementById("err-kelas");
const errPernyataan = document.getElementById("err-pernyataan");

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

// fungsi untuk memvalidasi nome handphone
function isNumeric(inputValue) {
  let regex = /^08[0-9]+$/g;
  if (regex.test(inputValue.trim())) {
    return true;
  }
  return false;
}

// fungsi untuk memvalidasi panjang digit karakter
function lenInput(inputValue, min, max) {
  if (inputValue.length.trim() > max || inputValue.length.trim() < min) {
    return false;
  }
  return true;
}

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
  // mengambil tanggal/detik hari ini dengan menggunakan objek Date tanpa parameter untuk mengambil hari ini
  const hariIni = new Date();
  // megambil tanggal/detik jadwal yang di tentukan menggunakan parameter yang berasal dari tanggal yang di masukan user
  const jadwal = new Date(jadwalLes);

  // karena objek ambil waktu milidetik menggunakan getTime get time ini mengembalikan milidetik yang berlalu sejak
  // 1 january 1970 atau unix epoch dan ketika kita menggurangi dari sautu date.getTime() ke suatu date.getTime()
  // akan menghasilkan selisih milidetik
  let selisih = jadwal.getTime() - hariIni.getTime();

  // mengkonversi milidetik ke hari dengan cara membagi nya dengan berapa banyak milidetik pada satu hari
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

function isNotEmptyRadio() {
  let kelas = document.getElementsByName("kelas");
  let kelasValue = false;

  for (var i = 0; i < kelas.length; i++) {
    if (kelas[i].checked) {
      kelasValue = true;
      break;
    }
  }
  if (!kelasValue) {
    errKelas.innerText = "Kelas wajib dipilih";
    return false;
  } else {
    errKelas.innerText = "";
  }
  return true;
}

function isChecked() {
  let checkboxes = document.getElementsByClassName("pernyataan-check");
  let allcheck = true;
  console.log(checkboxes);
  for (var i = 0; i < checkboxes.length; i++) {
    if (!checkboxes[i].checked) {
      allcheck = false;
    }
  }

  if (!allcheck) {
    errPernyataan.innerHTML = "Checklist semua persetujuan";
    return false;
  } else {
    errPernyataan.innerHTML = "";
    return true;
  }
}

function onSubmit() {
  if (isEmpty(nama.value)) {
    event.preventDefault();
    namaErr.innerHTML = "Nama wajib di isi";
  } else {
    if (!isAlphabet(nama.value)) {
      event.preventDefault();
      namaErr.innerHTML = "Nama hanya boleh mengandung alphabet atau spasi";
    } else {
      namaErr.innerHTML = "";
    }
  }

  if (isEmpty(nomerHandphone.value)) {
    event.preventDefault();
    nomerErr.innerHTML = "nomer handphone wajib di isi";
  } else {
    if (!isNumeric(nomerHandphone.value)) {
      event.preventDefault();
      nomerErr.innerHTML = "Nomer handphone tidak valid";
    } else if (!lenInput(nomerHandphone.value, 10, 13)) {
      event.preventDefault();
      nomerErr.innerHTML =
        "Panjang nomer handphone hanya boleh di antara 10 sampai 13";
    } else {
      nomerErr.innerHTML = "";
    }
  }

  if (!isNotEmptyRadio()) {
    event.preventDefault();
  }

  if (isEmpty(jadwal.value)) {
    event.preventDefault();
    jadwalErr.innerHTML = "Jadwal wajib di isi";
  } else {
    if (isValidJadwal(jadwalLes.value) != true) {
      event.preventDefault();
      jadwalErr.innerHTML = isValidJadwal(jadwalLes.value);
    } else {
      jadwalErr.innerHTML = "";
    }
  }

  if (isEmpty(alamat.value)) {
    event.preventDefault();
    alamatErr.innerHTML = "alamat wajib di isi";
  } else {
    if (!isAlphaNumeric(alamat.value)) {
      event.preventDefault();
      alamatErr.innerHTML =
        "Alamat hanya boleh alfanumeric koma slash dan titik";
    } else if (!lenInput(alamat.value, 0, 500)) {
      event.preventDefault();
      alamatErr.innerHTML = "panjang maksimal alamat adalah 500 character";
    } else {
      alamat.innerHTML = "";
    }
  }

  if (!isChecked()) {
    event.preventDefault();
  }
}
