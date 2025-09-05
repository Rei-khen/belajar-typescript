//penggunaan interface untuk fungsi
interface luasBangunDatar {
  (panjang: number, lebar: number): number;
}

const luasPersegiPanjang: luasBangunDatar = (x, lebar): number => {
  return x * lebar; //tidak akan jadi masalah karna yang dicek a hanya tipe datanya
};

console.log(luasPersegiPanjang(12, 31));

//penggunaan interface buat array
interface arrayUser {
  [index: number]: string;
}

//array of object
interface Mahasiswa {
  nama: string;
  nim: number;
}

const dataMahasiswa: Mahasiswa[] = [
  { nama: "aidil", nim: 12123 },
  { nama: "kumar", nim: 12122 },
];

console.log(dataMahasiswa);
