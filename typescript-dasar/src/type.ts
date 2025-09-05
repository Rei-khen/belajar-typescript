//membuat tipe data alias
type hp = {
  merek: string;
  prosssor: string;
  ram: 2 | 4 | 6 | 8 | 12;
  penyimpanan: number;
};

const infinix_HOT_40_PRO: hp = {
  merek: "infinix",
  prosssor: "helio g99",
  ram: 8,
  penyimpanan: 256,
};

console.log(infinix_HOT_40_PRO);

//union dengan type
type id = number | string;

type barang = {
  ID: id;
  nama: string;
};

const cokicoki: barang = {
  ID: 2324,
  nama: "coki-coki",
};
console.log(cokicoki);

const batako: barang = {
  ID: "barang ini tidak ada idnya",
  nama: "batako",
};
console.log(batako);

//membuat union dengan string atau isian tertentu
let orang: number | "tidak ada";
orang = "tidak ada";
console.log(orang);
orang = 2323;
console.log(orang);
