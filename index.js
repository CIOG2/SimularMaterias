import data from './data/data.js';
import parentReady from './utils/parentReady.js';
import activeChildren from './utils/activeChildren.js';
import activeDisableClass from './utils/activeDisableClass.js';

const app = document.getElementById('app');


const renderClases = (clases) => {
   
    const contenido = clases.map((clase) => {

        const container = document.createElement('div');
        container.classList.add('class');
        container.classList.add('partial' + clase.partial);
        container.id = clase.id;
        container.addEventListener('click', () => {
            const nodo = document.getElementById(clase.id);

            if (parentReady(clases, clase.id) && !nodo.classList.contains('class__disabled')) {
 
                if (!clase.estatus )
                    container.classList.add('class__selected');
                else
                    container.classList.remove('class__selected');

                clase.estatus = !clase.estatus;                    
                activeChildren(clases, clase.id);
                activeDisableClass(clases);
            }
        });


        if (clase.parent.length > 0 || clase.partial > 1) {
            container.classList.add('class__disabled');
        }

        const title = document.createElement('h3');
        title.classList.add('class__name');
        title.textContent = clase.name;

        container.append(title);
    
        return container;
    });


    app.append(...contenido);
}


renderClases(data);