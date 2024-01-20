const open_btns = document.querySelectorAll('button[data-modal]')
const close_btns = document.querySelectorAll('[data-close]')
const modal = document.querySelector('.modal')

open_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})


// slider

const slides = document.querySelectorAll('.offer__slide')
const next_btn = document.querySelector('.offer__slider-next')
const prev_btn = document.querySelector('.offer__slider-prev')
const current = document.querySelector("#current")


let slideIndex = 0

slideShow(slideIndex)

function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')



    if (slideIndex + 1 <= 9) {
        current.innerHTML = "0" + (slideIndex + 1);
    } else {
        current.innerHTML = slideIndex + 1;
    }

}

next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}


let prem_txt = document.querySelector("#prem_txt")
// let tabheader__item_active = document.querySelector(".tabheader__item_active")
let fit_txt = document.querySelector("#fit_txt")
let post_txt = document.querySelector("#post_txt")
let bal_txt = document.querySelector("#bal_txt")
let fit = document.querySelector("#fit")
let premier = document.querySelector("#premier")
let post_menu = document.querySelector("#post_menu")
let balance = document.querySelector("#balance")
let tabcontent__descr = document.querySelector(".tabcontent__descr")
const vrst = document.querySelectorAll('[data-various]');
const tabcontent = document.querySelectorAll('[data-tabcontents]');
const tabimg = document.querySelectorAll('[data-tabimg]');
let main_tabcontents = document.querySelectorAll(".tabcontent")

vrst.forEach((btn, index) => {
    btn.onclick = () => {
        vrst.forEach(b => b.classList.remove("tabheader__item_active"));
        btn.classList.add("tabheader__item_active");

        tabcontent.forEach(tab => tab.classList.remove("descr_actv"));
        tabcontent[index].classList.add("descr_actv");

        main_tabcontents.forEach(img => img.classList.remove("show"));
        main_tabcontents[index].classList.add("show");

        // main_tabcontents.forEach(tab => tab.classList.remove("show").classList.add("hide"));
        // main_tabcontents[index].classList.add("show");
    };
});




const gender_btns = document.querySelectorAll('[data-gender]')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const actions = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('#result')

const user_data = {
    gender: "woman"
}

gender_btns.forEach(btnn => {
    btnn.onclick = () => {
        gender_btns.forEach(btnn =>

            btnn.classList.remove("calculating__choose-item_active")) //?
        btnn.classList.add("calculating__choose-item_active")

        const g = btnn.dataset.gender// !?
        user_data['gender'] = g // !?

    }
})


inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
    // user id
})

// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).
let prev = 1;





actions.forEach((div, idx) => {
    div.onclick = () => {
        actions[prev].classList.remove("calculating__choose-item_active");
        div.classList.add("calculating__choose-item_active");
        prev = idx;

        const cft = div.dataset.cft;
        console.log(cft);

        if (user_data.gender === "woman") {
            console.log(user_data.weight)
            result = Math.round((655.1 + (9.563 * user_data.weight) + (1.85 * user_data.height) - (4.676 * user_data.age)) * cft) ;

            result_view.innerHTML = result;
            console.log(result);
        } else {
            result = Math.round((66.5 + (13.75 * user_data.weight) + (5.003 * user_data.height) - (6.775 * user_dataage)) * cft); 

            result_view.innerHTML = result;
            console.log(result);
        }
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#e44d26', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#e74c3c'];
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `${Math.random() * 5}s`;
      confettiContainer.appendChild(confetti);
    }
  });
  


let seconds = 60; 

const secondsElement = document.querySelector('#seconds');
let confettiContainer = document.querySelector('#confettiContainer')

function countdown() {
    seconds--;
    if (seconds < 0) {
        clearInterval(timerInterval);
        secondsElement.innerHTML = '0'; 
        return;
    }else if(seconds == 0){

        confettiContainer.style.display = "block"
    }

    secondsElement.innerHTML = seconds;
}

countdown(); 

const timerInterval = setInterval(countdown, 1000);

