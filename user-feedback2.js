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

function clearPanel() {
    panel.innerHTML = ``;
}

sendBtn.addEventListener('click', () => {
    if(rating == "") {
        alert('Choose one of the 3 options and click on "Send Review" button!');
    }
    else {
        clearPanel();

        // create thankfull message with heart icon
        const message = document.createElement("div");
        message.classList.add("message");

        const icon = document.createElement("i");
        icon.classList.add("fas");
        icon.classList.add("fa-heart");

        const strong1 = document.createElement("strong");
        strong1.innerText = "Thank You!";

        message.appendChild(icon);
        message.appendChild(strong1);
        panel.appendChild(message);

        // create feedback image
        const imgFeedback = document.createElement("div");
        imgFeedback.classList.add("img-feedback");

        const img = document.createElement("img");
        img.src = `${image}`;

        imgFeedback.appendChild(img);
        panel.appendChild(imgFeedback);

        // create feedback message with user choice
        const strong2 = document.createElement("strong");
        strong2.innerText = `Feedback: ${rating}`;

        const paragraph = document.createElement("p");
        paragraph.innerText = `We'll use your feedback to improve our customer support.`;

        panel.appendChild(strong2);
        panel.appendChild(paragraph);

        // create button to reload page
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = "Reload Page";

        panel.appendChild(button);

        button.addEventListener(("click"), () => location.reload());
    }
});

function removeActive() {
    ratings.forEach(item => item.classList.remove('active'));
}