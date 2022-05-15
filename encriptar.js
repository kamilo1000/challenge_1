


const butt_encriptar = document.querySelector("#encriptar");
const tex = document.querySelector("#cop")
const texto_copiar = document.querySelector("#cop")
const image = document.createElement("img")
const p_texto = document.createElement("p") 


image.src = "imagenes/Muñeco.png"                           // crea la direccion del muñeco
image.className = "imagen-buscar"                           //crea la clase del muñeco
document.querySelector("#copiar").appendChild(image)        //crea la ubicacion del muñeco


p_texto.className = "p_text"                                // crea la direccion del texto 
p_texto.textContent = "Ningun mensaje fue encontrado "
document.querySelector("#copiar").appendChild(p_texto)

document.querySelector("#b-copiar").style.backgroundColor = "transparent"       //elimina los estilos del boton copiar
document.querySelector("#b-copiar").style.border = "none"
document.querySelector("#b-copiar").style.color = "transparent"
document.querySelector("#b-copiar").disabled = true


function desaparecer(){                                                         //quita o pone la imagen de ningun mensaje
    if(texto_copiar.value == "" ){
        console.log("true")
        document.querySelector("#copiar").appendChild(image)
        document.querySelector("#copiar").appendChild(p_texto)
        butt_copiar.style.backgroundColor = "transparent"
        butt_copiar.style.border = "none"
        butt_copiar.style.color = "transparent"
        butt_copiar.disabled = true
    }else{
        console.log("false")
        document.querySelector("#copiar").appendChild(image).remove()
        document.querySelector("#copiar").appendChild(p_texto).remove()
        butt_copiar.style.backgroundColor = "#1a3c40"
        butt_copiar.style.border = "3px"
        butt_copiar.style.color = "#ede6db" 
        butt_copiar.disabled = false
}
}


butt_encriptar.addEventListener("click",function(event){
    event.preventDefault();

    var encriptar = document.querySelector("#ingresar").value; 
    var letras = "abcdefghijklmnñopqrstuvwxyz ";
    var contador = 0;

    for(let i = 0; i < encriptar.length; i++){
        for(let j = 0; j < letras.length; j++){
            if(encriptar[i] == letras[j]){
                contador += 1    
            }
        }
    }

    if(contador == encriptar.length){
        mensaje()
    }else{
        //document.querySelector("#cop").value ="los caracteres son incorrectos"
        tex.innerHTML = "los caracteres son incorrectos"
        setTimeout(() => tex.innerHTML = "", 3000)
        document.querySelector("#ingresar").value = "";
    }

    function mensaje(){
     mens = encriptar
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")

    document.querySelector("#cop").textContent = mens;
    
    document.querySelector("#ingresar").value = "";

    }

    desaparecer()
    
})
