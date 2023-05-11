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
    fetch('datos.json')
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
    formacion.className = "formacion card";

    let titleEduc = document.createElement("h2");
    titleEduc.className = "educ-title card-title bg-warning ";
    titleEduc.innerText = estudio.curso;

    let datosFormacion = document.createElement("p");
    datosFormacion.className = "educ-data card-body bg-secondary text-white";
    datosFormacion.innerHTML = 
            estudio.centro + ", " + estudio.lugar +"<br />"
            + estudio.fecha;

    formacion.append(titleEduc);
    formacion.append(datosFormacion);
    
    return formacion;


}

function viewTrabajo(trabajo){

    

    let experiencia = document.createElement("div");
    experiencia.className = "col-md-3 experiencia card-lg p-2 mb-5 shadow";

    let titleExp = document.createElement("h2");
    titleExp.className = "exp-title card-title p-2 bg-warning rounded-2";
    titleExp.innerText = trabajo.cargo;

    let datosExperiencia = document.createElement("h3");
    datosExperiencia.className = "exp-data card-body lead bg-secondary text-white";
    datosExperiencia.innerHTML = 
            trabajo.empresa + ", " + trabajo.lugar;

    let fechaExperiencia = document.createElement("p");
    fechaExperiencia.className = "exp-date card-footer lead fs-4 pt-3";
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
    lenguaje.className = "idioma card";

    let titleIdioma = document.createElement("h3");
    titleIdioma.className = "idioma-title card-title";
    titleIdioma.innerHTML = idioma.idioma;

    let levelBar = document.createElement("div");
    if(idioma.nivel == "Nativo" ){
        levelBar.className = "card-footer";
        levelBar.style.fontSize= "1.5em"
        levelBar.innerHTML = idioma.nivel;
    }else {
        levelBar.className = "levelBar-idioma card-footer bg-success";
        levelBar.style.width =((100 / 5) * idioma.nivel)+"%";
    }
    
                                      

    lenguaje.append(titleIdioma);
    lenguaje.append(levelBar);
    
    return lenguaje;


}

function viewCurso(curso){

    

    let formacion = document.createElement("div");
    formacion.className = "cursos card bg-secondary mb-1";

    let titleCurso = document.createElement("h2");
    titleCurso.className = "curso-title card-title text-warning";
    titleCurso.innerText = curso.curso;

    let datosCurso = document.createElement("p");
    datosCurso.className = "curso-data card-body bg-warning ";
    datosCurso.innerHTML = 
            curso.centro + ", " +
            curso.fecha;

    formacion.append(titleCurso);
    formacion.append(datosCurso);
    
    return formacion;


}

function viewComPer(competencia){

    

    let comPersonal = document.createElement("div");
    comPersonal.className = "comPersonal card-sm";

    let titleComPer = document.createElement("h2");
    titleComPer.className = "comPer-title card-title";
    titleComPer.innerText = competencia.habilidad;

    
    comPersonal.append(titleComPer);
    
    
    return comPersonal;


}

function viewcomDig(competencia){

    const lenguajes = competencia.Lenguajes;
    const herramientas = competencia.Herramientas;
    const gestion = competencia.Gestion;
    const sistemas = competencia.Sistemas;
    const cloud = competencia.Cloud;

    
    for (var obj in competencia) {
       
       var comDigital = document.createElement("div");
       comDigital.className = "comDigital col-md-10 card d-flex flex-row flex-wrap justify-content-center p-3 gap-2 bg-dark text-warning";

       let titleComDig = document.createElement("div");
       titleComDig.className = "comDig-title card-title text-center ";
       titleComDig.innerHTML = obj;
       comDigital.append(titleComDig);

       if (obj == "Lenguajes"){
        lenguajes.forEach(lenguaje => {
            let datosComDig = document.createElement("div");
            datosComDig.className = "comDig-data card-body fs-5 border ";
            datosComDig.innerHTML = "<u>" + lenguaje.competencia + "</u>";
            
            let levelBar = document.createElement("div");
            levelBar.className = "levelBar-com card-footer bg-warning   ";
            levelBar.style.width = ((100 / 5) * lenguaje.nivel)+"%";
            
            
            datosComDig.append(levelBar);
            
            comDigital.append(datosComDig);
        });
        
       }else if (obj == "Herramientas"){
        herramientas.forEach(herramienta => {
            let datosComDig = document.createElement("div");
            datosComDig.className = "comDig-data card-body fs-5 border";
            datosComDig.innerHTML = "<u>" + herramienta.competencia + "</u>";
            
            let levelBar = document.createElement("div");
            levelBar.className = "levelBar-com card-footer bg-warning ";
            levelBar.style.width = ((100 / 5) * herramienta.nivel)+"%";
            
            
            datosComDig.append(levelBar);
            
            comDigital.append(datosComDig);
        });
        
       }else if (obj == "Gestion"){
        gestion.forEach(item => {
            let datosComDig = document.createElement("div");
            datosComDig.className = "comDig-data card-body fs-5 border";
            datosComDig.innerHTML = "<u>" + item.competencia + "</u>";
            
            let levelBar = document.createElement("div");
            levelBar.className = "levelBar-com card-footer bg-warning ";
            levelBar.style.width = ((100 / 5) * item.nivel)+"%";
            
            
            datosComDig.append(levelBar);
            
            comDigital.append(datosComDig);
        });
        
       }else if (obj == "Sistemas"){
        sistemas.forEach(sistema => {
            let datosComDig = document.createElement("div");
            datosComDig.className = "comDig-data card-body fs-5 border";
            datosComDig.innerHTML = "<u>" + sistema.competencia + "</u>";
            
            let levelBar = document.createElement("div");
            levelBar.className = "levelBar-com card-footer bg-warning ";
            levelBar.style.width = ((100 / 5) * sistema.nivel)+"%";
            
            
            datosComDig.append(levelBar);
            
            comDigital.append(datosComDig);
        });
        
       }else if (obj == "Cloud"){
        cloud.forEach(service => {
            let datosComDig = document.createElement("div");
            datosComDig.className = "comDig-data card-body fs-5 border ";
            datosComDig.innerHTML = "<u>" + service.competencia + "</u>";
            
            let levelBar = document.createElement("div");
            levelBar.className = "levelBar-com card-footer bg-warning ";
            levelBar.style.width = ((100 / 5) * service.nivel)+"%";
            
            
            datosComDig.append(levelBar);
            
            comDigital.append(datosComDig);
        });
        
       };
    };
    
   



    return comDigital;


}
