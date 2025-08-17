document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const postItems = document.querySelectorAll('.post-item');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // 활성 버튼 업데이트
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 포스트 필터링
            postItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});