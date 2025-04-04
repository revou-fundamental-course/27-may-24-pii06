// Data untuk game tebak kata (diperbarui dengan kata-kata random untuk level mudah)
const wordData = {
    fruits: {
        easy: ["apel", "pisang", "jeruk", "mangga", "melon", "anggur", "pepaya", "semangka", "nanas", "duku"],
        medium: ["durian", "rambutan", "salak", "nangka", "sirsak", "markisa", "jambu", "kelapa", "belimbing", "sawo"],
        hard: ["kesemek", "manggis", "sukun", "cempedak", "bisbul", "kawista", "gandaria", "jamblang", "kecapi", "menteng"]
    },
    animals: {
        easy: ["kucing", "anjing", "burung", "ular", "tikus", "ayam", "bebek", "kambing", "sapi", "kelinci"],
        medium: ["harimau", "gajah", "jerapah", "kangguru", "panda", "zebra", "singa", "kuda", "kerbau", "monyet"],
        hard: ["komodo", "tapir", "trenggiling", "kuskus", "banteng", "anoa", "babirusa", "cendrawasih", "jalak", "kakatua"]
    },
    places: {
        easy: ["rumah", "kantor", "sekolah", "pasar", "taman", "mall", "masjid", "gereja", "hotel", "apotek"],
        medium: ["bandara", "stasiun", "terminal", "museum", "klinik", "kampus", "pabrik", "restoran", "toko", "kafe"],
        hard: ["perpustakaan", "observatorium", "planetarium", "aquarium", "konservatori", "laboratorium", "auditorium", "planetarium", "galeri", "perguruan"]
    }
};

// Data clue untuk game tebak kata
const clueData = {
    fruits: {
        apel: ["Buah merah atau hijau yang renyah", "Biasa digunakan untuk membuat jus atau cuka"],
        pisang: ["Buah panjang kuning ketika matang", "Dikonsumsi oleh atlet untuk energi cepat"],
        jeruk: ["Buah berwarna oranye dengan rasa asam manis", "Kaya akan vitamin C"],
        mangga: ["Buah tropis dengan daging kuning yang manis", "Ada banyak jenis seperti harum manis, gedong, dll"],
        melon: ["Buah besar dengan daging oranye atau hijau", "Banyak mengandung air dan menyegarkan"],
        anggur: ["Buah kecil bergerombol bisa hijau, merah atau ungu", "Bisa dimakan langsung atau dibuat wine"],
        pepaya: ["Buah tropis dengan daging oranye dan biji hitam", "Sering dikonsumsi untuk melancarkan pencernaan"],
        semangka: ["Buah besar dengan daging merah dan banyak air", "Kulitnya hijau dengan garis-garis"],
        nanas: ["Buah dengan kulit bersisik dan mahkota daun di atas", "Rasanya manis asam menyegarkan"],
        duku: ["Buah kecil berkelompok dengan kulit kuning", "Rasanya manis sedikit asam"],
        durian: ["Raja buah dengan bau menyengat", "Kulitnya berduri dan dagingnya lembut"],
        rambutan: ["Buah dengan kulit berambut", "Daging buahnya mirip leci"],
        salak: ["Buah dengan kulit bersisik seperti ular", "Disebut juga snake fruit"],
        nangka: ["Buah besar dengan duri tumpul", "Daging buah berwarna kuning dan manis"],
        sirsak: ["Buah dengan kulit berduri lembut", "Dagingnya putih dengan biji hitam"],
        kesemek: ["Buah oranye yang mirip tomat", "Rasanya manis dan sedikit sepat"],
        manggis: ["Buah ungu dengan mahkota di bawahnya", "Disebut ratu buah tropis"],
        sukun: ["Buah tanpa biji yang bisa digoreng", "Teksturnya seperti roti"],
        cempedak: ["Mirip nangka tetapi lebih kecil", "Aromanya kuat dan rasanya manis"]
    },
    animals: {
        kucing: ["Hewan peliharaan yang suka mengeong", "Memiliki kumis yang sensitif"],
        anjing: ["Hewan setia yang sering disebut sahabat manusia", "Bisa menggonggong"],
        burung: ["Hewan bersayap yang bisa terbang", "Berkicau dengan merdu"],
        ular: ["Hewan melata tanpa kaki", "Ada yang berbisa dan ada yang tidak"],
        tikus: ["Hewan pengerat kecil dengan ekor panjang", "Sering dianggap hama"],
        ayam: ["Unggas yang biasa diternak", "Jantan berkokok di pagi hari"],
        bebek: ["Unggas yang suka air", "Kaki berselaput untuk berenang"],
        kambing: ["Hewan ternak pemakan rumput", "Tanduknya keriting"],
        sapi: ["Hewan ternak penghasil susu", "Suaranya melengking"],
        kelinci: ["Hewan kecil bertelinga panjang", "Suka melompat dan makan wortel"],
        harimau: ["Kucing besar dengan loreng oranye-hitam", "Predator puncak di hutan"],
        gajah: ["Hewan darat terbesar dengan belalai panjang", "Memiliki taring gading"],
        jerapah: ["Hewan dengan leher sangat panjang", "Titik-titik di tubuhnya unik"],
        kangguru: ["Hewan marsupial dari Australia", "Memiliki kantong untuk anaknya"],
        panda: ["Beruang hitam-putih pemakan bambu", "Lambang WWF"]
    },
    places: {
        rumah: ["Tempat tinggal keluarga", "Biasa memiliki kamar, dapur, dan ruang tamu"],
        kantor: ["Tempat orang bekerja", "Biasa ada meja, komputer, dan rapat"],
        sekolah: ["Tempat belajar siswa", "Ada guru, murid, dan kelas"],
        pasar: ["Tempat jual beli kebutuhan sehari-hari", "Biasa ramai di pagi hari"],
        taman: ["Tempat rekreasi dengan banyak tanaman", "Orang sering jogging atau bersantai"],
        mall: ["Pusat perbelanjaan besar", "Biasa memiliki banyak toko dan restoran"],
        masjid: ["Tempat ibadah umat Islam", "Memiliki kubah dan menara"],
        gereja: ["Tempat ibadah umat Kristen", "Biasa memiliki lonceng"],
        hotel: ["Tempat menginap berbayar", "Biasa memiliki kamar dan resepsionis"],
        apotek: ["Tempat menjual obat-obatan", "Dijalankan oleh apoteker"],
        bandara: ["Tempat pesawat lepas landas dan mendarat", "Ada terminal dan menara kontrol"],
        stasiun: ["Tempat kereta api berhenti dan berangkat", "Ada peron dan jadwal keberangkatan"],
        terminal: ["Tempat bus berkumpul dan berangkat", "Ada banyak jurusan angkutan umum"],
        museum: ["Tempat menyimpan benda bersejarah", "Untuk edukasi dan penelitian"]
    }
};

