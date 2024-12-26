// Fungsi untuk menampilkan berita di halaman utama
function displayNews(news) {
    const newsContainer = document.querySelector('#berita .row');
    if (newsContainer) {
        newsContainer.innerHTML = news.map(item => `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${item.image}" class="card-img-top" alt="${item.title}">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.content.substring(0, 100)}...</p>
                        <a href="#" class="btn btn-primary">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Fungsi untuk mendapatkan berita dari localStorage
function getNews() {
    return JSON.parse(localStorage.getItem('news') || '[]');
}

// Load berita saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    const news = getNews();
    displayNews(news);
});