//Tugas Kecil

/*
1. promp untuk mengetahui saldo akhir dari apa yang diinputkan oleh user
2. menentukan hari dari tanggal yang ada saat ini di pc kalian
**/


//<=================Tugas 2==================>

let days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
let d = new Date();
let dayName = days[d.getDay()];
alert(`Hari ini adalah ${dayName}`);


//============================================
let hari = new Date().getDay()

switch (hari) {
    case 0:
        hari = "Minggu"
        break
    case 1:
        hari = "Senin"
        break
    case 2:
        hari = "Selasa"
        break
    case 3:
            hari = "Rabu"
            break
    case 4:
        hari = "Kamis"
        break
    case 5:
        hari = "Jum'at"
        break
    case 6:
        hari = "Sabtu"
        break
    }
alert(`Hari ini adalah hari ${hari}!`)

//======================================>
const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const m = new Date();
const monthName = months[m.getMonth()];
alert(`Bulan ini adalah ${monthName}`);

//<================Tugas 1===============>
let saldoAwal = parseInt(prompt(`masukkan saldo awal!`))
let saldoTambahan = parseInt(prompt(`masukkan saldo tambahan!`))
let hutang = parseInt(prompt(`masukkan jumlah hutang!`)) 
const saldoAkhir = saldoAwal + saldoTambahan - hutang


alert(
    `saldo awal saya sebesar Rp.${ saldoAwal} & saldo tambahan yang akan saya miliki sebesar Rp.${ saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak Rp.${ saldoAkhir}`,
)











//<=======================LOOP==========================>

//While, cek kondisi dulu baru eksekusi

// let i = 0
// while (i < 10) {
    //     i++
//     console.log('ibnu adam')
// }

//do while, eksekusi dulu baru cek kondisi

// let i = 0
// do {
//     i++
//     console.log('ibnu adam');
// } while (i < 10)
//statment
//<=============Looping Array================>

// const namaGuru = ['Adam', 'fikri', 'retno', 'bunga']
// for (let i = 0; i < namaGuru.length; i++) {
//     console.log(namaGuru[i])
// }
//<=============================================================ARRAY==========================================>

// let namaGuru = []

// namaGuru[0] = 'adam'
// namaGuru[1] = 'ajeng'
// namaGuru.pop()

// alert(namaGuru)

// let namaGuru = ['jodi', 'bunga', 'rahman']
// namaGuru.push('adam', 'ajeng')
// namaGuru.shift()
// namaGuru.pop()
// alert(namaGuru)