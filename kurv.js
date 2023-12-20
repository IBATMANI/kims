let clickCount = 0;

document.getElementById('banner2').addEventListener('click', function() {
    clickCount++;
    document.getElementById('counter').textContent = clickCount;
});