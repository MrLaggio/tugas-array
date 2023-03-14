//METHOD FILTER()
//method filter() berfungsi untuk menyaring data di array
//parameter yang harus diberikan pada method filter() sama seperti method forEach(), yaitu: sebuah fungsi callback.

// const angka = [1,2,3,4,5,6,7,8,9];

// const filterArr = angka.filter((item) => {
//     return item % 2 == 0
// });
// console.log(filterArr);

// const users = [{
//     nama: 'julima',
//     umur: 22,
//     gender: 'male'
// },
// {
//     nama: 'Udin',
//     umur: 24,
//     gender: 'male'
// },
// {
//     nama: 'juta',
//     umur: 20,
//     gender: 'female'
// },
// {
//     nama: 'Erika',
//     umur: 21,
//     gender: 'female'
// }
// ];

// const userMale = users.filter((user) => user.gender == male); //untuk melihat value dan tipe data

// console.log(usersMale);


const mobil =[
{
    namaMobil: 'Time Evo 6',
    Roda: 4,
    Tahun:2000,
    Merek: 'Mitsubishi'
},
{
    namaMobil: 'Dodge charger',
    Roda: 4,
    Tahun:1969,
    Merek: 'Dodge'
},
{
    namaMobil: 'Ford Mustang',
    Roda: 4,
    Tahun:1969,
    Merek: 'Ford'
},
{
    namaMobil: 'Suzuki Esteem',
    Roda: 4,
    Tahun:1998,
    Merek: 'Suzuki'
},
{
    namaMobil: 'Cadillac DeVille',
    Roda: 4,
    Tahun:1997,
    Merek: 'Cadillac'
}
];

let dataMobil = prompt("Masukan Merek Mobil Yang Anda Ini Cari",)

const MerekMobil = mobil.filter((mobil) => mobil.Merek === dataMobil)

console.log(MerekMobil);

//  teken ctrl+v lalu ctrl+z dan anda akan melihat bug vsc
