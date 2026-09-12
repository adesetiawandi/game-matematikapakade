// Bank Soal Matematika SMA
const questionBank = {
    10: [
        { topic: "Eksponen", q: "Hasil dari $2^4 \\times 2^3$ adalah...", options: ["32", "64", "128", "256"], answer: 2 },
        { topic: "Logaritma", q: "Nilai dari $^2\\log 8 + ^2\\log 4$ adalah...", options: ["3", "4", "5", "6"], answer: 2 },
        { topic: "Trigonometri", q: "Nilai dari \\sin 30^\\circ + \\cos 60^\\circ$ adalah...", options: ["\\frac{1}{2}", "1", "\\frac{\\sqrt{3}}{2}", "0"], answer: 1 }
    ],
    11: [
        // --- SOAL DARI DOKUMEN FUNGSI & KOMPOSISI ---
        { 
            topic: "Sifat Fungsi", 
            q: "Ditentukan fungsi $g: A \\to A$ dengan $A = \\{1,2,3,4\\}$ didefinisikan sebagai 1\\to 2, 2\\to 3, 3\\to 4, 4\\to 1. Fungsi $g$ termasuk...", 
            options: ["Fungsi Onto", "Fungsi Satu-satu", "Fungsi Bijektif", "Fungsi Identitas"], 
            answer: 2 
        },
        { 
            topic: "Konsep Fungsi", 
            q: "Di antara relasi-relasi di bawah ini, relasi manakah yang BUKAN suatu fungsi?", 
            options: ["Setiap siswa dengan NIS-nya", "Setiap kota dengan negaranya", "Seorang ibu dengan anak-anaknya", "Setiap orang dengan nomor paspornya"], 
            answer: 2 
        },
        { 
            topic: "Relasi & Fungsi", 
            q: "Perhatikan diagram panah $A \\to B$: $3 \\to 5, 4 \\to 6, 5 \\to 7, 6 \\to 8, 7 \\to 9$. Relasi yang tepat adalah...", 
            options: ["Kurangnya dari", "Dua lebihnya dari", "Dua kurangnya dari", "Lebih dari"], 
            answer: 1 
        },
        { 
            topic: "Operasi Fungsi", 
            q: "Jika $f(x) = x^2 + 2x - 3$ dan $g(x) = x^3 - x^2 + 2x + 5$, maka nilai $(f + g)(x)$ adalah...", 
            options: ["$x^3 + 4x + 2$", "$x^3 + 2x + 2$", "$x^3 + 4x - 2$", "$x^3 - 4x + 2$"], 
            answer: 0 
        },
        { 
            topic: "Operasi Fungsi", 
            q: "Jika $f(x) = \\frac{x + 5}{2}$ dan $g(x) = \\frac{3}{x - 2}$, maka $(f - g)(x)$ adalah...", 
            options: ["$\\frac{x^2 + x - 16}{2x - 4}$", "$\\frac{x^2 + 2x - 16}{2x - 4}$", "$\\frac{x^2 + 3x - 16}{2x - 4}$", "$\\frac{x^2 - 3x - 16}{2x - 4}$"], 
            answer: 2 
        },
        { 
            topic: "Operasi Fungsi", 
            q: "Jika $f(x) = g(x) \\cdot h(x)$ dengan $f(x) = 6x^2 + 5x - 6$ dan $g(x) = 2x + 3$, maka $h(x)$ adalah...", 
            options: ["$3x + 2$", "$3x - 2$", "$2x + 1$", "$-2x + 1$"], 
            answer: 1 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $f(x) = 3x + 4$ dan $g(x) = x - 2$. Hasil dari $(f \\circ g)(x)$ adalah...", 
            options: ["$3x + 2$", "$3x - 2$", "$3x + 10$", "$3x - 10$"], 
            answer: 1 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $f(x) = x^2 - 1$ dan $g(x) = x + 5$. Hasil dari $(g \\circ f)(x)$ adalah...", 
            options: ["$x^2 + 4$", "$x^2 + 10x + 24$", "$x^2 + 9$", "$2x^2 + 4$"], 
            answer: 0 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $g(x) = x + 4$ dan $(f \\circ g)(x) = 3x + 10$. Fungsi $f(x)$ yang memenuhi adalah...", 
            options: ["$3x - 2$", "$3x + 2$", "$3x + 10$", "$x - 2$"], 
            answer: 0 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $f(x) = 3x + 4$ dan $g(x) = \\frac{x - 2}{x + 3}$, maka $(f \\circ g)(x)$ sama dengan...", 
            options: ["$\\frac{5x - 2}{x + 3}$", "$\\frac{3x + 10}{x + 3}$", "$\\frac{2x + 18}{x + 3}$", "$\\frac{7x + 6}{x + 3}$"], 
            answer: 3 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $f(x) = 4x - 2$ dan $g(x) = 3x^2 + 1$. Nilai dari $(g \\circ f)(1)$ adalah...", 
            options: ["9", "11", "13", "15"], 
            answer: 2 
        },
        { 
            topic: "Komposisi Fungsi", 
            q: "Diketahui $(f \\circ g)(x) = 9x^2 + 18x + 3$ dan $g(x) = 3x + 2$, maka $f(x)$ adalah...", 
            options: ["$x^2 - 2x - 5$", "$x^2 + 2x - 5$", "$x^2 - 2x + 5$", "$x^2 + 2x + 5$"], 
            answer: 1 
        },
        { 
            topic: "Invers Fungsi", 
            q: "Invers dari fungsi $f(x) = \\frac{5x + 3}{2x - 3}$ untuk $x \\neq \\frac{3}{2}$ adalah...", 
            options: ["$\\frac{3x + 3}{2x - 5}$", "$\\frac{5x + 3}{2x + 3}$", "$\\frac{5x - 3}{2x + 3}$", "$\\frac{5x - 3}{2x - 3}$"], 
            answer: 0 
        },
        { 
            topic: "Invers Fungsi", 
            q: "Diketahui $f(x) = x^2 - 8x + 10$ dengan $x \\ge 4$. Bentuk invers $f^{-1}(x)$ adalah...", 
            options: ["$4 + \\sqrt{x + 6}$", "$4 - \\sqrt{x + 6}$", "$4 + \\sqrt{x - 6}$", "$\\sqrt{x + 6} - 4$"], 
            answer: 0 
        },
        { 
            topic: "Invers Fungsi", 
            q: "Diketahui $f(x) = x^2 - 6x + 11$ dengan $x \\ge 3$. Nilai dari $f^{-1}(18)$ adalah...", 
            options: ["5", "6", "7", "8"], 
            answer: 2 
        },
        { 
            topic: "Komposisi 3 Fungsi", 
            q: "Diketahui $f(x) = 3x - 2$, $g(x) = 2x + 4$, dan $h(x) = x + 1$. Nilai $(f \\circ g \\circ h)(x)$ adalah...", 
            options: ["$6x - 16$", "$6x + 16$", "$-6x - 16$", "$-6x + 16$"], 
            answer: 1 
        },
        { 
            topic: "Invers Komposisi", 
            q: "Diketahui $f^{-1}(x) = 3x + 4$, $g(x) = \\frac{3x - 2}{4}$, dan $h^{-1}(x) = x - 5$. Nilai $(f \\circ g \\circ h)^{-1}(1)$ adalah...", 
            options: ["-11", "-4", "2", "5"], 
            answer: 3 
        },
        { 
            topic: "Invers Komposisi", 
            q: "Diketahui $f(x) = 2x - 3$, $g(x) = \\frac{x + 2}{3}$, dan $h^{-1}(x) = 4x + 1$. Nilai $(f \\circ g \\circ h)^{-1}(3)$ adalah...", 
            options: ["21", "25", "27", "29"], 
            answer: 3 
        },
        { 
            topic: "Aplikasi Fungsi", 
            q: "Suhu makanan dipanaskan dirumuskan $T(t) = 6t + 5$ ($t$ dalam jam). Jika suhu mencapai $29^\\circ$, lama pemanasan adalah...", 
            options: ["2 jam", "3 jam", "3,5 jam", "4 jam"], 
            answer: 3 
        },
        { 
            topic: "Aplikasi Fungsi", 
            q: "Populasi bakteri $P(t) = 300 + 40t$ dan $t(x) = 3x - 2$. Populasi sebagai fungsi $x$, yaitu $(P \\circ t)(x)$ adalah...", 
            options: ["$120x + 220$", "$120x + 80$", "$40x + 220$", "$120x - 220$"], 
            answer: 0 
        },

        // --- MATERI GEOMETRI LINGKARAN & TRANSFORMASI ---
        { 
            topic: "Transformasi Geometri", 
            q: "Bayangan titik $A(3, -2)$ oleh translasi $T = \\begin{pmatrix} 4 \\\\ -1 \\end{pmatrix}$ adalah...", 
            options: ["$A'(7, -3)$", "$A'(-1, -1)$", "$A'(1, 3)$", "$A'(7, 1)$"], 
            answer: 0 
        },
        { 
            topic: "Sudut Pusat & Keliling", 
            q: "Jika sudut pusat $\\angle AOB = 80^\\circ$, maka besar sudut keliling $\\angle ACB$ yang menghadap busur sama adalah...", 
            options: ["$160^\\circ$", "$80^\\circ$", "$40^\\circ$", "$20^\\circ$"], 
            answer: 2 
        },
        { 
            topic: "Garis Singgung Persekutuan Luar", 
            q: "Dua lingkaran berjarak pusat $13\\text{ cm}$ dengan jari-jari $8\\text{ cm}$ dan $3\\text{ cm}$. Panjang garis singgung persekutuan luar adalah...", 
            options: ["$10\\text{ cm}$", "$12\\text{ cm}$", "$15\\text{ cm}$", "$11\\text{ cm}$"], 
            answer: 1 
        },
        { 
            topic: "Lingkaran Dalam Segitiga", 
            q: "Segitiga siku-siku memiliki sisi $6\\text{ cm}, 8\\text{ cm},$ dan $10\\text{ cm}$. Jari-jari lingkaran dalamnya ($r_{in}$) adalah...", 
            options: ["$2\\text{ cm}$", "$3\\text{ cm}$", "$4\\text{ cm}$", "$1,5\\text{ cm}$"], 
            answer: 0 
        }
    ],
    12: [
        { topic: "Limit", q: "Nilai dari $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$ adalah...", options: ["0", "2", "4", "\\infty"], answer: 2 },
        { topic: "Turunan", q: "Turunan pertama dari $f(x) = 3x^2 + 5x - 7$ adalah...", options: ["$6x + 5$", "$3x + 5$", "$6x^2 + 5$", "$6x$"], answer: 0 },
        { topic: "Integral", q: "Hasil dari $\\int (2x + 3) \\, dx$ adalah...", options: ["$x^2 + 3x + C$", "$2x^2 + 3x + C$", "$x^2 + C$", "$3x^2 + 2x + C$"], answer: 0 }
    ]
};

