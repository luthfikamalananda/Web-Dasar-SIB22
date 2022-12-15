const firstName = prompt("Masukkan nama Anda");

const namaContainer = document.getElementsByClassName('nama');
const notifContainer = document.getElementsByClassName('notifikasi')

document.querySelector('#nama-nav').innerHTML = firstName;
let likeButton = document.querySelectorAll(".like");


for (let i = 0; i < likeButton.length; i++) {
    // console.log(likeButton[i]);
    if (likeButton[i].classList.contains('welcome')) {
        likeButton[i].addEventListener('click', function (event) {
            notifContainer[i].style.visibility = 'visible';
            document.querySelector('#welcome-counter').innerText++;
            namaContainer[i].innerHTML = firstName;
        });
    } 
    
    if (likeButton[i].classList.contains('hobi')) {
        likeButton[i].addEventListener('click', function (event) {
            notifContainer[1].style.visibility = 'visible';
            document.querySelector('#hobi-counter').innerText++;
            namaContainer[i].innerHTML = firstName;
        });
    } 
}

