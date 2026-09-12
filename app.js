// Database Soal SMA (Kelas 10-12)
const questionBank = {
    10: [
        { topic: "Eksponen", q: "Hasil dari 2⁴ × 2³ adalah...", options: ["32", "64", "128", "256"], answer: 2 },
        { topic: "Logaritma", q: "Nilai dari ²log 8 + ²log 4 adalah...", options: ["3", "4", "5", "6"], answer: 2 },
        { topic: "Trigonometri", q: "Nilai dari sin 30° + cos 60° adalah...", options: ["1/2", "1", "√3/2", "0"], answer: 1 }
    ],
    11: [
        { topic: "Matriks", q: "Jika A = [[2, 1], [0, 3]], maka det(A) adalah...", options: ["5", "6", "3", "2"], answer: 1 },
        { topic: "Polinomial", q: "Sisa pembagian f(x) = x³ - 2x + 5 oleh (x - 1) adalah...", options: ["4", "5", "6", "2"], answer: 0 },
        { topic: "Fungsi Invers", q: "Jika f(x) = 2x + 3, maka f⁻¹(x) adalah...", options: ["(x-3)/2", "(x+3)/2", "2x-3", "x/2 - 3"], answer: 0 }
    ],
    12: [
        { topic: "Limit", q: "Nilai lim (x→2) (x² - 4)/(x - 2) adalah...", options: ["0", "2", "4", "∞"], answer: 2 },
        { topic: "Turunan", q: "Turunan pertama dari f(x) = 3x² + 5x - 7 adalah...", options: ["6x + 5", "3x + 5", "6x² + 5", "6x"], answer: 0 },
        { topic: "Integral", q: "Hasil dari ∫ (2x + 3) dx adalah...", options: ["x² + 3x + C", "2x² + 3x + C", "x² + C", "3x² + 2x + C"], answer: 0 }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 1;
let timer;
let timeLeft = 30;
let player = { name: "", grade: "10" };

function startGame() {
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) {
        alert("Silakan masukkan nama Anda terlebih dahulu!");
        return;
    }

    player.name = nameInput;
    player.grade = document.getElementById('grade-select').value;
    
    // Copy soal berdasarkan kelas
    currentQuestions = [...questionBank[player.grade]];
    currentQuestions.sort(() => Math.random() - 0.5); // Acak soal

    score = 0;
    streak = 1;
    currentQuestionIndex = 0;

    switchScreen('start-screen', 'game-screen');
    startTimer();
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length || timeLeft <= 0) {
        endGame();
        return;
    }

    const qData = currentQuestions[currentQuestionIndex];
    document.getElementById('topic-badge').innerText = `Kelas ${player.grade} • ${qData.topic}`;
    document.getElementById('question-text').innerText = qData.q;
    
    const optionsContainer = document.getElementById('options-grid');
    optionsContainer.innerHTML = "";

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const qData = currentQuestions[currentQuestionIndex];
    if (selectedIndex === qData.answer) {
        score += 100 * streak;
        streak++;
    } else {
        streak = 1;
    }

    document.getElementById('score').innerText = score;
    document.getElementById('streak').innerText = `x${streak}`;
    
    currentQuestionIndex++;
    loadQuestion();
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').innerText = timeLeft;
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

async function endGame() {
    clearInterval(timer);
    document.getElementById('final-score').innerText = score;
    switchScreen('game-screen', 'result-screen');

    // Simpan ke Supabase
    await saveScoreToSupabase(player.name, player.grade, score);
    
    // Load Leaderboard
    fetchLeaderboard();
}

async function saveScoreToSupabase(username, grade, score) {
    try {
        const { data, error } = await supabaseClient
            .from('leaderboard')
            .insert([{ username, grade: `Kelas ${grade}`, score }]);

        if (error) console.error('Error saving score:', error);
    } catch (err) {
        console.error('Supabase Error:', err);
    }
}

async function fetchLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = "Memuat data...";

    try {
        const { data, error } = await supabaseClient
            .from('leaderboard')
            .select('username, grade, score')
            .order('score', { ascending: false })
            .limit(5);

        if (error) throw error;

        list.innerHTML = "";
        data.forEach((row, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>#${idx + 1} <strong>${row.username}</strong> (${row.grade})</span> <span>${row.score} pts</span>`;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = "Gagal memuat leaderboard.";
        console.error(err);
    }
}

function restartGame() {
    switchScreen('result-screen', 'start-screen');
}

function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.add('hidden');
    document.getElementById(fromId).classList.remove('active-screen');
    
    document.getElementById(toId).classList.remove('hidden');
    document.getElementById(toId).classList.add('active-screen');
}