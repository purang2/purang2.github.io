let selectedItems = [];

function toggleCheck(checkbox) {
    const item = checkbox.closest('.post-item');
    const index = Array.from(document.querySelectorAll('.post-item')).indexOf(item);
    
    if (checkbox.classList.contains('checked')) {
        checkbox.classList.remove('checked');
        selectedItems = selectedItems.filter(i => i !== index);
        item.classList.remove('selected');
    } else {
        checkbox.classList.add('checked');
        selectedItems.push(index);
        item.classList.add('selected');
    }
    
    updateBulkActions();
}

function updateBulkActions() {
    const bulkActions = document.getElementById('bulkActions');
    const selectedCount = document.getElementById('selectedCount');
    
    if (selectedItems.length > 0) {
        bulkActions.classList.add('visible');
        selectedCount.textContent = selectedItems.length;
    } else {
        bulkActions.classList.remove('visible');
    }
}

// 클릭으로 읽음 표시
document.querySelectorAll('.post-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.classList.contains('checkbox') || e.target.classList.contains('action-btn')) {
            return;
        }
        
        const title = this.querySelector('.post-title');
        title.classList.remove('unread');
    });
});