// Data untuk game tebak angka
const numberData = {
    easy: { range: [1, 50], clue: "Angka antara 1 dan 50" },
    medium: { range: [1, 100], clue: "Angka antara 1 dan 100" },
    hard: { range: [1, 500], clue: "Angka antara 1 dan 500" }
};

// Variabel game state
let gameState = {
    currentGame: "word", // 'word' atau 'number'
    score: 0,
    timeLeft: 30,
    hintsLeft: 2,
    timer: null,
    currentWord: "",
    currentCategory: "fruits",
    currentDifficulty: "medium",
    targetNumber: 0,
    gameActive: false,
    usedClues: []
};

// DOM Elements
const elements = {
    gameTitle: document.getElementById("gameTitle"),
    score: document.getElementById("score"),
    timer: document.getElementById("timer"),
    hintCount: document.getElementById("hintCount"),
    difficulty: document.getElementById("difficulty"),
    category: document.getElementById("category"),
    hint: document.getElementById("hint"),
    guess: document.getElementById("guess"),
    submit: document.getElementById("submit"),
    result: document.getElementById("result"),
    clueButton: document.getElementById("clueButton"),
    spinButton: document.getElementById("spinButton"),
    newWord: document.getElementById("newWord"),
    history: document.getElementById("history"),
    switchGame: document.getElementById("switchGame"),
    giveup: document.getElementById("giveup"),
    reset: document.getElementById("reset")
};

// Inisialisasi game
function initGame() {
    updateUI();
    setupEventListeners();
    startNewGame();
}

