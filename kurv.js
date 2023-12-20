
let clickCount = 0;

function handleClick() {
    clickCount++;
    document.getElementById('counter').textContent = clickCount;
}

document.getElementById('banner2').addEventListener('click', handleClick);
document.getElementById('banner3').addEventListener('click', handleClick);
document.getElementById('banner4').addEventListener('click', handleClick);
