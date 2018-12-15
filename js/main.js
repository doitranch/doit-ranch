function transitionStart() {
    document.getElementById('button').className = 'button Click';
    setTimeout(newUrl(), 1000);
}

function newUrl() {
    window.open('slideShow.html', '_self')
}