// Update UI berdasarkan game state
function updateUI() {
    elements.score.textContent = gameState.score;
    elements.timer.textContent = gameState.timeLeft;
    elements.hintCount.textContent = gameState.hintsLeft;
    
    // Update warna timer berdasarkan waktu tersisa
    if (gameState.timeLeft <= 10) {
        elements.timer.classList.add("danger");
        elements.timer.classList.remove("warning");
    } else if (gameState.timeLeft <= 20) {
        elements.timer.classList.add("warning");
        elements.timer.classList.remove("danger");
    } else {
        elements.timer.classList.remove("danger", "warning");
    }
    
    // Update tombol switch game
    elements.switchGame.textContent = gameState.currentGame === "word" ? "Coba Tebak Angka" : "Coba Tebak Kata";
    
    // Sembunyikan/tampilkan elemen berdasarkan game yang aktif
    if (gameState.currentGame === "word") {
        elements.gameTitle.textContent = "Coba Tebak Kata";
        elements.category.style.display = "block";
        elements.hint.textContent = `Tebak kata dari kategori ${translateCategory(gameState.currentCategory)}!`;
    } else {
        elements.gameTitle.textContent = "Coba Tebak Angka";
        elements.category.style.display = "none";
        elements.hint.textContent = `Tebak angka antara ${numberData[gameState.currentDifficulty].range[0]} dan ${numberData[gameState.currentDifficulty].range[1]}!`;
    }
    
    // Reset input
    elements.guess.value = "";
    elements.guess.focus();
}

// Terjemahkan kategori ke Bahasa Indonesia
function translateCategory(category) {
    const translations = {
        fruits: "buah-buahan",
        animals: "hewan",
        places: "tempat"
    };
    return translations[category] || category;
}

// Setup event listeners
function setupEventListeners() {
    elements.submit.addEventListener("click", handleGuess);
    elements.guess.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleGuess();
    });
    
    elements.clueButton.addEventListener("click", giveClue);
    elements.newWord.addEventListener("click", startNewGame);
    elements.switchGame.addEventListener("click", switchGame);
    elements.giveup.addEventListener("click", giveUp);
    elements.reset.addEventListener("click", resetGame);
    elements.history.addEventListener("click", showHistory);
    
    elements.difficulty.addEventListener("change", () => {
        gameState.currentDifficulty = elements.difficulty.value;
        startNewGame();
    });
    
    elements.category.addEventListener("change", () => {
        gameState.currentCategory = elements.category.value;
        startNewGame();
    });
}

// Mulai game baru
function startNewGame() {
    clearInterval(gameState.timer);
    
    if (gameState.currentGame === "word") {
        // Pilih kata acak berdasarkan kategori dan kesulitan
        const words = wordData[gameState.currentCategory][gameState.currentDifficulty];
        gameState.currentWord = words[Math.floor(Math.random() * words.length)].toLowerCase();
        gameState.usedClues = [];
        
        elements.hint.textContent = `Tebak kata dari kategori ${translateCategory(gameState.currentCategory)}!`;
    } else {
        // Generate angka acak untuk game tebak angka
        const range = numberData[gameState.currentDifficulty].range;
        gameState.targetNumber = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
        gameState.usedClues = [numberData[gameState.currentDifficulty].clue];
        
        elements.hint.textContent = `Tebak angka antara ${range[0]} dan ${range[1]}!`;
    }
    
    gameState.timeLeft = 30;
    gameState.hintsLeft = 2;
    gameState.gameActive = true;
    
    updateUI();
    startTimer();
}

// Mulai timer
function startTimer() {
    clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        elements.timer.textContent = gameState.timeLeft;
        
        if (gameState.timeLeft <= 10) {
            elements.timer.classList.add("danger");
            elements.timer.classList.remove("warning");
        } else if (gameState.timeLeft <= 20) {
            elements.timer.classList.add("warning");
            elements.timer.classList.remove("danger");
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            timeUp();
        }
    }, 1000);
}

// Handle tebakan pemain
function handleGuess() {
    if (!gameState.gameActive) return;
    
    const guess = elements.guess.value.trim().toLowerCase();
    
    if (!guess) {
        showAlert("Masukkan tebakan Anda terlebih dahulu!", "warning");
        return;
    }
    
    if (gameState.currentGame === "word") {
        handleWordGuess(guess);
    } else {
        handleNumberGuess(guess);
    }
}

