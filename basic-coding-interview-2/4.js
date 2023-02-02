/*
Andi menabung dengan uang 750.000 di bulan pertama dan mendapatkan 6% pada bulan berikutnya, setiap bulan berikutnya andi menyisihkan 3% dari tabungannya dan maksimal yang disisihkan 3% dari 800.000. Berapakah total tabungan andi selama 1 tahun?
*/

let init = 750000;
let secondMonth = (6 * init) / 100;
// every month after second month for tenMonth = (3 * secondMonth) / 100;

function reccuring10Months(init) {
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    if (sum <= 800000) {
      sum = sum + (init * 3) / 100;
    }
  }

  return sum;
}

let tenMonths = reccuring10Months(secondMonth);

let total = init + secondMonth + tenMonths;

console.log(total);