// State Game
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let streak = 1;
let timer;
let timeLeft = 45;
let player = { name: "", grade: "11" };

// State Multiplayer
let isMultiplayer = false;
let currentRoomCode = null;
let isHost = false;
let roomSubscription = null;

// ==================== MODE SOLO ====================
function startGameSolo() {
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) return alert("Silakan masukkan nama kamu!");

    isMultiplayer = false;
    player.name = nameInput;
    player.grade = document.getElementById('grade-select').value;
    
    document.getElementById('live-leaderboard-widget').classList.add('hidden');
    initGameEngine();
    switchScreen('start-screen', 'game-screen');
}

// ==================== MODE MULTIPLAYER ====================
async function createRoom() {
    const nameInput = document.getElementById('player-name').value.trim();
    if (!nameInput) return alert("Silakan masukkan nama kamu!");

    player.name = nameInput;
    player.grade = document.getElementById('grade-select').value;
    isMultiplayer = true;
    isHost = true;
    currentRoomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    try {
        await supabaseClient.from('game_rooms').insert([{ room_code: currentRoomCode, status: 'waiting' }]);
        await supabaseClient.from('room_participants').insert([
            { room_code: currentRoomCode, username: player.name, is_host: true, score: 0 }
        ]);

        document.getElementById('lobby-room-code').innerText = currentRoomCode;
        document.getElementById('host-controls').classList.remove('hidden');
        switchScreen('start-screen', 'lobby-screen');
        subscribeToRoom();
    } catch (err) {
        alert("Gagal membuat room. Pastikan tabel Supabase sudah siap!");
        console.error(err);
    }
}

