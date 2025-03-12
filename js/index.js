const doc = document;

doc.addEventListener('DOMContentLoaded', () => {
    doc.getElementById('title').addEventListener('click', () => {
        window.location.href = 'WebElements';
    });

    doc.getElementById('buttons').addEventListener('click', () => {
        window.location.href = 'WebElements/buttons.html';
    });
});