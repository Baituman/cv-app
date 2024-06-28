//Generate a view from a json file data

let datos = {
    estudios: [],
    trabajos: [],
    cursos: [],
    comPersonales: [],
    comDigitales: [],
    idiomas: []
}

function init() {
    fetch('datos.json')
    .then(response => response.json())
    .then(json => {
        Object.keys(datos).forEach(key => {
            datos[key] = json[key];
        });
        view();
    });
}

function view() {
    Object.keys(datos).forEach(key => {
        const wrapper = document.getElementById(`${key}-wrapper`);
        datos[key].forEach(item => {
            wrapper.appendChild(generateView(key, item));
        });
    });
}

function generateView(type, item) {
    let element;
    switch(type) {
        case 'estudios':
            element = viewEduc(item);
            break;
        case 'trabajos':
            element = viewTrabajo(item);
            break;
        case 'idiomas':
            element = viewIdioma(item);
            break;
        case 'cursos':
            element = viewCurso(item);
            break;
        case 'comPersonales':
            element = viewComPer(item);
            break;
        case 'comDigitales':
            element = viewcomDig(item);
            break;
    }
    return element;
}

// Las funciones de vista pueden permanecer sin cambios, solo asegúrate de que los nombres de las propiedades coincidan con los de los objetos en el JSON.

init();
