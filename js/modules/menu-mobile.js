export default function initMenu(){

    const menuBotao = document.querySelector('[data-menu="botao"');
    const menuLista = document.querySelector('[data-menu-lista]');
    const menu = document.querySelector('[data-sroll]');

    function abrirMenu(e){
        menuBotao.classList.toggle('ativar');
        menuLista.classList.toggle('ativar');
    }

    function fecharMenu(){
        menuLista.classList.remove('ativar');
    }
 
    menuBotao.addEventListener('click', abrirMenu);
    menuLista.addEventListener('click',fecharMenu)

}