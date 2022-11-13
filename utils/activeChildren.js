import enableChildren from "./enableChildren.js";

const activeChildren = (clases, id) => {
    const classSelet = clases[id - 1];
    if (classSelet.children.length > 0) {
        const children = classSelet.children;
        children.forEach((child) => {
            const item = clases[child - 1];
            const nodo = document.getElementById(item.id);


            const parentsReady = item.parent.map((item) => {
                return clases[item - 1].estatus;
            });
            
            const everyParentsReady = parentsReady.every(item => item);
            
            if(everyParentsReady)
            nodo.classList.remove('class__disabled');
            else{
                nodo.classList.remove('class__selected');
                nodo.estatus = false;
                nodo.classList.add('class__disabled');
                enableChildren(clases, item.id);
            }
        });
    }
}

export default activeChildren;