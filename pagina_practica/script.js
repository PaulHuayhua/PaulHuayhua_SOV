function changeBackgroundColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

document.addEventListener('DOMContentLoaded', function() {
    var changeColorBtn = document.getElementById('change-color-btn');

    changeColorBtn.addEventListener('click', function() {
        changeBackgroundColor();
    });
});
