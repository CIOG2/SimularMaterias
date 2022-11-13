const enableChildren = (clases, id) => {
    const classSelet = clases[id - 1];

    if (classSelet.children.length > 0) {
        const children = classSelet.children;
        children.forEach((child) => {
            const item = clases[child - 1];
            item.estatus = false;
            const nodo = document.getElementById(item.id);
            nodo.classList.remove('class__selected');
            nodo.classList.add('class__disabled');
            enableChildren(clases, item.id);
        });
    }
}

export default enableChildren;