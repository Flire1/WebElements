const doc = document;

doc.addEventListener('DOMContentLoaded', () => {
    doc.getElementById('title').addEventListener('click', () => {
        window.location.pathname = '/webelements/';
    });

    doc.getElementById('buttons').addEventListener('click', () => {
        window.location.pathname = '/webelements/buttons';
    });
});