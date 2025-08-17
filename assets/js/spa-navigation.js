// assets/js/spa-navigation.js

/*
class SPANavigation {
  constructor() {
    this.init();
  }
  
  init() {
    // 모든 내부 링크에 SPA 처리
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.hostname === window.location.hostname) {
        e.preventDefault();
        this.loadPage(link.href);
      }
    });
    
    // 브라우저 뒤로가기/앞으로가기 처리
    window.addEventListener('popstate', (e) => {
      if (e.state && e.state.url) {
        this.loadPage(e.state.url, false);
      }
    });
  }
  
  async loadPage(url, pushState = true) {
    try {
      // 로딩 표시
      this.showLoading();
      
      // 새 페이지 내용 가져오기
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(html, 'text/html');
      
      // 메인 콘텐츠 영역만 교체
      const mainContent = document.querySelector('main');
      const newContent = newDoc.querySelector('main');
      
      if (newContent) {
        mainContent.innerHTML = newContent.innerHTML;
      }
      
      // 페이지 제목 업데이트
      document.title = newDoc.title;
      
      // URL 업데이트
      if (pushState) {
        history.pushState({url: url}, '', url);
      }
      
      // 로딩 숨기기
      this.hideLoading();
      
    } catch (error) {
      console.error('페이지 로드 실패:', error);
      // 실패시 기본 페이지 이동
      window.location.href = url;
    }
  }
  
  showLoading() {
    const loader = document.querySelector('.page-loader') || this.createLoader();
    loader.style.display = 'block';
  }
  
  hideLoading() {
    const loader = document.querySelector('.page-loader');
    if (loader) loader.style.display = 'none';
  }
  
  createLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="loader-content">
        <div class="spinner"></div>
        <p>로딩 중...</p>
      </div>
    `;
    document.body.appendChild(loader);
    return loader;
  }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
  new SPANavigation();
}); */