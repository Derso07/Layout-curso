export default function initPublico(){

    const publico = document.querySelector('[data-publico]');

    function initPublico(){
        if(window.scrollY > 200){
            publico.classList.add('active');
        }
    }

    window.addEventListener('scroll', initPublico);
}