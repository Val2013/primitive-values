function data(){
    let nombre = document.getElementById("pet").value;
    document.getElementById("saludo").innerHTML = "Nos encargaremos de " + nombre + " como si estuviera en casa."
    document.getElementById("pag1").className = "invisible"
}