document.getElementById('start-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('user-name').textContent = username;
        document.getElementById('user-section').style.display = 'none';
        document.getElementById('spin-section').style.display = 'block';
    } else {
        alert('Silakan masukkan nama Anda!');
    }
});

document.getElementById('spin-button').addEventListener('click', function() {
    const outcomes = ['Anda menang 100.000.000!', 'Anda menang 500.000!', 'Anda kalah!', 'Anda menang 200.000!', 'Coba lagi!'];
    const randomIndex = Math.floor(Math.random() * outcomes.length);
    const result = outcomes[randomIndex];

    // Tambahkan animasi spin
    const wheel = document.getElementById('wheel');
    wheel.classList.add('spin');

    // Hapus kelas spin setelah animasi selesai
    setTimeout(() => {
        wheel.classList.remove('spin');
        document.getElementById('result').textContent = result;
    }, 2000); // Waktu yang sama dengan durasi animasi
});