const orang: { nama: string; umur: number; hobi: string } = {
  nama: "joko",
  umur: 20,
  hobi: "ngoding",
};

console.log(orang);

//membuat objek dengan optional parameter
type person = {
  nama: string;
  umur: number;
  hobi?: string[];
  pekerjaan: string;
  kelamin: boolean;
};

const kumar: person = {
  nama: "kumar",
  umur: 20,
  hobi: ["ngoding", "main game", "tidur"],
  pekerjaan: "mahasiswa",
  kelamin: true,
};
console.log(kumar);
kumar.hobi?.map((data, index) => {
  console.log("hobi kumar ke -", index, "adalah", data);
});
