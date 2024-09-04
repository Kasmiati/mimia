// Menambahkan efek interaktif pada elemen .wisata-item
document.addEventListener('DOMContentLoaded', function() {
    var wisataItems = document.querySelectorAll('.wisata-item');

    wisataItems.forEach(function(item) {
        item.addEventListener('click', function() {
            alert('Anda memilih ' + item.querySelector('h2').textContent + ' sebagai destinasi!');
        });
    });
});
