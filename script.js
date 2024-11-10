// Daftar hadiah dengan jumlah dan peluangnya
const rewards = [
    { name: "Hadiah 1", amount: 1.000, chance: 60 },  // 50% kemungkinan
    { name: "Hadiah 2", amount: 5.000, chance: 20 },  // 20% kemungkinan
    { name: "Hadiah 3", amount: 10.000, chance: 10 }, // 10% kemungkinan
    { name: "Hadiah 4", amount: 20.000, chance: 7 },
    { name: "Hadiah 5", amount: 50.000, chance: 5 },
    { name: "Hadiah 6", amount: 100.000, chance: 3 },
    { name: "Hadiah 7", amount: 200.000, chance: 2 },
    { name: "Hadiah 8", amount: 500.000, chance: 1 },
    { name: "Hadiah 9", amount: 1.000.000, chance: 00000000.5 },
    { name: "Hadiah 10", amount: 5.000.000, chance: 000000000.1 } // 0.1% kemungkinan
];

// Fungsi untuk mendapatkan reward berdasarkan peluang
function getReward() {
    let randomNum = Math.random() * 100; // Mendapatkan angka acak 0-100
    let cumulativeChance = 0;

    for (let i = 0; i < rewards.length; i++) {
        cumulativeChance += rewards[i].chance;
        if (randomNum <= cumulativeChance) {
            return rewards[i];
        }
    }
    return null;
}

// Event listener untuk tombol spin
document.getElementById("spin-button").addEventListener("click", function() {
    const reward = getReward();
    if (reward) {
        alert(`Selamat! Anda memenangkan ${reward.name} dengan hadiah Rp ${reward.amount}`);
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