// Handle tebakan kata
function handleWordGuess(guess) {
    if (guess.length !== gameState.currentWord.length) {
        showAlert(`Tebakan harus ${gameState.currentWord.} huruf!`, "warning");
        return;
    }
    
    if (guess === gameState.currentWord) {
        // Tebakan benar
        clearInterval(gameState.timer);
        gameState.score += gameState.timeLeft * (gameState.currentDifficulty === "easy" ? 1 : gameState.currentDifficulty === "medium" ? 2 : 3);
        gameState.gameActive = false;
        
        showAlert(`Selamat! Jawaban "${gameState.currentWord.toUpperCase()}" benar! Skor +${gameState.timeLeft * (gameState.currentDifficulty === "easy" ? 1 : gameState.currentDifficulty === "medium" ? 2 : 3)}`, "success");
        addResult(`✅ <strong>${gameState.currentWord.toUpperCase()}</strong> - Tebakan benar! (Sisa waktu: ${gameState.timeLeft} detik)`);
        
        updateUI();
        elements.reset.style.display = "inline-block";
    } else {
        // Tebakan salah
        gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
        
        // Beri petunjuk tentang huruf yang benar
        let feedback = [];
        for (let i = 0; i < gameState.currentWord.length; i++) {
            if (guess[i] === gameState.currentWord[i]) {
                feedback.push(`<span class="correct">${guess[i].toUpperCase()}</span>`);
            } else if (gameState.currentWord.includes(guess[i])) {
                feedback.push(`<span class="partial">${guess[i].toUpperCase()}</span>`);
            } else {
                feedback.push(`<span class="wrong">${guess[i].toUpperCase()}</span>`);
            }
        }
        
        showAlert("Tebakan salah! Perhatikan petunjuk warna huruf.", "warning");
        addResult(`❌ ${feedback.join("")} - Tebakan salah! (-5 detik)`);
        updateUI();
    }
}

// Handle tebakan angka
function handleNumberGuess(guess) {
    const numberGuess = parseInt(guess);
    
    if (isNaN(numberGuess)) {
        showAlert("Masukkan angka yang valid!", "warning");
        return;
    }
    
    const range = numberData[gameState.currentDifficulty].range;
    if (numberGuess < range[0] || numberGuess > range[1]) {
        showAlert(`Angka harus antara ${range[0]} dan ${range[1]}!`, "warning");
        return;
    }
    
    if (numberGuess === gameState.targetNumber) {
        // Tebakan benar
        clearInterval(gameState.timer);
        gameState.score += gameState.timeLeft * (gameState.currentDifficulty === "easy" ? 1 : gameState.currentDifficulty === "medium" ? 2 : 3);
        gameState.gameActive = false;
        
        showAlert(`Selamat! Angka ${gameState.targetNumber} benar! Skor +${gameState.timeLeft * (gameState.currentDifficulty === "easy" ? 1 : gameState.currentDifficulty === "medium" ? 2 : 3)}`, "success");
        addResult(`✅ <strong>${gameState.targetNumber}</strong> - Tebakan benar! (Sisa waktu: ${gameState.timeLeft} detik)`);
        
        updateUI();
        elements.reset.style.display = "inline-block";
    } else {
        // Tebakan salah
        gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
        
        let hint = numberGuess < gameState.targetNumber ? "terlalu rendah" : "terlalu tinggi";
        showAlert(`Angka ${numberGuess} ${hint}!`, "warning");
        addResult(`❌ ${numberGuess} - ${hint.toUpperCase()} (-5 detik)`);
        updateUI();
    }
}

