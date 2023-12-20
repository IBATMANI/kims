let openPopupButton = document.getElementById('openPopupButton');
let popup = document.getElementById('popup');
let closePopupButton = document.getElementById('closePopupButton');

openPopupButton.addEventListener('click', function() {
    popup.style.display = 'block';
});

closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none';
});