async function joinRoom() {
    const nameInput = document.getElementById('player-name').value.trim();
    const roomCodeInput = document.getElementById('room-code-input').value.trim().toUpperCase();

    if (!nameInput || !roomCodeInput) return alert("Masukkan nama dan kode room!");

    player.name = nameInput;
    player.grade = document.getElementById('grade-select').value;
    currentRoomCode = roomCodeInput;
    isMultiplayer = true;
    isHost = false;

    try {
        const { data: room, error } = await supabaseClient
            .from('game_rooms')
            .select('*')
            .eq('room_code', currentRoomCode)
            .single();

        if (error || !room) return alert("Kode Room tidak ditemukan!");
        if (room.status !== 'waiting') return alert("Permainan di room ini sudah dimulai!");

        await supabaseClient.from('room_participants').insert([
            { room_code: currentRoomCode, username: player.name, is_host: false, score: 0 }
        ]);

        document.getElementById('lobby-room-code').innerText = currentRoomCode;
        document.getElementById('host-controls').classList.add('hidden');
        switchScreen('start-screen', 'lobby-screen');
        subscribeToRoom();
    } catch (err) {
        alert("Gagal bergabung ke room!");
        console.error(err);
    }
}

function subscribeToRoom() {
    roomSubscription = supabaseClient
        .channel(`room:${currentRoomCode}`)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'room_participants', filter: `room_code=eq.${currentRoomCode}` }, 
            () => {
                updateLobbyParticipants();
                updateLiveLeaderboard();
            }
        )
        .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'game_rooms', filter: `room_code=eq.${currentRoomCode}` }, 
            (payload) => {
                if (payload.new.status === 'playing') {
                    startMultiplayerGame();
                }
            }
        )
        .subscribe();

    updateLobbyParticipants();
}

