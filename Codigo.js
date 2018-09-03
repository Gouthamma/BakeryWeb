﻿function Rol(elemento)
{
    apoyo.value = elemento.value;
    txtValor.value = parseInt(apoyoTotal.value) + parseInt(apoyo.value) + parseInt(apoyoCobertura.value);
    valorTotal();
}


function RolAgregado(elemento)
{

    // Variables.
    var suma_actual = 0;
    var campo_resultado = apoyoTotal;
    valor = parseInt(elemento.value);

    // Obtener la suma que pueda tener el campo 'txtValor'.
    try {
        if (campo_resultado != null)
        {

            if (isNaN(campo_resultado.value))
            {
                campo_resultado.value = 0;
            }

            suma_actual = parseInt(campo_resultado.value);
        }
    }
    catch (ex)
    {
        alert('No existe el campo de la suma.');
    }

    // Determinar que: si el check está seleccionado "checked"
    // entonces, agregue el valor a la variable "suma_actual";
    // de lo contrario, le resta el valor del check a "suma_actual".
    if (elemento.checked == true) {
        suma_actual = suma_actual + valor;
    } else {
        suma_actual = suma_actual - valor;
    }

    // Colocar el resultado de las operaciones anteriores de vuelta
    // al campo "txtValor".
    campo_resultado.value = suma_actual;
    txtValor.value = parseInt(apoyoTotal.value) + parseInt(apoyo.value) + parseInt(apoyoCobertura.value);
    valorTotal();
}

function rolCobertura(cobertura)
{
    apoyoCobertura.value = cobertura.value;
    txtValor.value = parseInt(apoyoTotal.value) + parseInt(apoyo.value) + parseInt(apoyoCobertura.value);
    valorTotal();
}

function valorTotal()
{ 
    txtTotal.value = parseInt(txtValor.value) * parseInt(Cantidad.value);
}

