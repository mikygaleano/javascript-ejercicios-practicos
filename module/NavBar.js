
export default function NavBar () {

    const menuDesktop = document.querySelector('.header');

    let listaMenu = ['Background'];
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');


    listaMenu.map(element => {
        let li = document.createElement('li');
        li.className = 'itemMenu'

        li.innerText = element;
        ul.appendChild(li); 
    });

    nav.appendChild(ul)

    menuDesktop.appendChild(nav);


}