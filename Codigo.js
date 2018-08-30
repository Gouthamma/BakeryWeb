
function actualizarValor(estaChequeado, valor)
{
    // Variables.
    
    var suma_actual = 0;
    var campo_resultado = document.getElementById('txtValor');
    valor = parseInt(valor);
    valor1 = parseInt(document.getElementsByName('Rol'));
    var sumaTotal = suma_actual + valor1;

    // Obtener la suma que pueda tener el campo 'txtValor'.
    try
    {
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
    if (estaChequeado == true)
    {
        suma_actual = suma_actual + valor ;
    }
    else
    {
        suma_actual = suma_actual - valor ;
    }

    // Colocar el resultado de las operaciones anteriores de vuelta
    // al campo "txtValor".
    txtValor.value = sumaTotal;
}

function sumaTotal(Precio, Cantidad)
{
    var Total;

    Total = parseint(Precio) * parseInt(Cantidad);
    txtTotal.value = Total;
}