document.getElementById("calcular").addEventListener("click", function() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    
    // Validación de datos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    
    let mensaje = "";
    
    if (imc < 18.5) {
        mensaje = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        mensaje = "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        mensaje = "Sobrepeso";
    } else {
        mensaje = "Obesidad";
    }

    document.getElementById("resultado").textContent = `Tu IMC es ${imc}. Categoría: ${mensaje}`;
    
    // Limpiar los campos
    document.getElementById("peso").value = '';
    document.getElementById("altura").value = '';
});