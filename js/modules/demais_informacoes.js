export default function initDemaisInformacoes(){
    
    const Demaisinfo = document.querySelector('[data-info]');
    
    function initDemais(){
        if(window.scrollY > 900){
            Demaisinfo.classList.add('active');
        }
    }

    window.addEventListener('scroll', initDemais);
}