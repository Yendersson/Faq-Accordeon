const faq_slide = document.querySelectorAll('.container__faq-icon');
const faq_answer = document.querySelectorAll('.faq__question');
const faq_text = document.querySelectorAll('.faq-text');

faq_slide.forEach((faq, index) => {
    faq.addEventListener('click', (e)=>{
        e.currentTarget.classList.toggle('rotate-icon');
        faq_answer[index].classList.toggle('active');
        faq_text[index].classList.toggle('text-bold');
    })
});