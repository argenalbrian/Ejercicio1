function calcular(){
    let base = document.getElementById('base').value;
    let altura = document.getElementById('altura').value;

    if(base && altura) {
        let area = parseInt(base) * parseInt (altura);
        document.getElementById('resultado').innerText = area;
    } else {
        alert("Porfavor ingrese numeros validos");
    }
}




function Limpiar(){
    document.getElementById("base").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("resultado").value = ""
    
}