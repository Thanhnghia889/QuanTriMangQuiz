// Ứng dụng Ôn thi Quản trị mạng Premium - Logic Nghiệp vụ (app.js)

// ==========================================
// 1. KHỞI TẠO CẤU CẤU TRÚC DỮ LIỆU & STATE
// ==========================================

const CHAPTERS = [
  { id: 1, name: "Chương 1: Khái niệm cơ bản trong quản lý mạng máy tính", desc: "Tổng quan mạng, Server/Client/Peer, các mô hình xử lý (tập trung, phân phối, cộng tác), mô hình quản lý (Workgroup, Domain), kiến trúc quản lý mạng (NMS, Agent, MIB, SNMP) và công cụ nền tảng." },
  { id: 2, name: "Chương 2: Mô hình thông tin quản lý mạng", desc: "Phương pháp thu thập thông tin dựa trên gói (packet), luồng (flow) và nhật ký (log). Cài đặt ELK Stack. Khái niệm IDS/IPS (NIDS, HIDS, Signature-based, Anomaly-based, Passive, Reactive)." },
  { id: 3, name: "Chương 3: Quản lý cấu hình", desc: "Cấu hình thiết bị Router Cisco (hostname, passwords, aux, console, vty 0 4), các lệnh hiển thị/lưu/xóa cấu hình. Cấu hình định tuyến tĩnh, định tuyến động (RIPv2, EIGRP, OSPF). ACL và NAT." },
  { id: 4, name: "Chương 4: Quản lý lỗi", desc: "Fault Management (FM) - tìm ra lỗi, cô lập lỗi và sửa chữa. Chu trình quản lý lỗi. 5 loại lỗi mạng phổ biến (tài nguyên, phần cứng, ổ cứng RAID/SAN, phần mềm, con người) và lỗi bảo mật." },
  { id: 5, name: "Chương 5: Quản lý hiệu suất hoạt động", desc: "Network Performance Management. Tốc độ mạng, Nominal/Effective Channel Capacity, Độ trễ (processing, queuing, transmission, propagation). Mất gói và kiểm soát dòng chảy TCP. GlassWire và QoS." },
  { id: 6, name: "Chương 6: Quản lý bảo mật", desc: "Kỹ thuật bảo mật: Kiểm soát truy cập (định danh, xác thực). Tường lửa (lọc gói tin, bảng luật: first-match, highest-priority, most-specific). VPN. Phân tích mã độc tĩnh/động." }
];

let state = {
  activeTab: 'dashboard',
  questions: [], // Hỗn hợp builtin + custom
  customQuestions: [], // Lưu trữ trong LocalStorage
  bookmarks: [], // Danh sách IDs câu hỏi đã ghim
  examHistory: [], // Danh sách kết quả thi thử
  stats: {}, // Thống kê trả lời câu hỏi: { questionId: { correct: X, wrong: Y } }
  
  // Trạng thái học tập hiện tại
  study: {
    currentChapter: 1,
    questionIndex: 0,
    questionsList: [],
    selectedOption: null,
    answered: false,
    autoExplain: true
  },
  
  // Trạng thái thi thử hiện tại
  exam: {
    questionsList: [],
    currentQuestionIndex: 0,
    answers: {}, // { questionId: selectedOption }
    flagged: [], // Danh sách IDs câu hỏi đánh dấu
    timeLeft: 0, // Tính bằng giây
    timeLimitMinutes: 60,
    timerInterval: null,
    totalQuestions: 50
  },
  
  // Trạng thái phân tích import
  parsedImportQuestions: []
};

// ==========================================
// 2. KHỞI ĐỘNG VÀ TẢI DỮ LIỆU TỪ LOCALSTORAGE
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  document.documentElement.dataset.appPatch = '20260525-mobile-polish-1';
  initTheme();
  loadLocalStorage();
  mergeQuestions();
  setupEventListeners();
  switchTab('dashboard');
  
  // Vẽ icons Lucide
  lucide.createIcons();
}

function loadLocalStorage() {
  state.customQuestions = JSON.parse(localStorage.getItem('qtm_custom_questions')) || [];
  state.bookmarks = JSON.parse(localStorage.getItem('qtm_bookmarks')) || [];
  state.examHistory = JSON.parse(localStorage.getItem('qtm_exam_history')) || [];
  state.stats = JSON.parse(localStorage.getItem('qtm_stats')) || {};
  state.study.autoExplain = JSON.parse(localStorage.getItem('qtm_study_auto_explain') ?? 'true');
}

function saveLocalStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function initTheme() {
  const savedTheme = localStorage.getItem('qtm_theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  applyTheme(savedTheme || preferredTheme);
}

function applyTheme(theme) {
  const normalizedTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = normalizedTheme;
  localStorage.setItem('qtm_theme', normalizedTheme);
  updateThemeToggle(normalizedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
  applyTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function updateThemeToggle(theme) {
  const label = document.getElementById('theme-toggle-label');
  const button = document.getElementById('theme-toggle');
  if (!label || !button) return;

  label.textContent = theme === 'light' ? 'Light' : 'Dark';
  button.setAttribute('aria-label', theme === 'light' ? 'Đang dùng giao diện sáng' : 'Đang dùng giao diện tối');
  button.setAttribute('title', theme === 'light' ? 'Chuyển sang giao diện tối' : 'Chuyển sang giao diện sáng');
}

function mergeQuestions() {
  // Gộp câu hỏi hệ thống (từ questions.js) và câu hỏi do người dùng nhập vào
  const builtin = (typeof BUILTIN_QUESTIONS !== 'undefined') ? BUILTIN_QUESTIONS : [];
  
  // Đánh dấu nguồn
  const markedBuiltin = builtin.map(q => ({ ...q, source: 'builtin' }));
  const markedCustom = state.customQuestions.map(q => ({ ...q, source: 'custom' }));
  
  state.questions = [...markedBuiltin, ...markedCustom];
}

// ==========================================
// 3. ĐIỀU HƯỚNG TABS (SPA ROUTER)
// ==========================================

function setupEventListeners() {
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
  const autoExplainToggle = document.getElementById('study-auto-explain');
  if (autoExplainToggle) {
    autoExplainToggle.checked = state.study.autoExplain;
    autoExplainToggle.addEventListener('change', () => {
      state.study.autoExplain = autoExplainToggle.checked;
      saveLocalStorage('qtm_study_auto_explain', state.study.autoExplain);
      updateStudyAnswerButton();
    });
  }

  // Navigation Buttons (Sidebar & Mobile Nav)
  const navBtns = document.querySelectorAll('.nav-btn, .mobile-nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabName = btn.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  // Quick Mixed Exam Button on Header
  document.getElementById('quick-mixed-exam').addEventListener('click', () => {
    switchTab('exam');
    // Tự động thiết lập đề thi thử chuẩn: 50 câu trong 60 phút
    document.getElementById('exam-question-count').value = "50";
    document.getElementById('exam-time-limit').value = "60";
    // Check all scope checkboxes
    setTimeout(() => {
      const checkboxes = document.querySelectorAll('.exam-scope-cb');
      checkboxes.forEach(cb => cb.checked = true);
      document.getElementById('btn-start-exam').click();
    }, 100);
  });

  // --- STUDY TAB EVENTS ---
  document.getElementById('btn-prev-study').addEventListener('click', navigatePrevStudy);
  document.getElementById('btn-next-study').addEventListener('click', navigateNextStudy);
  document.getElementById('btn-show-answer').addEventListener('click', showStudyAnswer);
  document.getElementById('btn-bookmark-study').addEventListener('click', toggleBookmarkStudy);

  // --- EXAM TAB EVENTS ---
  document.getElementById('btn-start-exam').addEventListener('click', startExam);
  document.getElementById('btn-prev-exam').addEventListener('click', navigatePrevExam);
  document.getElementById('btn-next-exam').addEventListener('click', navigateNextExam);
  document.getElementById('btn-flag-exam').addEventListener('click', toggleFlagExam);
  document.getElementById('btn-submit-exam').addEventListener('click', () => submitExam(false));
  document.getElementById('btn-close-result').addEventListener('click', () => {
    document.getElementById('modal-exam-result').classList.add('hidden');
    switchTab('dashboard');
  });
  document.getElementById('btn-review-exam-errors').addEventListener('click', () => {
    document.getElementById('modal-exam-result').classList.add('hidden');
    switchTab('study');
    // Load các câu hỏi làm sai vào danh sách học tập
    loadExamWrongQuestionsToStudy();
  });
  document.getElementById('btn-review-full-exam')?.addEventListener('click', () => {
    document.getElementById('modal-exam-result').classList.add('hidden');
    viewExamHistory(state.examHistory.length - 1);
  });
  document.getElementById('btn-close-history-review')?.addEventListener('click', closeExamHistoryReview);

  // --- IMPORT TAB EVENTS ---
  document.getElementById('btn-parse-import').addEventListener('click', previewImport);
  document.getElementById('btn-clear-import').addEventListener('click', clearImportInput);
  document.getElementById('btn-save-imported').addEventListener('click', saveImportedQuestions);
  document.getElementById('btn-copy-prompt').addEventListener('click', copyPromptToClipboard);

  // --- MANAGE TAB EVENTS ---
  document.getElementById('manage-search').addEventListener('input', renderManageTab);
  document.getElementById('manage-filter-chapter').addEventListener('change', renderManageTab);
  document.getElementById('manage-filter-source').addEventListener('change', renderManageTab);
  document.getElementById('btn-add-manual').addEventListener('click', openAddManualModal);
  document.getElementById('btn-close-editor').addEventListener('click', closeEditorModal);
  document.getElementById('btn-cancel-editor').addEventListener('click', closeEditorModal);
  document.getElementById('question-editor-form').addEventListener('submit', saveManualQuestion);
}

function switchTab(tabName) {
  // Xóa active class cũ
  document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  document.querySelectorAll('.tab-view').forEach(view => {
    view.classList.remove('active');
  });

  // Active view mới
  const activeView = document.getElementById(`view-${state.activeTab = tabName}`);
  if (activeView) activeView.classList.add('active');

  // Cập nhật tiêu đề trang tương ứng
  updateHeaderInfo(tabName);

  // Khởi tạo/Render dữ liệu tab
  if (tabName === 'dashboard') {
    renderDashboardTab();
  } else if (tabName === 'study') {
    initStudyTab();
  } else if (tabName === 'exam') {
    initExamTab();
  } else if (tabName === 'bookmarks') {
    renderBookmarksTab();
  } else if (tabName === 'manage') {
    renderManageTab();
  }
  
  lucide.createIcons();
}

function updateHeaderInfo(tabName) {
  const titleEl = document.getElementById('page-title');
  const descEl = document.getElementById('page-description');
  
  const headerMap = {
    'dashboard': { title: 'Bảng điều khiển', desc: 'Theo dõi tiến độ học tập và lựa chọn chế độ ôn tập phù hợp.' },
    'study': { title: 'Luyện tập lý thuyết', desc: 'Luyện đề trắc nghiệm theo từng chương học dựa trên slide bài học.' },
    'exam': { title: 'Thi thử học phần', desc: 'Giả lập phòng thi với câu hỏi ngẫu nhiên và thời gian đếm ngược.' },
    'bookmarks': { title: 'Câu hỏi đã ghim', desc: 'Ôn luyện lại các câu hỏi khó bạn đã lưu lại trong lúc học.' },
    'import': { title: 'Nhập câu hỏi từ ChatGPT', desc: 'Công cụ nhập câu hỏi tự động bằng cách dán văn bản từ ChatGPT.' },
    'manage': { title: 'Quản lý câu hỏi', desc: 'Xem danh sách toàn bộ câu hỏi và chỉnh sửa/thêm mới các câu hỏi tùy chỉnh.' }
  };
  
  if (headerMap[tabName]) {
    titleEl.textContent = headerMap[tabName].title;
    descEl.textContent = headerMap[tabName].desc;
  }
}

// ==========================================
// 4. LOGIC TAB: DASHBOARD
// ==========================================

function renderDashboardTab() {
  // Cập nhật thẻ chỉ số thống kê
  document.getElementById('stat-total-questions').textContent = state.questions.length;
  document.getElementById('stat-custom-count').textContent = `${state.customQuestions.length} câu tự thêm`;
  
  // Tính tỷ lệ chính xác
  let totalAttempts = 0;
  let correctAttempts = 0;
  Object.values(state.stats).forEach(s => {
    totalAttempts += (s.correct || 0) + (s.wrong || 0);
    correctAttempts += (s.correct || 0);
  });
  const accuracyRate = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
  document.getElementById('stat-accuracy-rate').textContent = `${accuracyRate}%`;
  document.getElementById('stat-accuracy-desc').textContent = `Luyện tập trên ${totalAttempts} lượt trả lời`;

  // Câu hỏi ghim
  document.getElementById('stat-bookmarked-count').textContent = state.bookmarks.length;

  // Lần thi tốt nhất
  if (state.examHistory.length > 0) {
    let highestScore = 0;
    let highestTotal = 0;
    state.examHistory.forEach(h => {
      if ((h.score / h.total) >= (highestScore / (highestTotal || 1))) {
        highestScore = h.score;
        highestTotal = h.total;
      }
    });
    document.getElementById('stat-highest-exam').textContent = `${highestScore}/${highestTotal}`;
    document.getElementById('stat-exam-count').textContent = `Đã thi thử ${state.examHistory.length} lần`;
  } else {
    document.getElementById('stat-highest-exam').textContent = "0/0";
    document.getElementById('stat-exam-count').textContent = "Chưa làm bài thi nào";
  }

  // Render danh sách chương học
  const chaptersListEl = document.getElementById('dashboard-chapters-list');
  chaptersListEl.innerHTML = '';
  
  CHAPTERS.forEach(ch => {
    // Đếm số câu hỏi của chương
    const chQuestions = state.questions.filter(q => q.chapter === ch.id);
    // Tính tiến độ hoàn thành (số câu hỏi đã trả lời đúng ít nhất 1 lần)
    const chCorrectCount = chQuestions.filter(q => state.stats[q.id] && state.stats[q.id].correct > 0).length;
    const chPercent = chQuestions.length > 0 ? Math.round((chCorrectCount / chQuestions.length) * 100) : 0;

    const chCard = document.createElement('div');
    chCard.className = 'chapter-card';
    chCard.addEventListener('click', () => {
      state.study.currentChapter = ch.id;
      state.study.questionIndex = 0;
      switchTab('study');
    });

    chCard.innerHTML = `
      <div class="chapter-number">Chương ${ch.id}</div>
      <h3 class="chapter-title">${ch.name.replace(/^Chương \d+: /, '')}</h3>
      <p class="chapter-desc">${ch.desc}</p>
      <div class="chapter-stats">
        <span>Tiến độ: ${chCorrectCount}/${chQuestions.length} câu (${chPercent}%)</span>
        <div class="chapter-progress-bar">
          <div class="chapter-progress-fill" style="width: ${chPercent}%;"></div>
        </div>
      </div>
    `;
    chaptersListEl.appendChild(chCard);
  });

  // Render lịch sử thi gần đây
  const historyEl = document.getElementById('dashboard-exam-history');
  if (state.examHistory.length > 0) {
    historyEl.innerHTML = `
      <div class="table-responsive dashboard-history-table">
      <table class="q-table" style="font-size: 0.85rem;">
        <thead>
          <tr>
            <th>Thời gian</th>
            <th>Số câu hỏi</th>
            <th>Số câu đúng</th>
            <th>Tỷ lệ</th>
            <th>Xem lại</th>
          </tr>
        </thead>
        <tbody>
          ${state.examHistory.slice(-5).reverse().map(h => {
            const pct = Math.round((h.score / h.total) * 100);
            const dateStr = new Date(h.date).toLocaleDateString('vi-VN', {hour: '2-digit', minute:'2-digit'});
            const historyIndex = state.examHistory.indexOf(h);
            return `
              <tr>
                <td>${dateStr}</td>
                <td>${h.total} câu</td>
                <td class="${pct >= 80 ? 'text-emerald' : pct >= 50 ? 'text-cyan' : 'text-danger'}" style="font-weight:700;">${h.score}/${h.total}</td>
                <td>${pct}%</td>
                <td><button class="btn btn-secondary btn-sm" data-history-index="${historyIndex}"><i data-lucide="file-search"></i> Xem lại</button></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      </div>
    `;
    historyEl.querySelectorAll('[data-history-index]').forEach(btn => {
      btn.addEventListener('click', () => {
        viewExamHistory(Number.parseInt(btn.dataset.historyIndex, 10));
      });
    });
  } else {
    historyEl.innerHTML = `
      <div class="empty-state">
        <i data-lucide="calendar"></i>
        <p>Bạn chưa thực hiện bài thi thử nào.</p>
      </div>
    `;
  }
}

// ==========================================
// 5. LOGIC TAB: STUDY (LUYỆN TẬP CHƯƠNG)
// ==========================================

function initStudyTab() {
  // Vẽ menu chọn chương bên sidebar
  const menuEl = document.getElementById('study-chapter-menu');
  menuEl.innerHTML = '';
  
  CHAPTERS.forEach(ch => {
    const chQuestions = state.questions.filter(q => q.chapter === ch.id);
    const btn = document.createElement('button');
    btn.className = `chapter-nav-item ${state.study.currentChapter === ch.id ? 'active' : ''}`;
    btn.innerHTML = `Chương ${ch.id} (${chQuestions.length} câu)`;
    btn.addEventListener('click', () => {
      state.study.currentChapter = ch.id;
      state.study.questionIndex = 0;
      document.querySelectorAll('.chapter-nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadStudyQuestion();
    });
    menuEl.appendChild(btn);
  });

  loadStudyQuestion();
}

function loadStudyQuestion() {
  // Lọc câu hỏi của chương hiện tại
  state.study.questionsList = state.questions.filter(q => q.chapter === state.study.currentChapter);
  
  const container = document.getElementById('study-quiz-card');
  if (state.study.questionsList.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="book-open"></i>
        <h3>Chưa có câu hỏi cho chương này</h3>
        <p class="text-muted">Hãy dùng tab 'Nhập từ ChatGPT' để thêm câu hỏi ôn luyện cho Chương ${state.study.currentChapter} nhé!</p>
        <button onclick="switchTab('import')" class="btn btn-primary mt-3"><i data-lucide="plus"></i> Nhập câu hỏi ngay</button>
      </div>
    `;
    return;
  }

  // Phục hồi layout nguyên bản của card nếu trước đó trống
  if (!document.getElementById('study-question-text')) {
    restoreStudyCardLayout();
  }

  const q = state.study.questionsList[state.study.questionIndex];
  state.study.selectedOption = null;
  state.study.answered = false;

  // Cập nhật UI
  document.getElementById('study-chapter-badge').textContent = `Chương ${q.chapter}`;
  document.getElementById('study-progress-text').textContent = `Câu hỏi ${state.study.questionIndex + 1} / ${state.study.questionsList.length}`;
  
  const pct = Math.round(((state.study.questionIndex + 1) / state.study.questionsList.length) * 100);
  document.getElementById('study-progress-bar').style.width = `${pct}%`;

  document.getElementById('study-question-text').textContent = q.question;
  
  // Render options
  const optionsListEl = document.getElementById('study-options-list');
  optionsListEl.innerHTML = '';
  
  q.options.forEach((optText, idx) => {
    const optMarker = ['A', 'B', 'C', 'D'][idx];
    const item = document.createElement('div');
    item.className = 'option-item';
    item.setAttribute('data-index', idx);
    item.setAttribute('data-marker', optMarker);
    item.innerHTML = `
      <span class="option-marker">${optMarker}.</span>
      <span class="option-text">${optText.replace(/^[A-D](\.|\:)\s*/, '')}</span>
    `;
    item.addEventListener('click', () => selectStudyOption(idx, optMarker));
    optionsListEl.appendChild(item);
  });

  // Bookmark status
  updateBookmarkButtonUI(q.id);

  // Ẩn bảng giải thích
  document.getElementById('study-explanation-box').classList.add('hidden');
  const explanationTextEl = document.getElementById('study-explanation-text');
  if (explanationTextEl) {
    explanationTextEl.textContent = 'Chon mot dap an de xem giai thich kien thuc.';
    explanationTextEl.removeAttribute('title');
  }
  updateStudyAnswerButton();
  
  // Quản lý trạng thái nút Prev/Next
  document.getElementById('btn-prev-study').disabled = state.study.questionIndex === 0;
  
  const nextBtnText = state.study.questionIndex === state.study.questionsList.length - 1 ? 'Hoàn thành' : 'Tiếp theo';
  document.getElementById('btn-next-study').innerHTML = `${nextBtnText} <i data-lucide="arrow-right"></i>`;
  lucide.createIcons();
}

function restoreStudyCardLayout() {
  const container = document.getElementById('study-quiz-card');
  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-meta">
        <span class="badge badge-cyan" id="study-chapter-badge">Chương 1</span>
        <span class="quiz-progress-text" id="study-progress-text">Câu hỏi 1 / 15</span>
      </div>
      <div class="quiz-actions">
        <button class="btn-icon" id="btn-bookmark-study" title="Ghim câu hỏi này">
          <i data-lucide="bookmark"></i>
        </button>
      </div>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar-fill" id="study-progress-bar" style="width: 0%;"></div>
    </div>
    <div class="quiz-question-box">
      <h3 id="study-question-text">Đang tải câu hỏi...</h3>
    </div>
    <div class="quiz-options-list" id="study-options-list"></div>
    <div class="explanation-box hidden" id="study-explanation-box">
      <div class="explanation-status" id="study-feedback-status">
        <i data-lucide="info"></i>
        <span id="study-feedback-text">Chính xác!</span>
      </div>
      <div class="explanation-content">
        <p id="study-explanation-text">Chọn một đáp án để xem giải thích kiến thức.</p>
      </div>
    </div>
    <div class="quiz-footer">
      <button class="btn btn-secondary" id="btn-prev-study">
        <i data-lucide="arrow-left"></i> Quay lại
      </button>
      <button class="btn btn-secondary" id="btn-show-answer" disabled>
        <i data-lucide="sparkles"></i> Tự hiện đáp án
      </button>
      <button class="btn btn-primary" id="btn-next-study">
        Tiếp theo <i data-lucide="arrow-right"></i>
      </button>
    </div>
  `;
  setupEventListeners();
}

function updateStudyAnswerButton() {
  const showAnswerBtn = document.getElementById('btn-show-answer');
  if (!showAnswerBtn) return;

  if (state.study.autoExplain) {
    showAnswerBtn.innerHTML = '<i data-lucide="sparkles"></i> Tự hiện đáp án';
    showAnswerBtn.disabled = true;
  } else {
    showAnswerBtn.innerHTML = '<i data-lucide="eye"></i> Xem đáp án';
    showAnswerBtn.disabled = state.study.answered;
  }
  lucide.createIcons();
}

function selectStudyOption(optionIdx, marker) {
  if (state.study.answered) return; // Không cho phép chọn lại
  
  state.study.answered = true;
  state.study.selectedOption = optionIdx;
  
  const q = state.study.questionsList[state.study.questionIndex];
  const isCorrect = marker === q.answer;

  // Cập nhật stats học tập
  if (!state.stats[q.id]) {
    state.stats[q.id] = { correct: 0, wrong: 0 };
  }
  if (isCorrect) {
    state.stats[q.id].correct++;
  } else {
    state.stats[q.id].wrong++;
  }
  saveLocalStorage('qtm_stats', state.stats);

  if (state.study.autoExplain) {
    revealStudyAnswer(marker);
    showStudyExplanation(isCorrect, q);
    const explanationEl = document.getElementById('study-explanation-text');
    if (explanationEl) {
      const explanation = getStudyExplanation(q);
      explanationEl.textContent = explanation;
      explanationEl.setAttribute('title', explanation);
    }
    setTimeout(() => {
      const delayedExplanationEl = document.getElementById('study-explanation-text');
      if (delayedExplanationEl) {
        const explanation = getStudyExplanation(q);
        delayedExplanationEl.textContent = explanation;
        delayedExplanationEl.setAttribute('title', explanation);
      }
    }, 0);
  } else {
    const selectedItem = document.querySelector(`#study-options-list .option-item[data-marker="${marker}"]`);
    selectedItem?.classList.add('selected');
  }
  updateStudyAnswerButton();
}

function showStudyAnswer() {
  const q = state.study.questionsList[state.study.questionIndex];
  if (!q) return;

  if (!state.study.answered) {
    state.study.answered = true;
  }

  const selectedMarker = state.study.selectedOption !== null
    ? ['A', 'B', 'C', 'D'][state.study.selectedOption]
    : null;
  revealStudyAnswer(selectedMarker);
  showStudyExplanation(selectedMarker ? selectedMarker === q.answer : null, q);
  updateStudyAnswerButton();
}

function revealStudyAnswer(selectedMarker = null) {
  const q = state.study.questionsList[state.study.questionIndex];
  const optionItems = document.querySelectorAll('#study-options-list .option-item');
  optionItems.forEach(item => {
    const itemMarker = item.getAttribute('data-marker');
    if (itemMarker === q.answer) {
      item.classList.add('correct');
    } else if (selectedMarker && itemMarker === selectedMarker) {
      item.classList.add('incorrect');
    }
  });
}

function getStudyExplanation(q) {
  const rawExplanation = (q?.explanation || '').trim();
  const normalizedExplanation = rawExplanation
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
  const isPlaceholder = !rawExplanation
    || normalizedExplanation.includes('giai thich noi dung')
    || normalizedExplanation.includes('giai thich kien thuc')
    || normalizedExplanation.includes('khong co giai thich')
    || normalizedExplanation.includes('dang cap nhat');

  if (!isPlaceholder) return rawExplanation;

  const answerIndex = ['A', 'B', 'C', 'D'].indexOf(q.answer);
  const correctOption = (q.options?.[answerIndex] || '')
    .replace(/^[A-D](\.|\:)\s*/, '')
    .trim();

  if (correctOption) {
    return `Ki\u1ebfn th\u1ee9c c\u1ea7n nh\u1edb: ${correctOption}. \u0110\u00e2y l\u00e0 \u00fd tr\u1ecdng t\u00e2m trong ${q.chapterName || `Ch\u01b0\u01a1ng ${q.chapter}`}.`;
  }

  return `Ki\u1ebfn th\u1ee9c c\u1ea7n nh\u1edb n\u1eb1m trong ${q.chapterName || `Ch\u01b0\u01a1ng ${q.chapter}`}; h\u00e3y \u0111\u1ed1i chi\u1ebfu l\u1ea1i ph\u1ea7n t\u01b0\u01a1ng \u1ee9ng trong gi\u00e1o tr\u00ecnh.`;
}

function showStudyExplanation(isCorrect, q) {
  const box = document.getElementById('study-explanation-box');
  const status = document.getElementById('study-feedback-status');
  const feedText = document.getElementById('study-feedback-text');
  const expText = document.getElementById('study-explanation-text');

  box.classList.remove('hidden');
  
  if (isCorrect === true) {
    status.className = 'explanation-status correct';
    status.querySelector('i').setAttribute('data-lucide', 'check-circle-2');
    feedText.textContent = 'Chính xác!';
  } else if (isCorrect === false) {
    status.className = 'explanation-status incorrect';
    status.querySelector('i').setAttribute('data-lucide', 'x-circle');
    feedText.textContent = `Sai rồi! Đáp án đúng là: ${q.answer}`;
  } else {
    status.className = 'explanation-status';
    status.querySelector('i').setAttribute('data-lucide', 'info');
    feedText.textContent = `Đáp án đúng: ${q.answer}`;
  }
  
  const explanation = getStudyExplanation(q);
  expText.textContent = explanation;
  expText.setAttribute('title', explanation);
  lucide.createIcons();
}

function navigatePrevStudy() {
  if (state.study.questionIndex > 0) {
    state.study.questionIndex--;
    loadStudyQuestion();
  }
}

function navigateNextStudy() {
  if (state.study.questionIndex < state.study.questionsList.length - 1) {
    state.study.questionIndex++;
    loadStudyQuestion();
  } else {
    alert(`Chúc mừng! Bạn đã hoàn thành toàn bộ ${state.study.questionsList.length} câu hỏi của Chương ${state.study.currentChapter}.`);
    switchTab('dashboard');
  }
}

// Bookmark Toggle
function toggleBookmarkStudy() {
  const q = state.study.questionsList[state.study.questionIndex];
  if (!q) return;

  const idx = state.bookmarks.indexOf(q.id);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
  } else {
    state.bookmarks.push(q.id);
  }
  
  saveLocalStorage('qtm_bookmarks', state.bookmarks);
  updateBookmarkButtonUI(q.id);
}

function updateBookmarkButtonUI(qId) {
  const btn = document.getElementById('btn-bookmark-study');
  const isBookmarked = state.bookmarks.includes(qId);
  
  if (isBookmarked) {
    btn.classList.add('active');
    btn.querySelector('i').setAttribute('data-lucide', 'bookmark-minus');
  } else {
    btn.classList.remove('active');
    btn.querySelector('i').setAttribute('data-lucide', 'bookmark');
  }
  lucide.createIcons();
}

// ==========================================
// 6. LOGIC TAB: EXAM (THI THỬ PHÒNG THI)
// ==========================================

function initExamTab() {
  // Ẩn bài thi đang diễn ra, hiện cài đặt
  document.getElementById('exam-setup-box').classList.remove('hidden');
  document.getElementById('exam-active-box').classList.add('hidden');
  
  // Dựng danh sách scope (chương thi)
  const scopeEl = document.getElementById('exam-scope-selection');
  scopeEl.innerHTML = '';
  
  CHAPTERS.forEach(ch => {
    const chQuestions = state.questions.filter(q => q.chapter === ch.id);
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.alignItems = 'center';
    wrapper.style.gap = '8px';
    wrapper.style.margin = '6px 0';
    wrapper.innerHTML = `
      <input type="checkbox" id="scope-ch-${ch.id}" class="exam-scope-cb" value="${ch.id}" ${chQuestions.length > 0 ? 'checked' : 'disabled'}>
      <label for="scope-ch-${ch.id}" style="font-weight: 500; font-size: 0.9rem; cursor: pointer;">
        Chương ${ch.id} (${chQuestions.length} câu)
      </label>
    `;
    scopeEl.appendChild(wrapper);
  });
}

function startExam() {
  // Lấy các chương được chọn
  const checkedBoxes = document.querySelectorAll('.exam-scope-cb:checked');
  const selectedChapters = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
  
  if (selectedChapters.length === 0) {
    alert('Vui lòng chọn ít nhất một chương để thi thử!');
    return;
  }

  // Gom các câu hỏi thuộc phạm vi
  const examPool = state.questions.filter(q => selectedChapters.includes(q.chapter));
  
  if (examPool.length === 0) {
    alert('Không tìm thấy câu hỏi nào trong phân hệ được chọn!');
    return;
  }

  const qCount = parseInt(document.getElementById('exam-question-count').value);
  const timeLimitMin = parseInt(document.getElementById('exam-time-limit').value);

  // Chọn ngẫu nhiên N câu hỏi từ Pool
  state.exam.questionsList = shuffleArray([...examPool]).slice(0, Math.min(qCount, examPool.length));
  state.exam.currentQuestionIndex = 0;
  state.exam.answers = {};
  state.exam.flagged = [];
  state.exam.timeLeft = timeLimitMin * 60;
  state.exam.timeLimitMinutes = timeLimitMin;
  state.exam.totalQuestions = state.exam.questionsList.length;

  // Hiển thị UI thi cử
  document.getElementById('exam-setup-box').classList.add('hidden');
  document.getElementById('exam-active-box').classList.remove('hidden');

  // Khởi chạy đếm ngược thời gian
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  state.exam.timerInterval = setInterval(updateExamTimer, 1000);

  // Load câu đầu tiên
  loadExamQuestion();
  renderExamSheetGrid();
  updateExamTimerDisplay();
}

function updateExamTimer() {
  if (state.exam.timeLeft > 0) {
    state.exam.timeLeft--;
    updateExamTimerDisplay();
    
    // Đổi màu cảnh báo nếu dưới 1 phút
    if (state.exam.timeLeft <= 60) {
      document.getElementById('exam-timer-display').style.color = 'var(--color-danger)';
    } else {
      document.getElementById('exam-timer-display').style.color = 'var(--color-warning)';
    }
  } else {
    // Hết giờ
    clearInterval(state.exam.timerInterval);
    alert('Hết thời gian làm bài! Hệ thống tự động nộp bài.');
    submitExam(true);
  }
}

function updateExamTimerDisplay() {
  const min = Math.floor(state.exam.timeLeft / 60);
  const sec = state.exam.timeLeft % 60;
  const timeStr = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  document.getElementById('exam-timer-text').textContent = timeStr;
}

function loadExamQuestion() {
  const q = state.exam.questionsList[state.exam.currentQuestionIndex];
  
  document.getElementById('exam-progress-desc').textContent = `Câu hỏi ${state.exam.currentQuestionIndex + 1} / ${state.exam.totalQuestions}`;
  document.getElementById('exam-question-text').textContent = q.question;

  // Render options
  const optionsEl = document.getElementById('exam-options-list');
  optionsEl.innerHTML = '';

  const selectedAnswer = state.exam.answers[q.id];

  q.options.forEach((optText, idx) => {
    const marker = ['A', 'B', 'C', 'D'][idx];
    const item = document.createElement('div');
    item.className = `option-item ${selectedAnswer === marker ? 'selected' : ''}`;
    item.innerHTML = `
      <span class="option-marker">${marker}.</span>
      <span class="option-text">${optText.replace(/^[A-D](\.|\:)\s*/, '')}</span>
    `;
    item.addEventListener('click', () => selectExamOption(q.id, marker));
    optionsEl.appendChild(item);
  });

  // Cập nhật trạng thái nút Flag/Đánh dấu
  const flagBtn = document.getElementById('btn-flag-exam');
  if (state.exam.flagged.includes(q.id)) {
    flagBtn.classList.add('active');
    flagBtn.innerHTML = `<i data-lucide="flag-off"></i> Bỏ đánh dấu`;
  } else {
    flagBtn.classList.remove('active');
    flagBtn.innerHTML = `<i data-lucide="flag"></i> Đánh dấu câu`;
  }

  // Trạng thái nút câu sau / trước
  document.getElementById('btn-prev-exam').disabled = state.exam.currentQuestionIndex === 0;
  
  const nextBtn = document.getElementById('btn-next-exam');
  if (state.exam.currentQuestionIndex === state.exam.totalQuestions - 1) {
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
  } else {
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
  }

  lucide.createIcons();
}

function selectExamOption(qId, marker) {
  state.exam.answers[qId] = marker;
  
  // Highlight
  document.querySelectorAll('#exam-options-list .option-item').forEach(item => {
    if (item.querySelector('.option-marker').textContent.startsWith(marker)) {
      item.classList.add('selected');
    } else {
      item.classList.remove('selected');
    }
  });

  // Cập nhật bảng quick navigation
  renderExamSheetGrid();
  
  // Tự động chuyển câu tiếp theo sau 300ms để trải nghiệm mượt mà
  setTimeout(() => {
    if (state.exam.currentQuestionIndex < state.exam.totalQuestions - 1) {
      state.exam.currentQuestionIndex++;
      loadExamQuestion();
    }
  }, 250);
}

function navigatePrevExam() {
  if (state.exam.currentQuestionIndex > 0) {
    state.exam.currentQuestionIndex--;
    loadExamQuestion();
  }
}

function navigateNextExam() {
  if (state.exam.currentQuestionIndex < state.exam.totalQuestions - 1) {
    state.exam.currentQuestionIndex++;
    loadExamQuestion();
  }
}

function toggleFlagExam() {
  const q = state.exam.questionsList[state.exam.currentQuestionIndex];
  const idx = state.exam.flagged.indexOf(q.id);
  
  if (idx > -1) {
    state.exam.flagged.splice(idx, 1);
  } else {
    state.exam.flagged.push(q.id);
  }
  
  loadExamQuestion();
  renderExamSheetGrid();
}

function renderExamSheetGrid() {
  const grid = document.getElementById('exam-sheet-grid');
  grid.innerHTML = '';

  state.exam.questionsList.forEach((q, idx) => {
    const cell = document.createElement('div');
    
    let cellClass = 'sheet-cell';
    if (idx === state.exam.currentQuestionIndex) cellClass += ' active';
    if (state.exam.answers[q.id]) cellClass += ' answered';
    if (state.exam.flagged.includes(q.id)) cellClass += ' flagged';

    cell.className = cellClass;
    cell.textContent = idx + 1;
    
    cell.addEventListener('click', () => {
      state.exam.currentQuestionIndex = idx;
      loadExamQuestion();
    });
    
    grid.appendChild(cell);
  });
}

function submitExam(force = false) {
  if (!force) {
    // Đếm số câu hỏi chưa làm
    const totalAns = Object.keys(state.exam.answers).length;
    const leftCount = state.exam.totalQuestions - totalAns;
    
    if (leftCount > 0) {
      if (!confirm(`Bạn còn ${leftCount} câu hỏi chưa trả lời. Bạn có chắc chắn muốn nộp bài?`)) {
        return;
      }
    } else {
      if (!confirm('Bạn có chắc chắn muốn nộp bài thi?')) {
        return;
      }
    }
  }

  // Dừng bộ đếm thời gian
  clearInterval(state.exam.timerInterval);

  // Tính điểm số
  let correctCount = 0;
  let incorrectCount = 0;
  const incorrectQuestions = [];
  const reviewItems = [];

  state.exam.questionsList.forEach(q => {
    const userAns = state.exam.answers[q.id];
    const isCorrect = userAns === q.answer;
    reviewItems.push({
      id: q.id,
      chapter: q.chapter,
      chapterName: q.chapterName,
      question: q.question,
      options: q.options,
      answer: q.answer,
      userAnswer: userAns || null,
      isCorrect,
      explanation: getStudyExplanation(q)
    });
    if (isCorrect) {
      correctCount++;
      // Lưu stats học tập
      if (!state.stats[q.id]) state.stats[q.id] = { correct: 0, wrong: 0 };
      state.stats[q.id].correct++;
    } else {
      incorrectCount++;
      incorrectQuestions.push(q);
      // Lưu stats học tập
      if (!state.stats[q.id]) state.stats[q.id] = { correct: 0, wrong: 0 };
      state.stats[q.id].wrong++;
    }
  });

  saveLocalStorage('qtm_stats', state.stats);

  // Ghi nhận lịch sử thi
  const examResult = {
    id: `exam_${Date.now()}`,
    date: new Date().toISOString(),
    score: correctCount,
    total: state.exam.totalQuestions,
    timeLimitMinutes: state.exam.timeLimitMinutes,
    timeSpentSeconds: Math.max(0, (state.exam.timeLimitMinutes * 60) - state.exam.timeLeft),
    wrongIds: incorrectQuestions.map(q => q.id),
    answers: { ...state.exam.answers },
    questions: reviewItems
  };
  state.examHistory.push(examResult);
  state.examHistory = state.examHistory.slice(-20);
  saveLocalStorage('qtm_exam_history', state.examHistory);

  // Cấu hình Modal báo điểm
  document.getElementById('exam-result-score').textContent = correctCount;
  document.getElementById('exam-result-score').nextElementSibling.textContent = `/${state.exam.totalQuestions}`;
  
  const pct = Math.round((correctCount / state.exam.totalQuestions) * 100);
  document.getElementById('exam-result-percent').textContent = `${pct}%`;
  
  // Cài đặt thông điệp kết quả
  let msg = '';
  let accentClass = 'modal-header-accent success';
  let iconName = 'award';
  
  if (pct >= 80) {
    msg = 'Xuất sắc! Kiến thức của bạn rất vững vàng, hoàn toàn tự tin đạt điểm A trong kỳ thi thật!';
    accentClass = 'modal-header-accent success';
    iconName = 'award';
  } else if (pct >= 50) {
    msg = 'Khá tốt! Bạn đã vượt qua mức trung bình. Hãy tập trung ôn lại các câu trả lời sai để tối ưu điểm số nhé!';
    accentClass = 'modal-header-accent success';
    iconName = 'thumbs-up';
  } else {
    msg = 'Chưa đạt! Hãy rà soát lại cẩn thận slide lý thuyết và ghim các câu hỏi sai để luyện tập nhiều lần.';
    accentClass = 'modal-header-accent';
    iconName = 'alert-triangle';
    document.getElementById('exam-result-percent').style.color = 'var(--color-danger)';
  }
  
  document.getElementById('exam-result-message').textContent = msg;
  document.getElementById('exam-result-accent').className = accentClass;
  document.getElementById('exam-result-icon').setAttribute('data-lucide', iconName);
  
  document.getElementById('exam-result-correct').textContent = `${correctCount} câu`;
  document.getElementById('exam-result-incorrect').textContent = `${incorrectCount} câu`;

  // Lưu danh sách câu làm sai để phục vụ xem lại
  window.lastExamWrongIds = incorrectQuestions.map(q => q.id);

  // Mở kết quả modal
  document.getElementById('modal-exam-result').classList.remove('hidden');
  lucide.createIcons();
}

function viewExamHistory(historyIndex) {
  const record = state.examHistory[historyIndex];
  if (!record) {
    alert('Không tìm thấy bài thi thử này.');
    return;
  }

  const items = getExamReviewItems(record);
  if (items.length === 0) {
    alert('Bài thi này được lưu bằng phiên bản cũ nên chưa có dữ liệu xem lại chi tiết.');
    return;
  }

  const pct = Math.round((record.score / record.total) * 100);
  const dateStr = new Date(record.date).toLocaleString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
  const spentText = record.timeSpentSeconds
    ? `${Math.floor(record.timeSpentSeconds / 60)} phút ${String(record.timeSpentSeconds % 60).padStart(2, '0')} giây`
    : 'Không có dữ liệu';

  document.getElementById('history-review-title').textContent = `Xem lại bài thi thử - ${dateStr}`;
  document.getElementById('history-review-summary').textContent =
    `Điểm: ${record.score}/${record.total} (${pct}%) | Thời gian: ${spentText}`;

  const listEl = document.getElementById('history-review-list');
  listEl.innerHTML = items.map((item, idx) => renderExamReviewItem(item, idx)).join('');

  document.getElementById('modal-exam-history-review').classList.remove('hidden');
  lucide.createIcons();
}

function closeExamHistoryReview() {
  document.getElementById('modal-exam-history-review').classList.add('hidden');
}

function getExamReviewItems(record) {
  if (Array.isArray(record.questions) && record.questions.length > 0) {
    return record.questions;
  }

  if (Array.isArray(record.wrongIds) && record.wrongIds.length > 0) {
    return state.questions
      .filter(q => record.wrongIds.includes(q.id))
      .map(q => ({
        ...q,
        userAnswer: record.answers?.[q.id] || null,
        isCorrect: false,
        explanation: getStudyExplanation(q)
      }));
  }

  return [];
}

function renderExamReviewItem(item, idx) {
  const userAnswer = item.userAnswer || null;
  const statusClass = item.isCorrect ? 'correct' : 'incorrect';
  const statusText = item.isCorrect ? 'Đúng' : (userAnswer ? 'Sai' : 'Chưa trả lời');
  const explanation = item.explanation || getStudyExplanation(item);

  return `
    <article class="exam-review-card">
      <div class="exam-review-head">
        <span class="badge badge-cyan">Câu ${idx + 1}</span>
        <span class="badge ${item.isCorrect ? 'badge-success' : 'badge-danger'}">${statusText}</span>
      </div>
      <h4>${escapeHtml(item.question)}</h4>
      <div class="quiz-options-list exam-review-options">
        ${item.options.map((optionText, optionIdx) => {
          const marker = ['A', 'B', 'C', 'D'][optionIdx];
          const classes = ['option-item'];
          if (marker === item.answer) classes.push('correct');
          if (marker === userAnswer && marker !== item.answer) classes.push('incorrect');
          if (marker === userAnswer) classes.push('selected');
          return `
            <div class="${classes.join(' ')}">
              <span class="option-marker">${marker}.</span>
              <span class="option-text">${escapeHtml(optionText.replace(/^[A-D](\.|\:)\s*/, ''))}</span>
            </div>
          `;
        }).join('')}
      </div>
      <div class="exam-review-meta">
        Bạn chọn: <strong>${userAnswer || 'Chưa trả lời'}</strong> | Đáp án đúng: <strong>${item.answer}</strong>
      </div>
      <div class="explanation-box">
        <div class="explanation-status ${statusClass}">
          <i data-lucide="info"></i>
          <span>Giải thích</span>
        </div>
        <div class="explanation-content">
          <p>${escapeHtml(explanation)}</p>
        </div>
      </div>
    </article>
  `;
}

function loadExamWrongQuestionsToStudy() {
  if (!window.lastExamWrongIds || window.lastExamWrongIds.length === 0) {
    alert('Không tìm thấy dữ liệu các câu trả lời sai.');
    return;
  }

  // Nạp các câu hỏi sai vào danh sách học tập đặc biệt
  const wrongQs = state.questions.filter(q => window.lastExamWrongIds.includes(q.id));
  
  state.study.questionsList = wrongQs;
  state.study.questionIndex = 0;
  state.study.currentChapter = null; // Báo hiệu chế độ review lỗi sai

  // Khởi tạo card ôn tập
  restoreStudyCardLayout();
  
  // Cập nhật UI cụ thể cho chế độ review sai
  document.getElementById('study-chapter-badge').textContent = `Ôn lỗi sai`;
  document.getElementById('study-progress-text').textContent = `Câu hỏi 1 / ${wrongQs.length}`;
  document.getElementById('study-progress-bar').style.width = '0%';
  
  loadStudyQuestion();
}

// ==========================================
// 7. LOGIC TAB: BOOKMARKS (GHIM CÂU HỎI)
// ==========================================

function renderBookmarksTab() {
  const container = document.getElementById('bookmarks-list-container');
  container.innerHTML = '';

  const bookmarkedQuestions = state.questions.filter(q => state.bookmarks.includes(q.id));

  if (bookmarkedQuestions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i data-lucide="bookmark-off"></i>
        <h3>Chưa ghim câu hỏi nào</h3>
        <p class="text-muted">Trong lúc luyện tập, hãy bấm icon Bookmark để lưu trữ các câu hỏi khó nhớ tại đây.</p>
      </div>
    `;
    return;
  }

  // Render danh sách câu hỏi ghim dưới dạng carousels hoặc card list
  bookmarkedQuestions.forEach((q, idx) => {
    const card = document.createElement('div');
    card.className = 'card glass-card mb-3';
    
    // Tạo cấu trúc card ghim
    card.innerHTML = `
      <div class="quiz-header" style="border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-bottom: 15px;">
        <span class="badge badge-cyan">Chương ${q.chapter}</span>
        <button class="btn-icon text-danger" onclick="removeBookmarkFromTab('${q.id}')" title="Bỏ ghim">
          <i data-lucide="bookmark-minus"></i>
        </button>
      </div>
      <div class="quiz-question-box">
        <h4 style="font-size: 1.1rem; line-height: 1.4;">${idx + 1}. ${q.question}</h4>
      </div>
      <div class="quiz-options-list mt-3">
        ${q.options.map((opt, i) => {
          const marker = ['A', 'B', 'C', 'D'][i];
          const isCorrect = marker === q.answer;
          return `
            <div class="option-item ${isCorrect ? 'correct' : ''}" style="cursor: default; padding: 10px 15px;">
              <span class="option-marker">${marker}.</span>
              <span class="option-text">${opt.replace(/^[A-D](\.|\:)\s*/, '')}</span>
            </div>
          `;
        }).join('')}
      </div>
      <div class="explanation-box mt-3" style="background: rgba(255,255,255,0.02);">
        <div class="explanation-status correct" style="font-size:0.85rem;">
          <i data-lucide="info"></i> Giải thích chi tiết (Đáp án ${q.answer}):
        </div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">${q.explanation || 'Không có giải thích.'}</p>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function removeBookmarkFromTab(qId) {
  const idx = state.bookmarks.indexOf(qId);
  if (idx > -1) {
    state.bookmarks.splice(idx, 1);
    saveLocalStorage('qtm_bookmarks', state.bookmarks);
    renderBookmarksTab();
  }
}

// ==========================================
// 8. LOGIC TAB: SMART IMPORT (NHẬP TỪ CHATGPT)
// ==========================================

function previewImport() {
  const text = document.getElementById('import-text-input').value.trim();
  const chapterId = parseInt(document.getElementById('import-chapter-select').value);
  
  if (!text) {
    alert('Vui lòng nhập văn bản thô copy từ ChatGPT!');
    return;
  }

  // Giải thuật phân tích câu hỏi thông minh
  state.parsedImportQuestions = parseChatGPTQuiz(text, chapterId);
  
  const previewBox = document.getElementById('import-preview-box');
  const actionsEl = document.getElementById('import-preview-actions');
  const statusEl = document.getElementById('preview-status-text');

  previewBox.innerHTML = '';
  
  if (state.parsedImportQuestions.length === 0) {
    previewBox.innerHTML = `
      <div class="empty-state">
        <i data-lucide="alert-circle" class="text-danger"></i>
        <h3>Không phân tích được câu hỏi nào</h3>
        <p class="text-muted">Vui lòng kiểm tra lại định dạng văn bản. Xem phần gợi ý câu lệnh ở dưới để đạt định dạng chuẩn.</p>
      </div>
    `;
    actionsEl.classList.add('hidden');
    return;
  }

  // Hiển thị Preview
  state.parsedImportQuestions.forEach((q, idx) => {
    const div = document.createElement('div');
    div.className = 'card' + (idx < state.parsedImportQuestions.length - 1 ? ' border-bottom mb-3' : '');
    div.style.padding = '10px 0';
    div.innerHTML = `
      <h4 style="font-size: 0.95rem; line-height: 1.3; color: var(--text-glow);">Câu ${idx + 1}: ${q.question}</h4>
      <div style="margin-left: 15px; margin-top: 8px; font-size: 0.85rem; color: var(--text-muted);">
        ${q.options.map((opt, i) => `<div><strong>${['A','B','C','D'][i]}.</strong> ${opt}</div>`).join('')}
        <div class="text-emerald mt-2"><strong>Đáp án đúng:</strong> ${q.answer}</div>
        <div class="text-violet mt-1"><strong>Giải thích:</strong> ${q.explanation || 'Không có giải thích.'}</div>
      </div>
    `;
    previewBox.appendChild(div);
  });

  statusEl.textContent = `Phân tích thành công ${state.parsedImportQuestions.length} câu hỏi.`;
  actionsEl.classList.remove('hidden');
  lucide.createIcons();
}

function parseChatGPTQuiz(text, chapterId) {
  const list = [];
  
  // Tách câu hỏi theo dấu phân cách "---" hoặc chuỗi dòng trống kép
  const blocks = text.split(/(?:^-{3,}\s*$|(?:\r?\n){2,})/m);
  
  blocks.forEach(block => {
    const trimmed = block.trim();
    if (!trimmed) return;

    // Phân tích câu hỏi
    const lines = trimmed.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    
    let questionText = '';
    let options = [];
    let answer = '';
    let explanation = '';

    // Biến trạng thái
    let readingQuestion = true;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Khớp đáp án
      const ansMatch = line.match(/^(?:Đáp án|Đáp án đúng|Dap an|Answer|Correct)\s*[:\-]\s*([A-D])/i);
      if (ansMatch) {
        answer = ansMatch[1].toUpperCase();
        readingQuestion = false;
        continue;
      }

      // Khớp giải thích
      const expMatch = line.match(/^(?:Giải thích|Giai thich|Explanation|Reason)\s*[:\-]\s*(.*)/i);
      if (expMatch) {
        explanation = expMatch[1];
        // Nếu giải thích còn kéo dài ở các dòng tiếp theo
        let j = i + 1;
        while (j < lines.length && !lines[j].match(/^(?:Đáp án|Đáp án đúng|Dap an|Answer|Correct|A\.|B\.|C\.|D\.)/i)) {
          explanation += ' ' + lines[j];
          i = j; // Nhảy dòng
          j++;
        }
        readingQuestion = false;
        continue;
      }

      // Khớp options
      const optMatch = line.match(/^([A-D])\s*[\.\:\-\)]\s*(.*)/i);
      if (optMatch) {
        const index = ['A', 'B', 'C', 'D'].indexOf(optMatch[1].toUpperCase());
        options[index] = optMatch[2].trim();
        readingQuestion = false;
        continue;
      }

      // Khớp dòng trơn bắt đầu bằng A, B, C, D (ví dụ: A. Lọc gói tin)
      const optPlainMatch = line.match(/^([A-D])\s+(.*)/i);
      if (optPlainMatch && readingQuestion === false && options.filter(Boolean).length < 4) {
        const index = ['A', 'B', 'C', 'D'].indexOf(optPlainMatch[1].toUpperCase());
        options[index] = optPlainMatch[2].trim();
        continue;
      }

      // Còn lại là câu hỏi
      if (readingQuestion) {
        if (questionText) questionText += ' ';
        // Loại bỏ tiền tố "Câu X:" hoặc "Question X:"
        questionText += line.replace(/^(?:Câu|Cau|Question)\s*\d+\s*[:\-\.]\s*/i, '');
      }
    }

    // Làm sạch options
    const finalOptions = [];
    for (let i = 0; i < 4; i++) {
      if (options[i]) {
        finalOptions.push(options[i]);
      } else {
        // Tự động phân bổ nếu thiếu index
        const missingOpt = lines.find(l => l.startsWith(['A','B','C','D'][i]));
        if (missingOpt) {
          finalOptions.push(missingOpt.substring(2).trim());
        }
      }
    }

    // Kiểm tra tính hợp lệ tối thiểu của một câu hỏi trắc nghiệm
    if (questionText && finalOptions.length >= 2 && answer) {
      // Đảm bảo đủ 4 options
      while (finalOptions.length < 4) {
        finalOptions.push('(Trống)');
      }

      list.push({
        id: `custom_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        chapter: chapterId,
        chapterName: CHAPTERS.find(c => c.id === chapterId).name,
        question: questionText,
        options: finalOptions,
        answer: answer,
        explanation: explanation
      });
    }
  });

  return list;
}

function saveImportedQuestions() {
  if (state.parsedImportQuestions.length === 0) return;

  state.customQuestions = [...state.customQuestions, ...state.parsedImportQuestions];
  saveLocalStorage('qtm_custom_questions', state.customQuestions);
  mergeQuestions();

  alert(`Đã lưu thành công ${state.parsedImportQuestions.length} câu hỏi tùy chỉnh vào cơ sở dữ liệu!`);
  
  // Clear inputs
  document.getElementById('import-text-input').value = '';
  document.getElementById('import-preview-box').innerHTML = `
    <div class="empty-state">
      <i data-lucide="eye-off"></i>
      <p>Bấm 'Preview / Phân tích thử' để xem trước các câu hỏi được trích xuất.</p>
    </div>
  `;
  document.getElementById('import-preview-actions').classList.add('hidden');
  
  // Quay lại dashboard để xem thay đổi
  switchTab('dashboard');
}

function clearImportInput() {
  document.getElementById('import-text-input').value = '';
}

function copyPromptToClipboard() {
  const codeText = document.getElementById('prompt-code-text').textContent;
  navigator.clipboard.writeText(codeText).then(() => {
    alert('Đã copy câu lệnh mẫu vào clipboard! Bạn có thể dán trực tiếp sang tab ChatGPT.');
  }).catch(err => {
    alert('Không tự động copy được. Vui lòng chọn văn bản và copy thủ công.');
  });
}

// ==========================================
// 9. LOGIC TAB: MANAGE (QUẢN LÝ CÂU HỎI)
// ==========================================

function renderManageTab() {
  const tbody = document.getElementById('manage-questions-list');
  const emptyState = document.getElementById('manage-empty-state');
  
  tbody.innerHTML = '';
  
  // Lấy bộ lọc
  const searchVal = document.getElementById('manage-search').value.toLowerCase().trim();
  const chFilter = document.getElementById('manage-filter-chapter').value;
  const srcFilter = document.getElementById('manage-filter-source').value;

  // Lọc danh sách câu hỏi
  const filtered = state.questions.filter(q => {
    const matchSearch = q.question.toLowerCase().includes(searchVal) || 
                        q.options.some(opt => opt.toLowerCase().includes(searchVal)) ||
                        (q.explanation && q.explanation.toLowerCase().includes(searchVal));
    const matchChapter = chFilter === 'all' ? true : q.chapter === parseInt(chFilter);
    const matchSource = srcFilter === 'all' ? true : q.source === srcFilter;

    return matchSearch && matchChapter && matchSource;
  });

  if (filtered.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');

  filtered.forEach(q => {
    const tr = document.createElement('tr');
    
    const isCustom = q.source === 'custom';
    const sourceBadge = isCustom ? 
      '<span class="badge" style="background:rgba(0, 176, 255, 0.12); color:var(--color-info);">Tùy chọn</span>' : 
      '<span class="badge" style="background:rgba(127, 0, 255, 0.12); color:#c482ff;">Hệ thống</span>';

    tr.innerHTML = `
      <td style="font-weight: 700;">Chương ${q.chapter}</td>
      <td>
        <div class="table-q-text" title="${q.question}">${q.question}</div>
      </td>
      <td style="font-weight: 700; color: var(--color-success);">${q.answer}</td>
      <td>${sourceBadge}</td>
      <td style="text-align: center;">
        <div class="d-flex gap-2 justify-content-center">
          <button class="btn btn-secondary" style="padding: 6px 10px; font-size: 0.8rem;" onclick="editQuestion('${q.id}')">
            <i data-lucide="edit-3" style="width: 14px; height: 14px;"></i>
          </button>
          <button class="btn btn-danger" style="padding: 6px 10px; font-size: 0.8rem;" ${!isCustom ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="deleteQuestion('${q.id}')">
            <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  lucide.createIcons();
}

function deleteQuestion(qId) {
  if (!confirm('Bạn có chắc chắn muốn xóa câu hỏi tự soạn này khỏi ngân hàng câu hỏi?')) return;

  const idx = state.customQuestions.findIndex(q => q.id === qId);
  if (idx > -1) {
    state.customQuestions.splice(idx, 1);
    saveLocalStorage('qtm_custom_questions', state.customQuestions);
    mergeQuestions();
    renderManageTab();
  }
}

// ==========================================
// 10. MODAL FORM: THÊM / SỬA CÂU HỎI THỦ CÔNG
// ==========================================

function openAddManualModal() {
  document.getElementById('editor-modal-title').textContent = 'Thêm câu hỏi tự soạn thủ công';
  document.getElementById('question-editor-form').reset();
  document.getElementById('editor-q-id').value = '';
  
  // Mở modal overlay
  document.getElementById('modal-question-editor').classList.remove('hidden');
}

function editQuestion(qId) {
  const q = state.questions.find(item => item.id === qId);
  if (!q) return;

  document.getElementById('editor-modal-title').textContent = q.source === 'builtin' ? 'Xem / Sửa giải thích câu hỏi hệ thống' : 'Sửa câu hỏi tự soạn';
  
  document.getElementById('editor-q-id').value = q.id;
  document.getElementById('editor-q-chapter').value = q.chapter;
  document.getElementById('editor-q-text').value = q.question;
  document.getElementById('editor-q-optA').value = q.options[0];
  document.getElementById('editor-q-optB').value = q.options[1];
  document.getElementById('editor-q-optC').value = q.options[2];
  document.getElementById('editor-q-optD').value = q.options[3];
  document.getElementById('editor-q-answer').value = q.answer;
  document.getElementById('editor-q-explanation').value = q.explanation || '';

  // Nếu là câu hỏi hệ thống, khóa toàn bộ các trường nhập liệu ngoại trừ giải thích
  const isBuiltin = q.source === 'builtin';
  document.getElementById('editor-q-chapter').disabled = isBuiltin;
  document.getElementById('editor-q-text').disabled = isBuiltin;
  document.getElementById('editor-q-optA').disabled = isBuiltin;
  document.getElementById('editor-q-optB').disabled = isBuiltin;
  document.getElementById('editor-q-optC').disabled = isBuiltin;
  document.getElementById('editor-q-optD').disabled = isBuiltin;
  document.getElementById('editor-q-answer').disabled = isBuiltin;

  document.getElementById('modal-question-editor').classList.remove('hidden');
}

function closeEditorModal() {
  document.getElementById('modal-question-editor').classList.add('hidden');
}

function saveManualQuestion(e) {
  e.preventDefault();

  const qId = document.getElementById('editor-q-id').value;
  const chapterId = parseInt(document.getElementById('editor-q-chapter').value);
  const questionText = document.getElementById('editor-q-text').value.trim();
  const optA = document.getElementById('editor-q-optA').value.trim();
  const optB = document.getElementById('editor-q-optB').value.trim();
  const optC = document.getElementById('editor-q-optC').value.trim();
  const optD = document.getElementById('editor-q-optD').value.trim();
  const answer = document.getElementById('editor-q-answer').value;
  const explanation = document.getElementById('editor-q-explanation').value.trim();

  const chapterName = CHAPTERS.find(c => c.id === chapterId).name;

  if (qId) {
    // Sửa câu hỏi
    const builtinIdx = BUILTIN_QUESTIONS.findIndex(item => item.id === qId);
    
    if (builtinIdx > -1) {
      // Sửa câu hỏi hệ thống: Chỉ cho phép lưu giải thích cục bộ
      // Ta lưu thông tin đè lên custom questions bằng ID tương tự
      const customIdx = state.customQuestions.findIndex(item => item.id === qId);
      const updatedQ = {
        ...BUILTIN_QUESTIONS[builtinIdx],
        explanation: explanation,
        source: 'custom' // chuyển đổi lưu local
      };
      
      if (customIdx > -1) {
        state.customQuestions[customIdx] = updatedQ;
      } else {
        state.customQuestions.push(updatedQ);
      }
    } else {
      // Sửa câu hỏi custom
      const customIdx = state.customQuestions.findIndex(item => item.id === qId);
      if (customIdx > -1) {
        state.customQuestions[customIdx] = {
          id: qId,
          chapter: chapterId,
          chapterName: chapterName,
          question: questionText,
          options: [optA, optB, optC, optD],
          answer: answer,
          explanation: explanation
        };
      }
    }
  } else {
    // Thêm mới hoàn toàn
    const newQ = {
      id: `custom_${Date.now()}`,
      chapter: chapterId,
      chapterName: chapterName,
      question: questionText,
      options: [optA, optB, optC, optD],
      answer: answer,
      explanation: explanation
    };
    state.customQuestions.push(newQ);
  }

  saveLocalStorage('qtm_custom_questions', state.customQuestions);
  mergeQuestions();
  closeEditorModal();
  renderManageTab();
}

// ==========================================
// 11. CÁC HÀM TRỢ GIÚP (HELPER FUNCTIONS)
// ==========================================

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.viewExamHistory = viewExamHistory;
