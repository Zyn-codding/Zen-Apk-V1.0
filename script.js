// semua fungsi login + validasi bug + modal digabung di sini
const loginBox = document.getElementById('loginBox');
const mainBox = document.getElementById('mainBox');
const roleTxt = document.getElementById('roleTxt');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalMsg = document.getElementById('modalMsg');
const modalOk = document.getElementById('modalOk');

// akun valid
const accounts = [
  { user: 'DEBB', pass: 'DEBB001', role: 'Role : Developers / Admin☠️⚡' },
  { user: 'Rakha', pass: 'Rakha123', role: 'Role : Members' }
];

function showModal(title, msg) {
  modalTitle.textContent = title;
  modalMsg.textContent = msg;
  modal.classList.add('show');
}
modalOk.addEventListener('click', () => modal.classList.remove('show'));

// LOGIN
document.getElementById('loginBtn').addEventListener('click', () => {
  const u = document.getElementById('username').value.trim();
  const p = document.getElementById('password').value;
  const found = accounts.find(a => a.user === u && a.pass === p);
  if (!found) {
    window.location.href = 'https://google.com';
    return;
  }
  loginBox.classList.add('hidden');
  mainBox.classList.remove('hidden');
  roleTxt.textContent = found.role;
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
});

// ENTER key login
document.getElementById('password').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('loginBtn').click();
});

// SEND BUG
document.getElementById('sendBtn').addEventListener('click', () => {
  const target = document.getElementById('targetInput').value.trim();
  const menu = document.getElementById('menuBug').value;
  if (!target) {
    showModal('[ ISI DULU TARGET LUU ]', 'Tolong isi target kamu terlebih dahulu.');
    return;
  }
  if (!menu) {
    showModal('[ ISI MENU BUG NYA ASTAGAAA ]', 'Pilih menu bug terlebih dahulu.');
    return;
  }
  showModal('✅ sucecs FC CLICK NO TARGET 🔥', `Target: ${target} — Menu: ${menu}`);
});

// LOGOUT
document.getElementById('logoutBtn').addEventListener('click', () => {
  mainBox.classList.add('hidden');
  loginBox.classList.remove('hidden');
  roleTxt.textContent = 'Role : Members';
});

// DEVELOPER BTN
document.getElementById('devBtn').addEventListener('click', () => {
  showModal('Developer', 'CREATED BY DEBB — ZEN APK V1.0');
});
