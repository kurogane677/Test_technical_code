const angka = document.getElementById("angka");
const hasil = document.getElementById("textres");

const segitiga = () => {
  console.log("segitga");
};

const ganjil = () => {
  for (let i = 0; i < angka.length; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  console.log("gjl");
};

const prima = () => {
  console.log("prm");
};
