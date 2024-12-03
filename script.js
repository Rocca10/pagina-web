let menuVisible = false;
// Funcion que muestra u oculta el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //Oculta el menu una vez que selecciono una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("excel");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("java");
        habilidades[5].classList.add("react");
        habilidades[6].classList.add("springBoot");
        habilidades[7].classList.add("angular");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("trabajoEnEquipo");
        habilidades[10].classList.add("resolucionDeProblemas");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("resilencia");
        habilidades[13].classList.add("pensamientoCritico");
    }
}

//Detecto el srolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 