import React from 'react';

const makanan = [
    {
        nama: 'soto',
        harga: 12000
    },
    {
        nama: 'bakso',
        harga: 10000
    },
    {
        nama: 'mie ayam',
        harga: 7000
    },
    {
        nama: 'nasi goreng',
        harga: 15000
    },
]

//reduce
const total_bayar = makanan.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0)

const Map = () => {
    return (
        <div>
            <h2>Map Sederhana</h2>
            <ul>
                {makanan.map((makanan, index) => (
                    <li>{index + 1}. {makanan.nama} - harga :{makanan.harga}</li>
                ))}
            </ul>
            <h2>Map Filter harga lebih dari 11000</h2>
            <ul>
                {makanan.filter((makanan) => makanan.harga > 11000)
                    .map((makanan, index) => (
                        <li>{index + 1}. {makanan.nama} - harga :{makanan.harga}</li>
                    ))}
            </ul>
            <h2>Total harga : {total_bayar}</h2>
        </div>
    )
}

export default Map