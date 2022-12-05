const sliderLine = document.querySelector('.citation__slider');
const prevBtn = document.querySelector('.citation__button-left');
const nextBtn = document.querySelector('.citation__button-right');
const dots = document.querySelectorAll('.citation__dots_non-active');

let position = 0;
let dotIndex = 0;

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

const nextSlide = () => {
    if(position < (dots.length - 1) * 320){
        position += 320;
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
        position -= 320;
        dotIndex--
    }else{
        position = (dots.length - 1) * 320;
        dotIndex = (dots.length -1);
    }
    sliderLine.style.left = -position + 'px';
    thisSlide(dotIndex);
}

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

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        position = 320 * index;
        sliderLine.style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
    });
});
