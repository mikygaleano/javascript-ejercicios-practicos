
export default function NavBar () {

    const menuDesktop = document.querySelector('.header');

    let listaMenu = [
        {
            pestaña: 'Background',
            href: '#background'
        },
        {
            pestaña: 'Counter',
            href: '#counter'
        }, {
            pestaña: 'Carrusel',
            href: '#carrusel'
        }
    ];
    let nav = document.createElement('nav');
    let ul = document.createElement('ul');

    ul.className = 'ulMenu';


    listaMenu.map(element => {
        let li = document.createElement('li');
        let a = document.createElement('a')
        

        a.innerText = element.pestaña;
        a.setAttribute('href', element.href);

        li.appendChild(a);
        li.className = 'itemMenu'
        ul.appendChild(li); 
    });

    nav.appendChild(ul)

    menuDesktop.appendChild(nav);


}