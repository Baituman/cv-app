//Generate a view from a json file data


let estudios = {
    curso: "EGB",
    centro: "El Pilar",
    lugar: "Bilbao",
    fecha: 1992,
    database: []
}

let trabajos = {
    cargo: "jefe",
    empresa: "bar",
    lugar : "Bilbao",
    desde: 1992,
    hasta: 1993,
    descripcion: "Una breve descripcion",
    database: []
}

let cursos = {
    curso: "HTML5",
    centro: "ipartek",
    fecha: 2022,
    database: []
}

let comPersonales = {
    habilidad: "Liderazgo",
    database: []
}

let comDigitales = {
    ambito: "Lenguajes de programacion",
    competencia: "HTML5, CSS3, Js, PHP",
    nivel: 2,
    database: []
}


let idiomas = {
    idioma: "ingles",
    nivel: 2,
    database: []
}

function init(){
    
    // leemos los datos, hay que tener en cuenta que esta llamada, 
    // fetch, es asyncrona, eso quiere decir que la ejecución continua sin esperar respuesta
    // por lo que si llamaramos a la vista no veríamos nada ya que los datos no se habrían leído.
    // Por este motivo, la llamada a la vista está dentro de la función de abajo, esta función
    // se llama callback, y se va a ejecutar cuando la lectura haya terminado.
    fetch('../data/datos.json')
    .then((response) => response.json())
    .then((json) => {
        estudios.database = json.estudios;
        trabajos.database = json.trabajos;
        idiomas.database = json.idiomas;
        cursos.database = json.cursos;
        comPersonales.database = json.comPersonales;
        comDigitales.database = json.comDigitales
        view();
    });
}


// La vista va a renderizarse a partir del modelo y SOLO del modelo 
function view(){

    estudios.database.forEach(estudio => {
        document.getElementById("formacion-wrapper").append(viewEduc(estudio));
    });

    trabajos.database.forEach(trabajo => {
        document.getElementById("experiencia-wrapper").append(viewTrabajo(trabajo));
    });

    idiomas.database.forEach(idioma => {
        document.getElementById("idiomas-wrapper").append(viewIdioma(idioma));
    });

    cursos.database.forEach(curso => {
        document.getElementById("cursos-wrapper").append(viewCurso(curso));
    });

    comPersonales.database.forEach(competencia => {
        document.getElementById("comPersonales-wrapper").append(viewComPer(competencia));
    });

    comDigitales.database.forEach(competencia => {
        document.getElementById("comDigitales-wrapper").append(viewcomDig(competencia));
    });


}


// Vista educacion

function viewEduc(estudio){

    

    let formacion = document.createElement("div");
    formacion.className = "formacion";

    let titleEduc = document.createElement("h2");
    titleEduc.className = "educ-title";
    titleEduc.innerText = estudio.curso;

    let datosFormacion = document.createElement("p");
    datosFormacion.className = "educ-data";
    datosFormacion.innerHTML = 
            estudio.centro + ", " + estudio.lugar +"<br />"
            + estudio.fecha;

    formacion.append(titleEduc);
    formacion.append(datosFormacion);
    
    return formacion;


}

function viewTrabajo(trabajo){

    

    let experiencia = document.createElement("div");
    experiencia.className = "experiencia";

    let titleExp = document.createElement("h2");
    titleExp.className = "exp-title";
    titleExp.innerText = trabajo.cargo;

    let datosExperiencia = document.createElement("h3");
    datosExperiencia.className = "exp-data";
    datosExperiencia.innerHTML = 
            trabajo.empresa + ", " + trabajo.lugar;

    let fechaExperiencia = document.createElement("p");
    fechaExperiencia.className = "exp-date";
    fechaExperiencia.innerHTML = 
            trabajo.desde + " / " + trabajo.hasta + "<br />"
            + (trabajo.descripcion && trabajo.descripcion.length > 0 ? trabajo.descripcion : "");

    experiencia.append(titleExp);
    experiencia.append(datosExperiencia);
    experiencia.append(fechaExperiencia);
    
    return experiencia;


}

function viewIdioma(idioma){

    

    let lenguaje = document.createElement("div");
    lenguaje.className = "idioma";

    let titleIdioma = document.createElement("h2");
    titleIdioma.className = "idioma-title";
    titleIdioma.innerText = idioma.idioma;

    let levelBar = document.createElement("div");
    if(idioma.nivel == "Nativo" ){
        levelBar.style.fontSize= "1.5em"
        levelBar.innerHTML = idioma.nivel;
    }else {
        levelBar.className = "levelBar-idioma";
        levelBar.style.width =((100 / 5) * idioma.nivel)+"%";
    }
    
                                      

    lenguaje.append(titleIdioma);
    lenguaje.append(levelBar);
    
    return lenguaje;


}

function viewCurso(curso){

    

    let formacion = document.createElement("div");
    formacion.className = "cursos";

    let titleCurso = document.createElement("h2");
    titleCurso.className = "curso-title";
    titleCurso.innerText = curso.curso;

    let datosCurso = document.createElement("p");
    datosCurso.className = "curso-data";
    datosCurso.innerHTML = 
            curso.centro + ", " +
            curso.fecha;

    formacion.append(titleCurso);
    formacion.append(datosCurso);
    
    return formacion;


}

function viewComPer(competencia){

    

    let comPersonal = document.createElement("div");
    comPersonal.className = "comPersonal";

    let titleComPer = document.createElement("h2");
    titleComPer.className = "comPer-title";
    titleComPer.innerText = competencia.habilidad;

    
    comPersonal.append(titleComPer);
    
    
    return comPersonal;


}

function viewcomDig(competencia){

    

    let comDigital = document.createElement("div");
    comDigital.className = "comDigital";

    let titleComDig = document.createElement("h2");
    titleComDig.className = "comDig-title";
    titleComDig.innerText = competencia.ambito;

    let datosComDig = document.createElement("p");
    datosComDig.className = "comDig-data";
    datosComDig.innerHTML = competencia.competencia;

    let levelBar = document.createElement("div");
    levelBar.className = "levelBar-com";
    levelBar.style.width = ((100 / 5) * competencia.nivel)+"%";

    comDigital.append(titleComDig);
    comDigital.append(datosComDig);
    comDigital.append(levelBar);
    
    return comDigital;


}
