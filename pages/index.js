const sliderLine = document.querySelector('.citation__slider');
const prevBtn = document.querySelector('.citation__button-left');
const nextBtn = document.querySelector('.citation__button-right');
const dots = document.querySelectorAll('.citation__dots_non-active');
const sliderText = document.querySelectorAll('.citation__text');
const sliderAuthor = document.querySelectorAll('.citation__author');

let position = 0;
let dotIndex = 0;

//Функции
//Функции выпадающего и бургер меню
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("header__dropdown_active");
    document.getElementById("arrow").classList.toggle("header__link_arrow_active");
}

function burgerHandle(){
    let x = document.getElementById("nav");
    if(x.style.display === "flex"){
        x.style.display = "none";
    }else{
        x.style.display = "flex";
    }
}

//Функции переключения стрелок слайдера

const nextSlide = () => {
    if(position < (dots.length - 1) * 260){
        position += 260;
        dotIndex++
    }else{
        position = 0;
        dotIndex = 0;
        
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

const prevSlide = () => {
    if(position > 0){
        position -= 260;
        dotIndex--
    }else{
        position = (dots.length - 1) * 260;
        dotIndex = (dots.length - 1);
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

//Индикаторы и стрелки

const thisSlide = (index) => {
    for(let dot of dots){
        dot.classList.remove('citation__dots_active');
        prevBtn.classList.remove("citation__button_none");
    }
    dots[index].classList.add('citation__dots_active');
    if(index === 0){
        prevBtn.classList.add("citation__button_none");
    }else if(index === 2){
        nextBtn.classList.add("citation__button_none");
    }else{
        prevBtn.classList.remove("citation__button_none");
        nextBtn.classList.remove("citation__button_none");
    }
}

//слушатели

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 260 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    });
});

//Api

let request = new XMLHttpRequest();
request.open('GET', 'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    let data = JSON.parse(request.response);
    for(let i = 0; i < data.length; i++){
        if(data[i].price < 5){
            //console.log(data[i].name + data[i].price);
            //console.log(i);
            let arr = data[i];
            //console.log(arr);
            sliderText.forEach((n) => n.textContent = arr.name);
            sliderAuthor.forEach((n) => n.textContent = arr.price);
        }
    }
  } else {
    console.log(request.status + "Ошибка")
  }
};

request.send();