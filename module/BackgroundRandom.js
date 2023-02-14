
export default function BackgroundRandom () {
    function generarLetra () {
        const letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"]
        const numero = (Math.random()*15).toFixed(0); // toFixed se le asigna por parametro la cantidad de numeros despues de la coma
        return letras[numero]; // retorna una posision aleatoria del array letras
    }
    
    function colorHEX(){
        let color = "";
        for(let i=0;i<6;i++){
            color = color + generarLetra(); // itera la cadena de caracteres con la funcion generarLetra 6 veces
        }
        return "#" + color; // retorna el numero hexadecimal
    }
    
    const btnColor = document.querySelector('.btn-background');
    const sectionBackground = document.querySelector('.section-background');
    
    btnColor.addEventListener('click', () => sectionBackground.style.backgroundColor = colorHEX())
    
}