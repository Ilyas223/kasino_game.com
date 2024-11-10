// Daftar hadiah dengan jumlah dan peluangnya
const rewards = [
    { name: "Hadiah 1", amount: 1000, chance: 50 },       // 50% kemungkinan
    { name: "Hadiah 2", amount: 5000, chance: 20 },       // 20% kemungkinan
    { name: "Hadiah 3", amount: 10000, chance: 10 },      // 10% kemungkinan
    { name: "Hadiah 4", amount: 20000, chance: 7 },
    { name: "Hadiah 5", amount: 50000, chance: 5 },
    { name: "Hadiah 6", amount: 100000, chance: 3 },
    { name: "Hadiah 7", amount: 200000, chance: 2 },
    { name: "Hadiah 8", amount: 500000, chance: 1 },
    { name: "Hadiah 9", amount: 1000000, chance: 0.5 },
    { name: "Hadiah 10", amount: 5000000, chance: 0.1 }   // 0.1% kemungkinan
];

// Menghitung total peluang untuk normalisasi
const totalChance = rewards.reduce((total, reward) => total + reward.chance, 0);

// Fungsi untuk mendapatkan reward berdasarkan peluang
function getReward() {
    let randomNum = Math.random() * totalChance; // Mendapatkan angka acak sesuai total peluang
    let cumulativeChance = 0;

    for (let i = 0; i < rewards.length; i++) {
        cumulativeChance += rewards[i].chance;
        if (randomNum < cumulativeChance) {
            return rewards[i];
        }
    }
    return null;
}

// Event listener untuk tombol spin
document.getElementById("spin-button").addEventListener("click", function() {
    const reward = getReward();
    if (reward) {
        alert(`Selamat! Anda memenangkan ${reward.name} dengan hadiah Rp ${reward.amount.toLocaleString("id-ID")}`);
        updateBalance(reward.amount); // Update saldo pemain dengan hadiah
    } else {
        alert("Belum beruntung, coba lagi!");
    }
});

// Fungsi untuk menambah saldo
function updateBalance(amount) {
    let saldoElem = document.getElementById("saldo");
    let currentSaldo = parseInt(saldoElem.innerText.replace("Rp ", "").replace(/\./g, ""));
    currentSaldo += amount;
    saldoElem.innerText = "Rp " + currentSaldo.toLocaleString("id-ID");
}
