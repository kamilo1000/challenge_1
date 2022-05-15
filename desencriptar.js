const butt_desencriptar = document.querySelector("#desencriptar");
const butt_copiar = document.querySelector("#b-copiar");
const texta_copiar = document.querySelector("#cop")

console.log(texta_copiar)

butt_desencriptar.addEventListener("click",function(event){
    event.preventDefault();

    var desencriptar = document.querySelector("#ingresar").value;

    mensaje = desencriptar
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
 
    fr = document.querySelector("#cop").textContent = mensaje;
    
    document.querySelector("#ingresar").value = "";

    desaparecer()

    console.log("usted hizo click")
    console.log(fr)
})




butt_copiar.addEventListener("click", function(event){            //quita el evento por defecto del boton para evitar que cargue la pagina
    event.preventDefault();
})

butt_copiar.addEventListener("click", function(){                 //habilita la funcion de copiar al portapapeles
    texta_copiar.focus()
    document.execCommand("selectAll");
    document.execCommand("copy")

    texta_copiar.innerHTML = "copiado al portapapeles";

    setTimeout(() => texta_copiar.innerHTML = "", 2000)
})