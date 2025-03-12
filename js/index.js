const doc = document;

doc.addEventListener('DOMContentLoaded', () => {
    doc.getElementById('title').addEventListener('click', () => {
        window.location.href = '/index.html';
    });

    doc.getElementById('buttons').addEventListener('click', () => {
        window.location.href = '/pages/buttons.html';
    });
});