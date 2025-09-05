/* 
enum (enumeration) adalah cara untuk memberi nama pada sekumpulan nilai numerik atau string.
Biasanya dipakai ketika ada data yang memiliki pilihan tetap (fixed set of values), misalnya hari dalam seminggu, arah mata angin, status user, dsb.
*/

enum arah {
  timur = "timur",
  barat = "barat",
  selatan = "selatan",
  utara = "utara",
}

const kondisi: { kecepatanAngin: number; arahAngin: arah } = {
  kecepatanAngin: 30,
  arahAngin: arah.barat,
};

console.log(kondisi);

//studi kasus lain
enum userType {
  Admin,
  reguler,
  programmer,
}

console.log(userType.Admin); //nilai yang keluar adalah 0 mirip seperti array

enum statusUser {
  freeUser = 2,
  premium,
  pro,
  ultimate,
}

console.log(statusUser.premium); //nilai awal bisa diset

enum respon {
  yes = "yes",
  no = 0,
}

console.log(respon.yes); //tipe bisa acak
console.log(respon.no);
