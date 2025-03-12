document.addEventListener('DOMContentLoaded', () => {
    const htmlCode = sessionStorage.getItem('htmlCode');
    const cssCode = sessionStorage.getItem('cssCode');
    const jsCode = sessionStorage.getItem('jsCode');

    if (htmlCode) {
        document.getElementById('code-html').textContent = htmlCode;
    }
    if (cssCode) {
        document.getElementById('code-css').textContent = cssCode;
    }
    if (jsCode) {
        document.getElementById('code-js').textContent = jsCode;
    }

    sessionStorage.clear();
});
