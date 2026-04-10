// Academic Stress Tester Logic

document.addEventListener('DOMContentLoaded', () => {
    const improveBtn = document.getElementById('improve-btn');
    const exportBtn = document.getElementById('export-btn');
    const modal = document.getElementById('improvement-modal');
    const closeModal = document.getElementById('close-modal');

    improveBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        // Add subtle animation or sound effect if desired
        console.log('Applying stress-test optimizations...');
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });

    exportBtn.addEventListener('click', () => {
        alert('Compiling Final Reviewer Response for Journal Submission...');
        // In a real app, this could generate a PDF or a text file
    });
});