async function updateLobbyParticipants() {
    const { data: participants } = await supabaseClient
        .from('room_participants')
        .select('username, is_host')
        .eq('room_code', currentRoomCode);

    const list = document.getElementById('lobby-participants-list');
    if (!list || !participants) return;

    list.innerHTML = "";
    participants.forEach(p => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${p.username}</strong> ${p.is_host ? '👑 (Host)' : ''}`;
        list.appendChild(li);
    });
}

async function startRoomByHost() {
    if (!isHost) return;
    await supabaseClient.from('game_rooms').update({ status: 'playing' }).eq('room_code', currentRoomCode);
}

function startMultiplayerGame() {
    document.getElementById('live-leaderboard-widget').classList.remove('hidden');
    initGameEngine();
    switchScreen('lobby-screen', 'game-screen');
    updateLiveLeaderboard();
}

async function updateLiveLeaderboard() {
    if (!isMultiplayer) return;

    const { data: participants } = await supabaseClient
        .from('room_participants')
        .select('username, score')
        .eq('room_code', currentRoomCode)
        .order('score', { ascending: false });

    const liveList = document.getElementById('live-rank-list');
    if (!liveList || !participants) return;

    liveList.innerHTML = "";
    participants.forEach((p, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<span>#${idx + 1} <strong>${p.username}</strong></span> <span>${p.score} pts</span>`;
        if (p.username === player.name) li.style.color = "#4caf50";
        liveList.appendChild(li);
    });
}

// ==================== ENGINE GAME ====================
function initGameEngine() {
    currentQuestions = [...questionBank[player.grade]];
    currentQuestions.sort(() => Math.random() - 0.5);

    score = 0;
    streak = 1;
    currentQuestionIndex = 0;

    document.getElementById('score').innerText = score;
    document.getElementById('streak').innerText = `x${streak}`;

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
    document.getElementById('question-text').innerHTML = qData.q;
    
    const optionsContainer = document.getElementById('options-grid');
    optionsContainer.innerHTML = "";

    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(idx);
        optionsContainer.appendChild(btn);
    });

    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('game-screen'), {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ],
            throwOnError : false
        });
    }
}

async function checkAnswer(selectedIndex) {
    const qData = currentQuestions[currentQuestionIndex];
    if (selectedIndex === qData.answer) {
        score += 100 * streak;
        streak++;
    } else {
        streak = 1;
    }

    document.getElementById('score').innerText = score;
    document.getElementById('streak').innerText = `x${streak}`;

    if (isMultiplayer) {
        await supabaseClient
            .from('room_participants')
            .update({ score: score, updated_at: new Date() })
            .eq('room_code', currentRoomCode)
            .eq('username', player.name);
    }
    
    currentQuestionIndex++;
    loadQuestion();
}

function startTimer() {
    timeLeft = 45;
    document.getElementById('timer').innerText = timeLeft;
    
    if (timer) clearInterval(timer);

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

    if (!isMultiplayer) {
        await saveScoreToSupabase(player.name, player.grade, score);
        fetchLeaderboardSolo();
    } else {
        fetchLeaderboardMultiplayer();
    }
}

async function saveScoreToSupabase(username, grade, score) {
    try {
        await supabaseClient
            .from('leaderboard')
            .insert([{ username, grade: `Kelas ${grade}`, score }]);
    } catch (err) {
        console.error('Supabase Error:', err);
    }
}

async function fetchLeaderboardSolo() {
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
        list.innerHTML = "<li>Gagal memuat leaderboard.</li>";
    }
}

async function fetchLeaderboardMultiplayer() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = "Memuat rangking room...";

    try {
        const { data, error } = await supabaseClient
            .from('room_participants')
            .select('username, score')
            .eq('room_code', currentRoomCode)
            .order('score', { ascending: false });

        if (error) throw error;

        list.innerHTML = "";
        data.forEach((row, idx) => {
            const li = document.createElement('li');
            li.innerHTML = `<span>#${idx + 1} <strong>${row.username}</strong></span> <span>${row.score} pts</span>`;
            list.appendChild(li);
        });
    } catch (err) {
        list.innerHTML = "<li>Gagal memuat rangking tanding.</li>";
    }
}

function restartGame() {
    if (roomSubscription) supabaseClient.removeChannel(roomSubscription);
    isMultiplayer = false;
    currentRoomCode = null;
    switchScreen('result-screen', 'start-screen');
}

function switchScreen(fromId, toId) {
    document.getElementById(fromId).classList.add('hidden');
    document.getElementById(fromId).classList.remove('active-screen');
    
    document.getElementById(toId).classList.remove('hidden');
    document.getElementById(toId).classList.add('active-screen');
}