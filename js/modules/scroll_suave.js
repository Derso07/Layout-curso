export default function initScrollSuave(){
    
    const lista = document.querySelectorAll('[data-scroll] a[href^="#"');

    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block:'start',
        })
    }

    lista.forEach((link)=>{
        link.addEventListener('click',scrollToSection);
    })
}