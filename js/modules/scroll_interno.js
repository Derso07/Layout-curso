export default function initScrollInterno(){

    const BotaoTopo = window.addEventListener('scroll', function(event){
       
       if(window.scrollY > 1900){
           document.querySelector('[data-scroll-interno').classList.add('btn');
       }else{
           document.querySelector('[data-scroll-interno').classList.remove('btn');
       }
    })
   
    const retornoTopo = document.querySelectorAll('[data-scroll-interno] a[href^="#"]');

    function topo(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const header = document.querySelector(href);

        header.scrollIntoView({
            behavior: 'smooth',
            block: 'start',

        })
    }
    

    retornoTopo.forEach((link)=>{
        link.addEventListener('click',topo);
    })

}