const activeDisableClass = (clases) => {
    const aprovedClass = clases.filter(clase => clase.estatus).length;


    if (aprovedClass >= 3 && aprovedClass < 6)
        activeClass(clases, 2);
    else if (aprovedClass >= 6 && aprovedClass < 9) 
        activeClass(clases, 3);
    else if (aprovedClass >= 14 && aprovedClass < 17)
        activeClass(clases, 4);
    else if (aprovedClass >= 17 && aprovedClass < 21)
        activeClass(clases, 5);
    else if (aprovedClass >= 21 && aprovedClass < 25)
        activeClass(clases, 6);
    else if (aprovedClass >= 25)
        activeClass(clases, 7);
    
    
    
    if (aprovedClass < 3)
        disableClass(clases, 2);
    else if (aprovedClass < 6)
        disableClass(clases, 3);
    else if (aprovedClass < 9)
        disableClass(clases, 4);
    else if (aprovedClass < 14)
        disableClass(clases, 5);
    else if (aprovedClass < 17)
        disableClass(clases, 6);
    else if (aprovedClass < 21)
        disableClass(clases, 7);       
}


const activeClass = (clases, n) => {
    const moreClass = clases.filter(clase => clase.partial === n && clase.parent.length === 0);

    moreClass.forEach((clase) => {
        const nodo = document.getElementById(clase.id);
        nodo.classList.remove('class__disabled');
    });

}



const disableClass = (clases, n) => {
    const moreClass = clases.filter(clase => clase.partial === n && clase.parent.length === 0);

    moreClass.forEach((clase) => {
        const nodo = document.getElementById(clase.id);
        nodo.classList.add('class__disabled');
    });
}

export default activeDisableClass;