//sama seperti di js tapi harus ada tipe data paramnya dan returnnya
//kalau tidak ada returnnya pakai void

function LuasPersegi(sisi: number): number {
  return sisi * sisi;
}

console.log(LuasPersegi(3));
console.log(LuasPersegi(12.5));
// console.log(LuasPersegi("akun sembilan")); error bro

function sayHello(nama: string): void {
  console.log("selamat datang,", nama);
}

sayHello("jokowi");

//function parameter

//default parameter
function sayNama(nama: string = "tidak ada nama"): void {
  console.log("selamat datang nama kamu adalah,", nama);
}

sayNama("ai");
sayNama();

//rest parameter
function tambah(...angka: number[]): number {
  let temp: number = 0;
  for (let i of angka) {
    temp += i;
  }
  return temp;
}

console.log(tambah(23, 12, 42, 12));

//optional parameter
function namaLengkap(namaDepan: string, namaBelakang?: string): void {
  console.log("nama lengkap adalah", namaDepan, namaBelakang);
}

namaLengkap("dio", "brando");
namaLengkap("fufufafa");
