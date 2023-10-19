const city = 1204;
const date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
const now = yyyy + '-' + dd;

const jadwalApi = 'https://api.myquran.com/v1/sholat/jadwal/$';