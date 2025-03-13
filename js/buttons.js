function set(buttonId, codeData) {
    const btn = document.getElementById(buttonId);
    if (!btn) return;
    btn.addEventListener('click', () => {
        sessionStorage.setItem('htmlCode', codeData.html || '');
        sessionStorage.setItem('cssCode', codeData.css || '');
        sessionStorage.setItem('jsCode', codeData.js || '');
        window.location.pathname = '/webelements/code';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    set('button-1', {
        html: `<button id="clickme">Click Me!</button>`,
        css: `
#clickme {
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 1000;
    border: 5px solid black;
    border-radius: 15px;
    background-color: #000000;
    color: white;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease, border 0.3s ease;
}

#clickme:hover {
    background-color: white;
    color: black;
    border: 5px solid black;
    cursor: pointer;
}

#clickme:active {
    transform: scale(0.9);
}`,
        js: ""
    });

    set('button-2', {
        html: `<button id="hoverme">Hover Me!</button>`,
        css: `
#hoverme {
    width: 200px;
    height: 50px;
    font-size: 20px;
    font-weight: 1000;
    border: 5px solid black;
    border-radius: 15px;
    background-color: #000000;
    color: white;
    transition: box-shadow 0.3s ease;
}

#hoverme:hover {
    box-shadow: 0 0 20px black;
    cursor: pointer;
}`,
        js: ""
    });
});
