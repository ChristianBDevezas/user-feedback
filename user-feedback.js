const panel = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.ratings-container');
const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
let image;
let rating = "";

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('image')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        rating = e.target.nextElementSibling.innerHTML;
        image = e.target.src;
    }
    if(e.target.classList.contains('text')) {
        removeActive();
        e.target.parentNode.classList.add('active');
        rating = e.target.innerHTML;
        image = e.target.previousElementSibling.src;
    }
    if(e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        rating = e.target.children[1].innerHTML;
        image = e.target.children[0].src;
    }
});

sendBtn.addEventListener('click', () => {
    if(rating == "") {
        alert('Choose one of the 3 options and click on "Send Review" button!');
    }
    else {
        panel.innerHTML = `
            <div class = "message">
                <i class="fas fa-heart"></i>
                <strong>Thank You!</strong>
            </div>
            <div>
                <img src="${image}">
            </div>
            <br>
            <strong>Feedback: ${rating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
            <button class="btn" onclick="location.reload()">Reload Page</button>
        `
    }
});

function removeActive() {
    // for(let i = 0; i < ratings.length; i++) {
    //     ratings[i].classList.remove('active');
    // }
    ratings.forEach(item => item.classList.remove('active'));
}