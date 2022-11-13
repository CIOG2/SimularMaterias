const parentReady = (clases, id) => {
    const classSelet = clases[id - 1];
    
    if (classSelet.parent.length > 0) {
        const parent = classSelet.parent;
        const parentReady = parent.map((item) => {
            return clases[item - 1].estatus;
        });
        return parentReady.every((item) => item);
    }

    return true;
};

export default parentReady;