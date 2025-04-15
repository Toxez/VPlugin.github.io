function downloadPlugin(url, progressBarId) {
    const progressBar = document.getElementById(progressBarId);
    progressBar.classList.add('active');
    setTimeout(() => {
        const link = document.createElement('a');
        link.href = url;
        link.download = url.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 1500);
}

function showDescription(pluginName) {
    const modal = document.getElementById('descriptionModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescriptionItems = document.querySelectorAll('#modalDescription li');
    const lang = localStorage.getItem('language') || 'ru';
    
    modalTitle.textContent = modalTitle.getAttribute(`data-${lang}-${pluginName.toLowerCase()}`);
    
    modalDescriptionItems.forEach(item => {
        if (item.classList.contains(pluginName.toLowerCase())) {
            item.style.display = 'list-item';
            item.textContent = item.getAttribute(`data-${lang}`);
        } else {
            item.style.display = 'none';
        }
    });
    
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('descriptionModal').style.display = 'none';
}

document.getElementById('descriptionModal').addEventListener('click', function(event) {
    if (event.target === this) {
        closeModal();
    }
});