// Berikan petunjuk
function giveClue() {
    if (!gameState.gameActive) {
        showAlert("Mulai game baru terlebih dahulu!", "warning");
        return;
    }
    
    if (gameState.hintsLeft <= 0) {
        showAlert("Anda sudah menggunakan semua petunjuk!", "warning");
        return;
    }
    
    gameState.hintsLeft--;
    
    if (gameState.currentGame === "word") {
        // Berikan petunjuk untuk kata
        const availableClues = Object.keys(clueData[gameState.currentCategory])
            .filter(word => word === gameState.currentWord)
            .flatMap(word => clueData[gameState.currentCategory][word])
            .filter(clue => !gameState.usedClues.includes(clue));
        
        if (availableClues.length > 0) {
            const randomClue = availableClues[Math.floor(Math.random() * availableClues.length)];
            gameState.usedClues.push(randomClue);
            
            showAlert(`Petunjuk: ${randomClue}`, "info");
            addResult(`💡 Petunjuk: ${randomClue}`);
        } else {
            showAlert("Tidak ada petunjuk tambahan yang tersedia!", "info");
        }
    } else {
        // Berikan petunjuk untuk angka
        if (gameState.usedClues.length === 1) {
            // Petunjuk kedua: apakah angka genap/ganjil
            const clue = gameState.targetNumber % 2 === 0 ? "Angka target adalah genap" : "Angka target adalah ganjil";
            gameState.usedClues.push(clue);
            showAlert(`Petunjuk: ${clue}`, "info");
            addResult(`💡 Petunjuk: ${clue}`);
        } else if (gameState.usedClues.length === 2) {
            // Petunjuk ketiga: range yang lebih sempit
            const range = numberData[gameState.currentDifficulty].range;
            const quarter = Math.floor((range[1] - range[0]) / 4);
            let clue = "";
            
            if (gameState.targetNumber <= range[0] + quarter) {
                clue = `Angka berada di 25% terendah (${range[0]}-${range[0] + quarter})`;
            } else if (gameState.targetNumber <= range[0] + 2 * quarter) {
                clue = `Angka berada di 25-50% (${range[0] + quarter + 1}-${range[0] + 2 * quarter})`;
            } else if (gameState.targetNumber <= range[0] + 3 * quarter) {
                clue = `Angka berada di 50-75% (${range[0] + 2 * quarter + 1}-${range[0] + 3 * quarter})`;
            } else {
                clue = `Angka berada di 25% tertinggi (${range[0] + 3 * quarter + 1}-${range[1]})`;
            }
            
            gameState.usedClues.push(clue);
            showAlert(`Petunjuk: ${clue}`, "info");
            addResult(`💡 Petunjuk: ${clue}`);
        }
    }
    
    updateUI();
}

// Waktu habis
function timeUp() {
    gameState.gameActive = false;
    
    if (gameState.currentGame === "word") {
        showAlert(`Waktu habis! Jawabannya adalah "${gameState.currentWord.toUpperCase()}"`, "warning");
        addResult(`⏰ Waktu habis! Jawaban: <strong>${gameState.currentWord.toUpperCase()}</strong>`);
    } else {
        showAlert(`Waktu habis! Angka yang benar adalah ${gameState.targetNumber}`, "warning");
        addResult(`⏰ Waktu habis! Jawaban: <strong>${gameState.targetNumber}</strong>`);
    }
    
    elements.reset.style.display = "inline-block";
}

// Ganti game (kata/angka)
function switchGame() {
    clearInterval(gameState.timer);
    gameState.currentGame = gameState.currentGame === "word" ? "number" : "word";
    startNewGame();
}

// Menyerah
function giveUp() {
    if (!gameState.gameActive) {
        showAlert("Tidak ada game yang aktif!", "warning");
        return;
    }
    
    clearInterval(gameState.timer);
    gameState.gameActive = false;
    
    if (gameState.currentGame === "word") {
        showAlert(`Anda menyerah! Jawabannya adalah "${gameState.currentWord.toUpperCase()}"`, "warning");
        addResult(`🏳️ Menyerah! Jawaban: <strong>${gameState.currentWord.toUpperCase()}</strong>`);
    } else {
        showAlert(`Anda menyerah! Angka yang benar adalah ${gameState.targetNumber}`, "warning");
        addResult(`🏳️ Menyerah! Jawaban: <strong>${gameState.targetNumber}</strong>`);
    }
    
    elements.reset.style.display = "inline-block";
}

// Reset game
function resetGame() {
    clearInterval(gameState.timer);
    gameState.gameActive = true;
    gameState.timeLeft = 30;
    gameState.hintsLeft = 2;
    elements.reset.style.display = "none";
    startNewGame();
}

// Tambahkan hasil ke log
function addResult(message) {
    const resultItem = document.createElement("p");
    resultItem.innerHTML = message;
    elements.result.appendChild(resultItem);
    elements.result.scrollTop = elements.result.scrollHeight;
}

// Tampilkan alert
function showAlert(message, type) {
    // Hapus alert sebelumnya jika ada
    const existingAlert = document.querySelector(".alert");
    if (existingAlert) existingAlert.remove();
    
    const alert = document.createElement("div");
    alert.className = `alert ${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    // Hapus alert setelah beberapa detik
    setTimeout(() => {
        alert.remove();
    }, 3000);
}

// Tampilkan riwayat (dummy function)
function showHistory() {
    // Ini adalah implementasi sederhana, bisa dikembangkan lebih lanjut
    showAlert("Fitur riwayat akan datang dalam versi berikutnya!", "info");
}

// Inisialisasi game ketika halaman dimuat
document.addEventListener("DOMContentLoaded", initGame);